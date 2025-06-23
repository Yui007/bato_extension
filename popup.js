document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('downloadChapter').addEventListener('click', downloadCurrentChapter);
  document.getElementById('downloadSeries').addEventListener('click', downloadSeries);
  document.getElementById('downloadRange').addEventListener('click', downloadRange);
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

function downloadRange() {
  const startChapter = document.getElementById('startChapter').value;
  const endChapter = document.getElementById('endChapter').value;

  if (startChapter && endChapter) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "downloadRange", start: startChapter, end: endChapter});
    });
  } else {
    alert("Please enter both start and end chapter numbers.");
  }
}
