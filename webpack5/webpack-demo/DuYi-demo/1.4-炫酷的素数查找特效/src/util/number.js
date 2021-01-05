import isPrime from './isPrime'
//该工具类函数用于定时产生数字
export default class numberTImer{
    constructor(duration=500){
        this.duration = duration;
        this.timer = null;
        this.onNumberCreated =null; //当一个数字产生的时候，要调用的回调函数
        this.number = 1 //当前数字
    }
    start(){
        this.timer = setInterval(()=>{
            this.onNumberCreated && this.onNumberCreated(this.number,isPrime(this.number))
            this.number++;
        },this.duration)
    }
    stop(){
        clearInterval(this.timer);
        this.timer = null;
    }
}