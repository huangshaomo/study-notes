var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
/**
 * 接收两个数字，随机产生两个数字之间的随机整数 [min,max),左闭右开区间
 * @param {*} min 
 * @param {*} max 
 */
export function getRandom(min,max){    
    return Math.floor(Math.random() * (max- min) + min);
}

export default function(){
    var idx = getRandom(0,colors.length);
    return colors[idx]
}