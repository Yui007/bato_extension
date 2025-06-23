chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "download") {
    // Use chrome.downloads API to download files
    chrome.downloads.download({
      url: request.url,
      filename: request.filename
    });
  }
});