$(document).ready(function(){

			$('.promo-title,.promo-titlep,.play-btn,.playbtnli,.img1').waypoint(function(direction){
                $('.promo-title,.promo-titlep,.play-btn,.playbtnli,.img1').addClass('animated fadeInLeft')
                },{
                offset:'50%'
              });


			$('#services .title,.service-img,#h3,#p,.allservicesbtn').waypoint(function(direction){
                $('#services .title,.service-img,#h3,#p,.allservicesbtn').addClass('animated fadeInDown')
                },{
                offset:'50%'
              });

			$('#aboutus .title,.about-title,.aboutul,.aboutimg').waypoint(function(direction){
                $('#aboutus .title,.about-title,.aboutul,.aboutimg').addClass('animated fadeInLeft')
                },{
                offset:'50%'
              });

			$('#Testimonials .container .title,.textip,#textiimg,.user-details').waypoint(function(direction){
                $('#Testimonials .container .title,.textip,#textiimg,.user-details').addClass('animated fadeInDown')
                },{
                offset:'50%'
              });

			$('#social_media #socialh2,.social-icons').waypoint(function(direction){
                $('#social_media #socialh2,.social-icons').addClass('animated fadeInLeft')
                },{
                offset:'50%'
              });

			$('.footers ,.logo,.footp,.form-row,.btn-primary').waypoint(function(direction){
                $('.footers ,.logo,.footp,.form-row,.btn-primary').addClass('animated fadeInDown')
                },{
                offset:'10%'
              });

		});



