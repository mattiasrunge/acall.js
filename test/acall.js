
var acall = require("../acall.js");
var assert = require("assert");

suite("acall.js", function()
{
  test("Just a simple command", function(done)
  {
    acall("date", done);
  });

  test("One parameter and check output", function(done)
  {
    acall([ "echo", "Hello World!"], function(error, output)
    {
      if (error)
      {
        done(error);
        return;
      }

      assert.equal("Hello World!\n", output);
      done();
    });
  });

  test("One parameter and an option", function(done)
  {
    acall([ "ls", "-l" ], { cwd: "/" }, function(error, output)
    {
      if (error)
      {
        done(error);
        return;
      }

      assert.ok(output.length > 0);
      done();
    });
  });

  test("Check that errors are propagated", function(done)
  {
    acall("a_comman_that_should_not_exist", function(error)
    {
      assert.equal(0, error.indexOf("Exited with result"));
      done();
    });
  });
});
