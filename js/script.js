"use strict";

// Listening for a click event on the projects and contact elements. When the event is triggered, it
// will run the code inside the function.
const init = () => {
	// Getting the elements with the id of projects and contact.
	const projects = document.getElementById("projects");

	// An event listener. It is listening for a click event on the projects and contact elements. When the
	// event is triggered, it will run the code inside the function.
	projects.onclick = () => {
		alert("Coming soon :)");
	};

};

// Running the init function when the page loads.
window.onload = init;
