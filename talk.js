$(function() {
    $('#yes').click(function(event) {
        modal('我就知道你愿意 不只2024 我们都要携手同行。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('我就知道你会选这个的（叛逆的小盆友）😁', A);
    });
});

function A() {
    modal('不能陪你一起放烟花 但我想做点什么', B);
}

function B() {
    modal('有些仓促 但爱你是认真的', C);
}

function C() {
    modal('新的一年 祝愿你龙行龘龘 龙年大吉', D);
}

function D() {
    modal('理科生专属的浪漫叭', E);
}

function E() {
    modal('在我心中你的重要不言而喻', F);
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
