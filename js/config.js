var apiUrl = "http://police.xiaofen809.com:8080";
(function (w) {
    w.readData = function (key) {
        return  JSON.parse(localStorage.getItem(key) || '[]')
    };
    w.saveData = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }
})(window);

//自定义弹框
function Toast(msg,duration){
    duration=isNaN(duration)?3000:duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="width: 60%;min-width: 150px;opacity: 0.7;height: 30px;"+
                    "color: rgb(255, 255, 255);line-height: 30px;"+
                    "text-align: center;border-radius: 5px;position: fixed;"+
                    "bottom: 30px;left: 20%;z-index: 999999;background: rgb(0, 0, 0);"+
                    "font-size: 12px;";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
}
