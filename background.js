chrome.runtime.onMessage.addListener(({ url }, sender, sendResponse) => {
    //do look up in database with message.url
    var isBad;
    console.log(url)
    if (clickbaitMap[url]) {
        isBad = true;
    } else {
        console.log('isBadFalse')
        isBad = false;
    }

    sendResponse({isBad})
})

var clickbaitMap = {};

function markPageAsClickbait() {
    chrome.tabs.getSelected(null, function(tab) {
        clickbaitMap[tab.url] = (clickbaitMap[tab.url] || 0) + 1;
    })
}
