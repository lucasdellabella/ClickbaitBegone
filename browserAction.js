var backgroundPage = chrome.extension.getBackgroundPage();

window.addEventListener('DOMContentLoaded', function() {
    console.log('domcontld')
    document.getElementById('markTrash').addEventListener('click', backgroundPage.markPageAsClickbait)
})

