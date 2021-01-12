// let arr1 = ['c','d']
// console.log(['a','b'].concat(arr1,'e'));  //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr1[Symbol.isConcatSpreadable]);   //undefined

// let arr2 = ['c','d']
// arr2[Symbol.isConcatSpreadable] = false;
// console.log(['a','b'].concat(arr2,'e')  )// ['a', 'b', ['c','d'], 'e']



// let obj = {0:'c',1:'d',length:2};
// ['a','b'].concat(obj,'e')   // ['a', 'b', obj, 'e']

// obj[Symbol.isConcatSpreadable] = true
// console.log(['a','b'].concat(obj,'e') );    // ['a', 'b', 'c', 'd', 'e']


class A1 extends Array{
    constructor(args){
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}

class A2 extends Array{
    constructor(args){
        super(args);
        this[Symbol.isConcatSpreadable] = false;
    }
}

let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
[1, 2].concat(a1).concat(a2)
// [1, 2, 3, 4, [5, 6]]