chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)
    //do look up in database with message.url
    var isBad = true
    sendResponse({isBad})
})

var clickbaitMap = {};

function markPageAsClickbait() {
    chrome.tabs.getSelected(null, function(tab) {
        clickbaitMap[tab.url] = (clickbaitMap[tab.url] || 0) + 1;
    })
}
