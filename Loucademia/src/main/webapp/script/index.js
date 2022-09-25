/**
 * 
 */
 
const html = document.querySelector("html")
let checkbox = document.querySelector("#switch")

// Toggle Dark Mode
function toggleDarkMode() {
	html.classList.toggle("dark-mode");	
}

// Save or Remove
function saveOrRemove() {
	localStorage.removeItem("dark-mode");
	if (html.classList.contains("dark-mode")) {
		localStorage.setItem("dark-mode", 1);
		checkbox.setAttribute('checked', true);
	} else {
		checkbox.setAttribute('checked', false);
	}
}

// Load Light ou Dark Mode
function loadTheme() {
	const darkMode = localStorage.getItem("dark-mode");
	
	if (darkMode) {
		checkbox.setAttribute('checked', true);
		toggleDarkMode();
	}
}

loadTheme();
 
checkbox.addEventListener("change", function() {
	toggleDarkMode();
	saveOrRemove();
});
	
