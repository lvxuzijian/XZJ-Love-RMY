$(function() {
    $('#yes').click(function(event) {
        modal('我就知道你愿意 我会陪你走过接下来的日日夜夜。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('我就知道你会选这个（叛逆小盆友）', A);
    });
});

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我知道你不忍心让我一个人', C);
}

function C() {
    modal('我知道你爱的就是我', D);
}

function D() {
    modal('不愿意，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('跟我一起走向新的一年吧', G);
}

function G() {
    modal('给你我平平淡淡的等待和守候', H);
}

function H() {
    modal('给你我轰轰烈烈的渴望和温柔', I);
}

function I() {
    modal('给你我百转千回的喜乐和忧愁', J)
}

function J() {
    modal('给你我微不足道 所有的所有', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
