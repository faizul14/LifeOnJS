/* eslint-disable no-unused-vars */
console.log('setup succes');
// disini merupakan base untuk menjalankan semua program.
// jika ingin menjalankan program yang di inginkan tinggal di uncoment.

// Base untuk code asyncronus
const { runAsynChainingPromise } = require('./asyncronus/asynChainingPromise');
const { runAsynPromiseStaticMethod } = require('./asyncronus/asynPromiseStaticMethod');
const { runAsynAwaitPromise } = require('./asyncronus/asynAwaitPromise');
const { runAsyncronusPromise } = require('./asyncronus/asyncronusPromise');
const { runAsyncronusPromisify } = require('./asyncronus/asyncronusPromisify');
const { runAsyncronusCallback } = require('./asyncronus/asyncronusCallback');
const { runAsyncronus } = require('./asyncronus/asyncronus');

// run runAsyncronus
runAsyncronus();

// run runAsyncronusCallback
// runAsyncronusCallback();

// run runAsyncronusPromise
// runAsyncronusPromise();

// run  runAsyncronusPromisify
// runAsyncronusPromisify();

// run asynChainingPromise.js
// runAsynChainingPromise();

// run runAsynPromiseStaticMethod
// runAsynPromiseStaticMethod();

// run  runAsynAwaitPromise
// runAsynAwaitPromise();
