// let arr1 = ['c','d']
// console.log(['a','b'].concat(arr1,'e'));  //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr1[Symbol.isConcatSpreadable]);   //undefined

// let arr2 = ['c','d']
// arr2[Symbol.isConcatSpreadable] = false;
// console.log(['a','b'].concat(arr2,'e')  )// ['a', 'b', ['c','d'], 'e']



let obj = {0:'c',1:'d',length:2};
['a','b'].concat(obj,'e')   // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true
console.log(['a','b'].concat(obj,'e') );    // ['a', 'b', 'c', 'd', 'e']