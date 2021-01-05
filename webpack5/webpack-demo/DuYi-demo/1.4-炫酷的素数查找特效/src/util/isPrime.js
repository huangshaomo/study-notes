
/**
 * 判断参数是否为素数。素数不小于1，且仅能被1和自身整除
 * 思路：假设数字5，去掉1和本身，在2至4之间如果能找到被5整除的数，说明不是素数，否则是
 * @param {*} n 接收一个数字
 */
export default function(n){
    if(n < 2) return;
    for(let i = 2; i <= n - 1; i++){
        if(n % i === 0) return false
    }
    return true
}
