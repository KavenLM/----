window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var big = document.querySelector('.big');
    var mask = document.querySelector('.mask');
    preview_img.addEventListener('mouseover', function () {
        big.style.display = 'block';
        mask.style.display = 'block';
    });
    preview_img.addEventListener('mouseout', function () {
        big.style.display = 'none';
        mask.style.display = 'none';
    });

    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //maskMax代表mask坐标的最大值(因为是正方形，所以x，y的坐标最大值相等)
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        var bigImg = document.querySelector('.bigImg');
        //big的坐标最大值
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大小图片的比例公式为  mask的坐标 / mask的坐标最大值  = big的坐标 / big的坐标最大值
        //但实际上big是没有动的，是bigImg的定位在发生变动
        var bigX = maskX / maskMax * bigMax;
        var bigY = maskY / maskMax * bigMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    });
});