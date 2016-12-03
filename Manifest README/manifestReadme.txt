/* 
This will contain metadata
Will contain the name of the extension, description, version number
Declare to Chrome what the extension will do, and the permissions it needs

https://developer.chrome.com/extensions/getstarted
*/

{
	// This is required
	// Manifest version should be 2  (for devs) as of Chrome 18
	"manifest_version": 2,
	"name": "Re-Focus",
	"version": "Version: 0.42",
	
	/* Broa,
	https://developer.chrome.com/extensions/browserAction
	*/
	"browser_action":{
	"default_icon":{
		"16":"images/icon16.png",
		"24":"images/icon24.png",
		"32":"images/icon32.png",
	}, // End icons
	"default_title": "Re-Focus",
	"default_popup": "popup.html"
	}, // end Browser action 

	/*
	Permissions
		https://developer.chrome.com/apps/permission_warnings
		-tabs- permission allows access to url, title, etc
		https://developer.chrome.com/extensions/windows
		ActiveTab
		https://developer.chrome.com/extensions/activeTab
	*/
	"permissions":["activeTab", "tabs"],

} // End manifest.json