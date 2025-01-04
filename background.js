// Create a context menu item
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "searchYouTube",
      title: 'Search YouTube for "%s" ',
      contexts: ["selection"] // Show only when text is selected
    });
  });
  
  // Add functionality when the context menu item is clicked
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchYouTube") {
      const selectedText = info.selectionText;
      const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(selectedText)}`;
      chrome.tabs.create({ url: youtubeSearchURL }); // Open a new tab with the YouTube search
    }
  });
  
