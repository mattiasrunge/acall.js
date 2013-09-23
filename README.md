# acall.js

A simple wrapper for a node.js spawn call which gives an easy callback to get stdout.


## Usage

    $ var acall = require("acall.js");
    $
    $ acall("date", function(error, output)
    $ {
    $   // Do stuff
    $ });
    $
    $ acall([ "echo", "hello" ], function(error, output)
    $ {
    $   // Do stuff
    $ });
    $
    $ acall("ls", { cwd: "~/" }, function(error, output)
    $ {
    $   // Do stuff
    $ });



