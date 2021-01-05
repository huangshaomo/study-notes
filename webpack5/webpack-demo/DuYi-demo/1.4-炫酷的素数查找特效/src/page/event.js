//负责调用
import NumberTimer from "../util/number"
import appendNumber from "./appendNumber"
var n = new NumberTimer(100);
n.onNumberCreated = function (n, isPrime) {
    appendNumber(n, isPrime);
}

var isStart = false
window.onclick = function(){
    if(isStart){
        n.stop()
        isStart = false
    }else{
        n.start()
        isStart = true
    }

}

