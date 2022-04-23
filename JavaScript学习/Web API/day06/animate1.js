function animate1(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
            return;
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}