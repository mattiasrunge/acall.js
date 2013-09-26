# acall.js

A simple wrapper for a node.js spawn call which gives an easy callback to get stdout.

## Travis CI
[![Build Status](https://travis-ci.org/mattiasrunge/acall.png)](https://travis-ci.org/mattiasrunge/acall])

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



