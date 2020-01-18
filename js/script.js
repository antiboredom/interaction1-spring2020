$(document).ready(function(){

	/* CHANGE CSS at SUNSET */
	// var currentdate = new Date(); 
	// var datetime = currentdate.getHours() + currentdate.getMinutes();
	// var time = currentdate.getHours() + ':' + currentdate.getMinutes();

	// if (datetime < 1952 && datetime > 631) {
	// 	$('body').addClass('daytime');
	// } else {
	// 	$('body').addClass('nighttime');
	// }

	// $('#time').html(time);
 //    console.log (datetime);

	
	/* MAKE ANCHOR LINKS SMOOTHLY SCROLL */

	$('a.anchor, .footnotereverse a, sup.footnote a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

	/* MAKE META BAR SIT AT BOTTOM IF IT'S A SHORT PAGE */

	// $(window).load(function(){

		var window_height = $(window).height();
		var document_height = $(document).height();

		if(document_height <= window_height) {
			$('#meta-bar').addClass("bottom");
		}

		else {
			$('#meta-bar .back-to-top').show();
		}

		$('#meta-bar').show();

	// });

	/* CALENDAR TOGGLE */

	$('ul.calendar .title').click(function(){
		$(this).closest('li').find('.body').slideToggle('fast');
	});

	/* SHUFFLE REORDER LIST ABOVE */

	$('a.shuffle').click(function(){
		/* get html paragraph into array and shuffle it */
		var w = $(this).closest('p').prev();
		var x = w.text();
		var y = x.split('\n');
		var z = y.sort(function() { return 0.5 - Math.random() });
		console.log("this is first array: " + z);

		/* take new shuffled array and put it back into html paragraph */
		var zz = z.reverse().join('<br />');
		console.log("this is second array: " + zz);
		w.html('<p>' + zz + '</p>');
		$(this).fadeOut('fast');
	});

	/* SECTIONS SMOOTH SCROLL TABLE OF CONTENTS */

	$('.sections-index a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

});