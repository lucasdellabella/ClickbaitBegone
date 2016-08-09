/**
 * collectURLS.js
 * A content script to grab all hrefs (ordered by danger)
 * to be analyzed in trashlinkDB
 */

var aNodeList = document.querySelectorAll('a');
console.log(aNodeList)
var i = 0;
[].forEach.call(aNodeList, function(node, i) {
    chrome.runtime.sendMessage({url: node.href}, function({isBad}) {
        if (isBad) {
            //console.log(node);
            node.href = "#";
        }
    })
})
