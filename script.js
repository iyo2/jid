$(document).ready(function(){










    if (window.matchMedia('(min-width:1130px)').matches) {
        /* ウィンドウサイズ1130以上の処理を記述 */
        $('header a').click(function(){
          var a = $(this).attr('href');
          var b = $(a).offset().top;
          $('html,body').animate({
            'scrollTop': b-92.4
          },'slow');
        });
      } else if (window.matchMedia( "(max-width: 1130px) and (min-width: 976px)" ).matches) {
        /* ウィンドウサイズが 976px以上1130px以下の場合のコードをここに */
        $('header a').click(function(){
          var a = $(this).attr('href');
          var b = $(a).offset().top;
          $('html,body').animate({
            'scrollTop': b-91.6
          },'slow');
        });
      } else if (window.matchMedia( "(max-width: 976px) and (min-width: 705px)" ).matches) {
        /* ウィンドウサイズが 705px以上976px以下の場合のコードをここに */
        $('header a').click(function(){
          var a = $(this).attr('href');
          var b = $(a).offset().top;
          $('html,body').animate({
            'scrollTop': b-66
          },'slow');
        });
      } else if (window.matchMedia( "(max-width: 705px) and (min-width: 349px)" ).matches) {
        /* ウィンドウサイズが 349px以上705px以下の場合のコードをここに */
        $('header a').click(function(){
          var a = $(this).attr('href');
          var b = $(a).offset().top;
          $('html,body').animate({
            'scrollTop': b-88
          },'slow');
        });
      }else if (window.matchMedia('(max-width:349px)').matches) {
        /* ウィンドウサイズ349以下の処理を記述 */
        $('header a').click(function(){
          var a = $(this).attr('href');
          var b = $(a).offset().top;
          $('html,body').animate({
            'scrollTop': b-110
          },'slow');
        });
      };







      
});
