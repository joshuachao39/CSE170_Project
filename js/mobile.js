$(document).ready(function() {
	initializePage();
});

function initializePage() {
	//$("#sorryText").text(document.innerWidth);
	let width = $(window).width();
	//$("#mobileText").text(width);
	if (width > 480) {
		document.location = "desktop.html";
	}
}

$(window).resize(function() {
	let width = $(window).width();
	let height = $(window).height();
	if (width > 480 || width > height) {
		document.location = "desktop.html";
	}
});

