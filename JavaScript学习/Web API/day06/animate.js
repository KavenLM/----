function animate(obj, target, callback) {
    clearInterval(obj.timer);

    obj.timer = setInterval(() => {
        //缓动动画公式每次移动距离：  (目的位置 - 当前位置) / 10
        //元素移动距离最好是要取整数，大于零就向上取整，小于零就向下取整               
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数，当动画执行完毕是执行callback()函数
            if(callback){
                callback()
            }
            return ;
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}