// 签到
function signin() {
  const sframe = document.createElement('iframe')
  sframe.src = 'https://juejin.cn/user/center/signin'
  sframe.style.position = 'fixed'
  sframe.style.left = '-1000px'
  sframe.style.top = '-500px'
  document.body.appendChild(sframe)
  sframe.onload = () => {
    const signin = sframe.contentDocument.querySelector('.signin.btn')
    if (signin) signin.click()
    setTimeout(() => {
      document.body.removeChild(sframe)
      lottery()
    }, 1000)
  }
}

// 免费抽奖1次
function lottery() {
  const lframe = document.createElement('iframe')
  lframe.src = 'https://juejin.cn/user/center/lottery'
  lframe.style.position = 'fixed'
  lframe.style.left = '-1000px'
  lframe.style.top = '-1000px'
  document.body.appendChild(lframe)
  lframe.onload = () => {
    const lottery = lframe.contentDocument.querySelector('.text-free')
    if (lottery) lottery.click()
    setTimeout(() => {
      document.body.removeChild(lframe)
    }, 1000)
  }
}

signin()
