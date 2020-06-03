//計算函式
function calculate(n){
    return n*100 + 'unit'
}

//字串
var text = 'hi webpack';

module.exports = {
    name : text,
    cal : calculate
}

function getSize(width, height, depth){
    var area = width*height;
    var volume = width*height*depth;
    var size = [area, volume];;
    return size;
}

var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];
console.log(areaOne);
console.log(volumeOne);