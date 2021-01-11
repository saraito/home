/**
* Template Name: MyPortfolio - v2.2.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  var burgerMenu = function() {
    $('.burger').click(function(e) {
      $(window).scrollTop(0);
      if (!$('.burger').hasClass('active'))
        $('.burger').addClass('active');
      else
        $('.burger').removeClass('active');
    });
  }
  burgerMenu();

  var siteIstotope = function() {
    var $container = $('#portfolio-grid').isotope({
      itemSelector: '.item',
      isFitWidth: true
    });

    $(window).resize(function() {
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });

    $container.isotope({
      filter: '*'
    });

    $('#filters').on('click', 'a', function(e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
      $('#filters a').removeClass('active');
      $(this).addClass('active');
    });
  }
  $(window).on('load', function() {
    siteIstotope();
  });

  var siteOwlCarousel = function() {
    $('.testimonial-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();

  $(window).on('load', function() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      once: true
    });
  });

})(jQuery);


$(document).on('ready', function() {
	$(".full-screen-o").slick({
	  centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
	  centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
	  dots: true, // ドットインジケーターの表示
	  autoplay: true, // 自動再生を設定
	  autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
	  speed: 1000, // スライド/フェードアニメーションの速度を設定
	  infinite: true // スライドのループを有効にするか
	});
  });