"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.c = exports.d = void 0;
let c = "I am c from second.ts file";
exports.c = c;
exports.d = "I am d from second.ts file";
function sum(a, b) {
    a = 5;
    b = 10;
    return console.log(a + b);
}
exports.sum = sum;
//objects export.
// declare and export objects
