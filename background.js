// This function will be executed when the user clicks the extension's icon.
function makePageEditable(tab) {
  // Execute a script on the current tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // The actual code to be run on the page
      document.designMode = "on";
    }
  });
}

// Add a listener for when the extension's action icon is clicked.
chrome.action.onClicked.addListener((tab) => {
  makePageEditable(tab);
});
