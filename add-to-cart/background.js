// this is the background code...

// listen for our browerAction to be clicked
browser.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the "inject.js" file & execute it
  browser.tabs.executeScript(tab.id, {
    file: "inject.js",
  });
});
