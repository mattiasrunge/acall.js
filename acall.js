
var spawn = require("child_process").spawn;

module.exports = function(command, options, callback)
{
  var stderr = "";
  var stdout = "";
  var result = 0;
  var args = [];
  var encoding = "ascii";

  // Make sure the command is valid
  if (command instanceof Array)
  {
    var tmp = command.shift();
    args = command;
    command = tmp;
  }

  // If no options were given
  if (typeof options === "function")
  {
    callback = options;
    options = {};
  }

  // Parse out encoding if set
  if (options.encoding)
  {
    encoding = options.encoding;
    delete options.encoding;
  }

  try
  {
    var process = spawn(command, args, options);

    process.stdout.setEncoding(encoding);
    process.stderr.setEncoding(encoding);


    process.stdout.on("data", function(data)
    {
      stdout += data;
    });

    process.stderr.on("data", function(data)
    {
      stderr += data;
    });

    process.on("error", function(error)
    {
      stderr += error.message;
      result = 255;
    });

    process.on("exit", function(code)
    {
      result = code;
    });

    process.on("close", function()
    {
      if (result !== 0)
      {
        callback("Exited with result: " + result + "\n" + stderr);
        return;
      }

      callback(null, stdout);
    });
  }
  catch (e)
  {
    callback(e);
  }
};
