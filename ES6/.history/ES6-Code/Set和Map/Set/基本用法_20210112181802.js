const s = new Set();
[1,2,3,4,2,1].forEach((x=>{
    s.add(x)
}))
console.log(s); //Set { 1, 2, 3, 4 }

var set = new Set([1,2,3,4,4])
console.log(set)
[...set]