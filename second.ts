let c: string = "I am c from second.ts file"


export let d = "I am d from second.ts file"


function sum(a:number, b:number):void { 
    a = 5
    b = 10
    return console.log(a + b)

}

// export form ending

export {c, sum};


//objects export.
// declare and export objects

