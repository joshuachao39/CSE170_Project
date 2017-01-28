'use strict';

$(document).ready(function() {
	let width = $(window).width();
	//$("#desktopSorryText").text(width);
	if (width <= 480) {
		document.location = "mobile.html";
	}
});

$(window).resize(function() {
	let width = $(window).width();
	let height = $(window).height();
	if (width <= 480 && height >= width) {
		document.location = "mobile.html";
	}

});