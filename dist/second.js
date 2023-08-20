let c = "I am c from second.ts file";
export let d = "I am d from second.ts file";
function sum(a, b) {
    a = 5;
    b = 10;
    return console.log(a + b);
}
// export form ending
export { c, sum };
//objects export.
// declare and export objects
