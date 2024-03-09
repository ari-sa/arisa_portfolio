$(function(){
    $('#slide').slick({
        arrows: false,          //左右の矢印はなし
        autoplay: true,         //自動再生
        autoplaySpeed: 0,       //自動的に動き出す待ち時間
        speed: 7000,            //スライドのスピード。(7秒)
        infinite: true,         //スライドをループ
        pauseOnHover: false,    //ホバー時スライドを一時停止
        cssEase: 'linear',      //動き方
        slidesToShow: 2,        //スライドを画面に2枚見せる
        slidesToScroll: 1,      //1回のスライドで動かす要素数

        responsive: [
            {
                breakpoint: 767,
                settings: 'unslick'
      }
    ]
});
    //topボタン
    $(window).scroll(function(){               //画面をスクロールしたとき
        if($(this).scrollTop() > 1000){        //1000pxより多くスクロールした場合
            $('#top-page').fadeIn();           //ボタンをフェードイン
        }else{                                 //それ以外の場合
            $('#top-page').fadeOut();          //ボタンをフェードアウト
        }
    });
    $('#top-page').click(function(){                //画面の上から0pxの所まで500ミリ秒（0.5秒）スクロール
    $('html, body').animate({scrollTop: 0}, 500);
});

  });
