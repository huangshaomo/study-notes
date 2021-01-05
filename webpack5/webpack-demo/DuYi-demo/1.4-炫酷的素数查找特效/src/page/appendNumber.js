//这里用于把数字加入到页面中，并根据是否素数加入颜色。
//center中的数字如果是素数，新建一个名为center的标签并加入数字跟颜色，不是素数的只把数字加入center原来的
import radColor from '../util/radColor'
import {getRandom} from '../util/radColor'
import $ from 'jquery'
// 定时生产span标签包裹数字，放入容器中
var container = $('#divContainer');
var center = $('#divCenter');

export default function(number,isPrime){
    var span = $('<span>').text(number);
    if(isPrime){
        var color = radColor()
        span.css('color',color);
        createCenterPrimeNumber(number,color)
    }
    container.append(span);
    //产生中间的数字
    createCenterNumber(number)
}
function createCenterNumber(number){
    center.text(number);
}

function createCenterPrimeNumber(number,color){
    var div = $('<div>').text(number).addClass('center').css('color',color);
    $("body").append(div);
    //加入了div后，强行让页面重新渲染,divp[0]是juqeyr包裹了元素
    getComputedStyle(div[0]).left; //只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow
    div.css("transform", `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`).css("opacity", 0)
}