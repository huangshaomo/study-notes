let arr1 = ['c','d']
console.log(['a','b'].concat(arr1,'e'));  //[ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr1[Symbol.isConcatSpreadable]); 