// Wait for document to load
document.onreadystatechange = function () {

	if (document.readyState == "complete") {

		// Get body element
		var body = document.getElementsByTagName("body")[0];
		body.style.backgroundColor = "black";

		// Begin hiding things
		document.getElementById("content").style.visibility="hidden";
		document.getElementById("pagelet_bluebar").style.visibility="hidden";
		document.getElementById("pagelet_sidebar").style.visibility="hidden";

		var chats = document.getElementsByClassName("fbNubFlyout fbDockChatTabFlyout uiContextualLayerParent");
		var convos = document.getElementsByClassName("conversation");

		for (var i = 0; i < chats.length; i++) {

			var currChat = chats[i];
			var currConvo = convos[i];

			currChat.getElementsByClassName('titlebarText')[0].style.fontFamily="Courier";

			currChat.getElementsByClassName('conversation')[0].style.fontFamily="Courier";
			currChat.getElementsByClassName('fbNubFlyoutBody scrollable')[0].style.backgroundColor = "black";

			// Hide availability icon
			currChat.getElementsByTagName('img')[0].style.visibility="hidden";

			currChat.getElementsByClassName('mls titlebarButtonWrapper rfloat _ohf')[0].style.visibility="hidden";

			currChat.getElementsByClassName('_552n')[0].style.visibility="hidden";
		}

	}
};