var changed = false;

run = function () {
	changed = true;
	if (document.readyState=="complete") {

		// Get chat window
		var win = document.getElementsByClassName("_ksg clearfix")[0];

		// Clear body
		document.body.innerHTML="";

		// Set backgrounds and styles
		document.body.style.backgroundColor="black";
		win.style.backgroundColor="black";
		win.style.fontFamily="Courier";
		win.style.borderStyle = "none";
		win.style.color="white";

		// Hide all images
		images = win.getElementsByTagName("img");
		for (i = 0; i < images.length; i++) {
			images[i].style.visibility="hidden";
		}

		// Unify links
		links = win.getElementsByTagName("a");
		for (i = 0; i < links.length; i++) {
			links[i].style.color="white";
			links[i].style.fontWeight="normal";
			links[i].removeAttribute("href");
			links[i].removeAttribute("data-hovercard");
		}

		// Unify timestamps
		timestamps = win.getElementsByTagName("abbr");
		for (i = 0; i < timestamps.length; i++) {
			timestamps[i].style.color="white";
			timestamps[i].style.fontFamily="Courier";
		}

		// Hide side panel, may change this functionality
		win.getElementsByClassName("wmMasterView")[0].style.visibility="hidden";

		// Append window to the body
		document.body.appendChild(win);

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				console.log(mutation);
			});
		});

		var config = {attributes: true, childList: true, characterData: true};

		observer.observe(win, config);

	}
};

// Wait for document to load
window.onload = run;

// Sometimes document load doesn't work, so this is to ensure the page
// still performs the action it's supposed to
setInterval(function () {
	if (changed === false)
		run();
}, 3000);