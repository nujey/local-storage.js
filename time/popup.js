const toTwo = function(n) {
  return n >= 0 && n < 10 ? '0' + n : n
}
const getTime = function() {
  // 获取dom对象用来渲染
  let inp = document.querySelector('#date_input')
  let span = document.querySelector('#date__txt')
  // 获取现在的时间
  const oldDate = new Date()
  const oldTime = oldDate.getTime()
  // 获取期待的时间
  const timeValue =   inp.value || '2017/10/01'
  const newDate = new Date(timeValue)
  const newTime = newDate.getTime()
  // 获取中间的时间差
  const midTime = newTime - oldTime

  // 秒
  let s = Math.floor(midTime / 1000)
  // 天
  const d = Math.floor(s / 86400)
  // 剩下的秒
  s = s % 3600
  const h = Math.floor(s / 3600)
  s = s % 3600
  const m = Math.floor(s / 60)
  s = s % 60
  
  const str = toTwo(d) + '天' + toTwo(h) + '时' + toTwo(m) + '分' + toTwo(s) +'秒'
  console.log(span)
  span.innerHTML = str
}
setInterval(() => {
  getTime()
}, 1000)