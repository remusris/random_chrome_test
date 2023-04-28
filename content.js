document.addEventListener("click", (event) => {
	chrome.runtime.sendMessage({userInput: "click"})
    chrome.runtime.sendMessage("clickers")
})

document.addEventListener("keydown", (event) => {
	chrome.runtime.sendMessage({userInput: "keydown"})
})

document.addEventListener("scroll", (event) => {
	chrome.runtime.sendMessage({userInput: "scroll"})
})

document.addEventListener("mousemove", (event) => {
	chrome.runtime.sendMessage({userInput: "movemove"})
})