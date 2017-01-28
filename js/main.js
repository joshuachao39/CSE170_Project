'use strict';

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	//$("#sorryText").text(document.innerWidth);
	let width = $(window).width();
	// $("#sorryText").text(width);
	if (width <= 480) {
		document.location = "mobile.html";
	} else {
		document.location = "desktop.html";
	}
}


