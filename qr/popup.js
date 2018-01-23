// console.log(chrome.windows, 'windows')
// console.log(chrome.browsingData, 'browsingData')
// console.log(chrome.browserAction, 'browserAction')
// console.log(chrome.bookmarks, 'bookmarks')
// console.log(chrome.bookmarks, 'bookmarks')
// console.log(chrome.contextMenus, 'contextMenus')
// console.log(chrome.cookies, 'cookies')
// console.log(chrome.desktopCapture, 'desktopCapture')
// console.log(chrome.downloads, 'downloads')
// console.log(chrome.events, 'events')
// console.log(chrome.extension, 'extension')
// console.log(chrome.extensionTypes, 'extensionTypes')
// console.log(chrome.gcm, 'gcm')
// console.log(chrome.history, 'history')
// console.log(chrome.runtime, 'runtime')
// console.log(chrome.permissions, 'permissions')
chrome.tabs.getSelected(null,function(w){
  console.log(w.url)
  // jQuery('#qrDiv').qrcode({
  //     text	: w.url,
  //     width:"180",
  //     height:"180"
  //   });
	// 	jQuery("#qr_webname").val(w.title);
	// 	jQuery("#qr_website").val(w.url);
})

let qrSpan = document.querySelector('#qr__span')

// console.log(qrSpan)
// console.log(chrome)
qrSpan.innerHTML = window.location.href

function serRootFont() {
  const docWidth = document.getBoundingClientRect().width
  const scale = docWidth / 750
  documentHTML.style.fontSize = `${scale * 100}px`
  
}