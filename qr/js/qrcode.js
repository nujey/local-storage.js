chrome.tabs.getSelected(null, (w) => {
  let qrImg = document.getElementById('qr__img')
  setTimeout(() => {
    new QRCode(qrImg, encodeURI(w.url))
  }, 200)
  document.querySelector('#qr__span').innerHTML = w.url
})