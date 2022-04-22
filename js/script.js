"use strict";

const init = () => {
	alert(
		"IMPORTANT!\n\nThis website is constanly updating, so it may be possible that some pages, animations or transitions are not yet visible/available."
	);

	alert("Enjoy your visit!");

	const projects = document.getElementById("projects");
	const contact = document.getElementById("contact");

	projects.onclick = () => {
		alert("Coming soon :)");
	};

	contact.onclick = () => {
		alert("Coming soon :)");
	};
};

window.onload = init;
