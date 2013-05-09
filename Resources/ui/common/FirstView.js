/**
 *
 */
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	var webview = Titanium.UI.createWebView();
	webview.url = "/etc/decarta/index.html";

	webview.addEventListener('load', function(e) {
		var cookies = webview.evalJS("document.cookie").split(";");
		Ti.API.info("# of cookies -> " + cookies.length);
		for ( i = 0; i <= cookies.length - 1; i++) {
			Ti.API.info("cookie -> " + cookies[i]);
		}
	});

	self.add(webview);
	return self;
}

module.exports = FirstView;
