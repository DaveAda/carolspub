$(document).ready(function(){

	var $bodycontainer1wrapper = $('.body-container-1-wrapper');
	var $headerwrapper = $('.header-wrapper');
	var $instalikes = $('.insta-likes');

	var sticky = new Waypoint.Sticky({
	  element: $('.header-wrapper')[0]
	});


	/*MAIN INSTAGRAM FEED*/
    var feed = new Instafeed({
        get: 'user',
        limit: 50,
        sortBy:'most-recent',
        userId: 7273521093,
        resolution: 'standard_resolution',
        accessToken: '7273521093.1677ed0.71ce96a900a3483c95c4456cfbca97eb',
        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="insta-likes"><div>{{likes}} <i class="fa fa-heart"></i></div><i class="fab fa-instagram insta-ig"></i><div class="insta-caption">{{caption}}</div></div></a></li>',
      
       /* <div class="ig-caption">{{caption}}</div>*/
      after: function() {
     
        $('#instafeed').slick({
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: $('#arrow-left'),
          nextArrow: $('#arrow-right'),
          mobileFirst: true,
          pauseOnFocus: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
        {
            breakpoint: 1220,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 900,
            settings: {
            slidesToShow: 2
              }
        }
          ]
        });
      },
      success: function() {
      }
    });
    feed.run();
});