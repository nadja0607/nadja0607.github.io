$(function() {

    //delaying display of the nav bar
	$('.nav').hide().delay(300).fadeIn(1000);

    // displaying a paragraph
	$('.links').eq(0).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
		let $about = '<p>Pizza (Italian: [ˈpittsa]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.<p>';
		$('#content').html($about);
	})

    // displaying video
	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
		let $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/8Q_9h6VKm9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('#content').html($video);	
	})

    // diplaying photo
	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('#content').empty();
		let $menuphoto = '<img id="menu" width=500 src="menu.jpg" border=2>';
        $('#content').html($menuphoto);
	})

});