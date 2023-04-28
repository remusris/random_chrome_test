var otherBrowsingHistoryList = []

const millisecondsPerWeek = 1000 * 60 * 60 *24 * 7; 
const oneWeekAgo = (new Date).getTime() - millisecondsPerWeek;

chrome.history.onVisited.addListener(
    function (historyItem) {
        console.log(historyItem)
    }
);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message === "clickers") {
        console.log(message)
    }

    if (message.userInput === "mousemove") {
        console.log(message.userInput)
    } 

    if (message.userInput === "click") {
        console.log(message.userInput)

        chrome.history.search({
            text: '',
            startTime: oneWeekAgo,
            maxResults: 30
        }, 
            function(data) {
                data.forEach(function(page) {
                    otherBrowsingHistoryList.push(page.url)
                })
            }
        );

        //this works because it's after the callback
        console.log("inside block - whole list", otherBrowsingHistoryList)
        console.log("inside block - first item",otherBrowsingHistoryList[0])
    }

    if (message.userInput === "scroll") {
        console.log(message.userInput)
    }

    if (message.userInput === "keydown") {
        console.log(message.userInput)
    }
})

//this fails because it's out of scope of the callback
console.log("outside block - whole list", otherBrowsingHistoryList)
console.log("outside block - first item", otherBrowsingHistoryList[0])

//random test
var otherList = [1,2,3,4]
console.log(otherList[0])

chrome.webNavigation.onCommitted.addListener(
    function(objectOnCommited) {
        console.log(objectOnCommited)
        console.log(objectOnCommited.url)
        console.log(objectOnCommited.tabId)
        // continue this pattern with every single filter item
    }
)