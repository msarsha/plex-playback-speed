const activeRule = {
	conditions: [
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'app.plex.tv', schemes: ['https'] },
			css: ["video[class^='HTMLMedia-mediaElement-']"]
		})
	],
	actions: [new chrome.declarativeContent.ShowPageAction()]
};

chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([activeRule]);
	});
});
