// var waypoint = new Waypoint({
//   	element: document.getElementById('px-offset-waypoint'),
//   	handler: function(direction) {
//     	notify('I am 20px from the top of the window')
//   	},
//   	offset: 20 
// 	})

$(document).ready(function() {
	$('.Aboutus_img').waypoint(function(direction){
		$('.Aboutus_img').addClass('animate__animated  animate__fadeInRight animate__delay-.5s');
	},{
		offset:'50%'
	});

	$('.Aboutus_h2,.Aboutus_h4,.Aboutus_p,.Aboutus_icon').waypoint(function(direction){
		$('.Aboutus_img,.Aboutus_h2,.Aboutus_h4,.Aboutus_p,.Aboutus_icon').addClass('animate__animated  animate__fadeInRight animate__delay-.7s');
	},{
		offset:'50%'
	});

	$('.education_h2,.education_a').waypoint(function(direction){
		$('.education_h2,.education_a').addClass('animate__animated  animate__fadeInLeft animate__delay-.5s');
	},{
		offset:'50%'
	});

	$('.skill_h2,.skill_card').waypoint(function(direction){
		$('.skill_h2,.skill_card').addClass('animate__animated  animate__fadeInRight animate__delay-.5s');
	},{
		offset:'50%'
	});

	$('.passion_h2,.passion_btn1,.passion_btn2').waypoint(function(direction){
		$('.passion_h2,.passion_btn1,.passion_btn2').addClass('animate__animated  animate__fadeInLeft animate__delay-.5s');
	},{
		offset:'50%'
	});

	$('.project_h2,.project_img').waypoint(function(direction){
		$('.project_h2,.project_img').addClass('animate__animated  animate__fadeInUpBig animate__delay-.5s');
	},{
		offset:'50%'
	});

	$('.contact_h2,.contact_i,.contact_form').waypoint(function(direction){
		$('.contact_h2,.contact_i,.contact_form').addClass('animate__animated  animate__fadeInDownBig animate__delay-.5s');
	},{
		offset:'50%'
	});
});

