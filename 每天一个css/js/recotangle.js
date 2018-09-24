(function(window){

    var room = document.getElementById('room');
    room.addEventListener('click', function (e) {
        if (e.target.className.indexOf('page') >= 0) {
            var pageClass = e.target.getAttribute('class');
            chooseWay(pageClass.substring(5));
        }
    });

    //关于方向的选择
    function chooseWay (type) {
        var fn;
        switch(type){
            case 'top':
                vertical(type);
            break;
            case 'left':
                horizontal(type);
            break;
            case 'right':
                horizontal(type);
            case 'bottom':
                vertical(type);
            default:
            break;
        }

        return fn;
    }

    //垂直方向
    function vertical( target ) {
        // room.setAttribute('style','transform:rotateZ(0deg) rotateY(0deg) rotateX(-85deg)');

        var verticalPipe = ['bottom' , 'front','top','back'];
        var verticalPipeCallBack = [gotoBack,gotoBottom,gotofront,gotoTop];
        
        if (target == 'top') {//如果target是Top，那麼就是從上到下
            for (var i = 0 ; i < verticalPipe.length ;i++) {
                verticalPipeCallBack[i](verticalPipe[i]);
            }
        }else if (target == 'bottom'){//如果target是Bottom，那麼就是從下到上
            verticalPipe = verticalPipe.concat(verticalPipe).splice(2,4);
            for (var i = 0 ; i < verticalPipe.length ;i++) {
                verticalPipeCallBack[i](verticalPipe[i]);
            }
        }
    }

    //水平方向
    function horizontal ( target){
        // room.setAttribute('style','transform:rotateZ(0deg) rotateY(0deg) rotateX(90deg)');
        var horizontalPipe = ['left' , 'front','right','back'];
        var horizontalCallBack = [gotofront,gotoRight,gotoBack,gotoLeft];
        
        if (target == 'left') {//如果target是left，那麼就是從左到右
            for (var i = 0 ; i < horizontalPipe.length ;i++) {
                horizontalCallBack[i](horizontalPipe[i]);
            }
        }else if (target == 'right'){//如果target是right，那麼就是從右到左
            horizontalPipe = ['right' ,'back','left', 'front'];
            for (var i = 0 ; i < horizontalPipe.length ;i++) {
                horizontalCallBack[i](horizontalPipe[i]);
            }
        }
    }


    /* 
    
    上：TOP -> Back,    下：Top -> Front
        Front->Top,        Front->Bottom
        Back->Bottom,      Bottom->Back
        Bottom->Front      Back->Top
    
        左：Left ->Back 右：Left->Front
            Front ->Left   Front -> Right
            Right -> Front Right ->Back
            Back -> Right   Back -> Left 
    */

    window.gotofront = function (element){
        var pages = document.getElementsByClassName('page');
        for (var i = 0 ; i < pages.length ;i++) {
            if (pages[i].getAttribute('class').indexOf(element) >= 0 ) {
                pages[i].setAttribute('class','page front');
                break;
            }
        }
    }

    window.gotoBack = function (element) {
        var pages = document.getElementsByClassName('page');
        for (var i = 0 ; i < pages.length ;i++) {
            if (pages[i].getAttribute('class').indexOf(element) >= 0 ) {
                pages[i].setAttribute('class','page back');
                break;
            }
        }
    }

    window.gotoTop = function (element) {
        var pages = document.getElementsByClassName('page');
        for (var i = 0 ; i < pages.length ;i++) {
            if (pages[i].getAttribute('class').indexOf(element) >= 0 ) {
                pages[i].setAttribute('class','page top');
                break;
            }
        }
    }

    window.gotoBottom = function (element) {
        var pages = document.getElementsByClassName('page');
        for (var i = 0 ; i < pages.length ;i++) {
            if (pages[i].getAttribute('class').indexOf(element) >= 0 ) {
                pages[i].setAttribute('class','page bottom');
                break;
            }
        }
    }

    window.gotoLeft = function (element) {
        var pages = document.getElementsByClassName('page');
        for (var i = 0 ; i < pages.length ;i++) {
            if (pages[i].getAttribute('class').indexOf(element) >= 0 ) {
                pages[i].setAttribute('class','page left');
                break;
            }
        }
    }

    window.gotoRight = function (element) {
        var pages = document.getElementsByClassName('page');
        for (var i = 0 ; i < pages.length ;i++) {
            if (pages[i].getAttribute('class').indexOf(element) >= 0 ) {
                pages[i].setAttribute('class','page right');
                break;
            }
        }
    }



})(window)