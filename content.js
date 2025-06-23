chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "downloadChapter") {
    downloadCurrentChapter();
  } else if (request.action === "downloadSeries") {
    downloadSeries();
  }
});

/**
 * Fetch and parse the current chapter page to get image URLs,
 * then send download requests to background script.
 */
async function downloadCurrentChapter() {
  try {
    const imageUrls = await getChapterImageUrls(window.location.href);
    const mangaTitle = document.querySelector('h3.item-title')?.textContent.trim() || 'manga';
    const chapterTitle = document.querySelector('h4.chap-title')?.textContent.trim() || 'chapter';

    for (let i = 0; i < imageUrls.length; i++) {
      const imgUrl = imageUrls[i];
      const ext = imgUrl.split('.').pop().split('?')[0];
      const filename = `${mangaTitle}/${chapterTitle}/page_${i + 1}.${ext}`;

      chrome.runtime.sendMessage({
        action: "download",
        url: imgUrl,
        filename: filename
      });
    }
  } catch (error) {
    console.error('Error downloading chapter:', error);
  }
}

/**
 * Fetch and parse the series page to get all chapters,
 * then trigger download for each chapter sequentially.
 */
async function downloadSeries() {
  try {
    const mangaTitle = document.querySelector('h3.item-title')?.textContent.trim() || 'manga';
    const chapters = [];

    document.querySelectorAll('a.chapt').forEach(chapterElement => {
      const chapterTitle = chapterElement.textContent.trim();
      const chapterUrl = chapterElement.href;
      chapters.push({ title: chapterTitle, url: chapterUrl });
    });

    // Download chapters sequentially to avoid overload
    for (const chapter of chapters) {
      const imageUrls = await getChapterImageUrls(chapter.url);
      for (let i = 0; i < imageUrls.length; i++) {
        const imgUrl = imageUrls[i];
        const ext = imgUrl.split('.').pop().split('?')[0];
        const filename = `${mangaTitle}/${chapter.title}/page_${i + 1}.${ext}`;

        chrome.runtime.sendMessage({
          action: "download",
          url: imgUrl,
          filename: filename
        });
      }
      // Optional delay between chapters
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  } catch (error) {
    console.error('Error downloading series:', error);
  }
}

/**
 * Fetch the chapter page and extract image URLs from the embedded script.
 * @param {string} chapterUrl - URL of the chapter page
 * @returns {Promise<string[]>} - Array of image URLs
 */
async function getChapterImageUrls(chapterUrl) {
  const response = await fetch(chapterUrl);
  if (!response.ok) throw new Error('Network response was not ok');
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  let imageUrls = [];
  doc.querySelectorAll('script').forEach(script => {
    if (script.textContent.includes('imgHttps')) {
      const match = script.textContent.match(/imgHttps\s*=\s*(\[.*?\]);/);
      if (match) {
        try {
          imageUrls = JSON.parse(match[1]);
        } catch (e) {
          console.error('Error parsing image URLs JSON:', e);
        }
      }
    }
  });

  return imageUrls;
}