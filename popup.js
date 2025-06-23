document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('downloadChapter').addEventListener('click', downloadCurrentChapter);
  document.getElementById('downloadSeries').addEventListener('click', downloadSeries);
});

function downloadCurrentChapter() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "downloadChapter"});
  });
}

function downloadSeries() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "downloadSeries"});
  });
}