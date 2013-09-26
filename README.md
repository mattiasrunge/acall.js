# acall.js
[![Build Status](https://travis-ci.org/mattiasrunge/acall.js.png)](https://travis-ci.org/mattiasrunge/acall.js)

A simple wrapper for a node.js spawn call which gives an easy callback to get stdout.

## Usage

    $ var acall = require("acall.js");
    $
    $ acall("date", function(error, output)
    $ {
    $   if (error)
    $   {
    $     console.log(error);
    $     return;
    $   }
    $
    $   console.log(output);
    $ });
    $
    $ acall([ "echo", "hello" ], function(error, output)
    $ {
    $   if (error)
    $   {
    $     console.log(error);
    $     return;
    $   }
    $
    $   console.log(output);
    $ });
    $
    $ acall("ls", { cwd: "/" }, function(error, output)
    $ {
    $   if (error)
    $   {
    $     console.log(error);
    $     return;
    $   }
    $
    $   console.log(output);
    $ });



