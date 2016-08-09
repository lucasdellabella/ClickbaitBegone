var backgroundPage = chrome.extension.getBackgroundPage();

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded')
    document.getElementById('markTrash').addEventListener('click', backgroundPage.markPageAsClickbait)
})
