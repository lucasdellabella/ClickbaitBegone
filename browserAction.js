chrome.runtime.getBackgroundPage(function(backgroundPage) {
    window.addEventListener('DOMContentLoaded', function() {
        document.getElementById('markTrash').addEventListener('click', backgroundPage.markPageAsClickbait)
    })
});


