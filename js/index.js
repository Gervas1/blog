// 下拉菜单悬停效果
const user = document.querySelector('.user img')
const ul = document.querySelector('.result-list')
user.addEventListener('mouseenter', function () {
    ul.style.display = 'block'
})
user.addEventListener('mouseleave', function () {
    ul.style.display = 'none'
})
ul.addEventListener('mouseenter', function () {
    ul.style.display = 'block'
})
ul.addEventListener('mouseleave', function () {
    ul.style.display = 'none'
})
//侧边栏
const one = document.querySelector('.one')
const a = document.querySelector('.left a:nth-child(1)')
a.addEventListener('mouseenter', function () {
    one.style.display = 'block'
})
a.addEventListener('mouseleave', function () {
    one.style.display = 'none'
})
const two = document.querySelector('.two')
const b = document.querySelector('.left a:nth-child(2)')
b.addEventListener('mouseenter', function () {
    two.style.display = 'block'
})
b.addEventListener('mouseleave', function () {
    two.style.display = 'none'
})
const three = document.querySelector('.three')
const c = document.querySelector('.left a:nth-child(3)')
c.addEventListener('mouseenter', function () {
    three.style.display = 'block'
})
c.addEventListener('mouseleave', function () {
    three.style.display = 'none'
})
const four = document.querySelector('.four')
const d = document.querySelector('.left a:nth-child(4)')
d.addEventListener('mouseenter', function () {
    four.style.display = 'block'
})
d.addEventListener('mouseleave', function () {
    four.style.display = 'none'
})
const five = document.querySelector('.five')
const e = document.querySelector('.left a:nth-child(5)')
e.addEventListener('mouseenter', function () {
    five.style.display = 'block'
})
e.addEventListener('mouseleave', function () {
    five.style.display = 'none'
})
const six = document.querySelector('.six')
const f = document.querySelector('.left a:nth-child(6)')
f.addEventListener('mouseenter', function () {
    six.style.display = 'block'
})
f.addEventListener('mouseleave', function () {
    six.style.display = 'none'
})
const seven = document.querySelector('.seven')
const h = document.querySelector('.left a:nth-child(7)')
h.addEventListener('mouseenter', function () {
    seven.style.display = 'block'
})
h.addEventListener('mouseleave', function () {
    seven.style.display = 'none'
})
//轮播图
const sliderData = [
    { url: './images/科大晚霞.jpg', title: '科大的晚霞！', color: 'rgb(100, 67, 68)' },
    { url: './images/最喜欢的画.jpg', title: '喜欢的一幅画', color: 'rgb(43, 35, 26)' },
    { url: './images/晴天.jpg', title: '最近拍的蓝天白云', color: 'rgb(191, 184, 194)' },
    { url: './images/长江大桥的晚霞.jpg', title: '长江大桥的晚霞', color: 'rgb(90, 105, 108)' },
    { url: './images/最喜欢的电视剧.jpg', title: '最喜欢的电视剧---《鬼怪》', color: 'rgb(245, 183, 113)' },
    { url: './images/海贼王.jpg', title: '最爱当然还是one piece！', color: 'rgb(213, 208, 213)' },
    { url: './images/考试现状.jpg', title: '刚刚结束的期末考试现状', color: 'rgb(53, 29, 25)' },
    { url: './images/洞庭湖.jpg', title: '我的得意之作---洞庭湖的落日！', color: 'rgb(99, 72, 114)' },
]
//右边按钮
const img = document.querySelector('.slider-wrapper img')
const p = document.querySelector('.slider-footer p')
const footer = document.querySelector('.slider-footer')
let i = 0
const next = document.querySelector('.next')
next.addEventListener('click', function () {
    i++
    if (i >= sliderData.length) {
        i = 0
    }
    toggle()
})
//左边按钮
const prev = document.querySelector('.prev')
prev.addEventListener('click', function () {
    if (i === 0) {
        i = sliderData.length
    }
    i--
    toggle()
})
//渲染函数
function toggle() {
    img.src = sliderData[i].url
    p.innerHTML = sliderData[i].title
    footer.style.backgroundColor = sliderData[i].color
    document.querySelector(`.slider-indicator .active`).classList.remove('active')
    document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
}
//自动播放模块
let n = setInterval(function () {
    //利用js自动调用点击事件
    next.click()
}, 2000)
//鼠标经过，停止计时器
const right = document.querySelector('.right')
right.addEventListener('mouseenter', function () {
    clearInterval(n)
})
right.addEventListener('mouseleave', function () {
    n = setInterval(function () {
        next.click()
    }, 2000)
})
//两面反转图
const box1 = document.querySelectorAll('.box1')
box1.forEach(box => {
    box.addEventListener('mouseleave', debounce(mouseLeave, 200, box))
    box.addEventListener('mouseenter', debounce(mouseEnter, 200, box))
})
function mouseEnter(box) {
    box.style.transform = 'rotateY(180deg)'
}
function mouseLeave(box) {
    box.style.transform = null
}
// 防抖函数
function debounce(fn, t, box) {
    console.log(1);
    let timeId
    return function () {
        // 如果有定时器就清除
        if (timeId) clearTimeout(timeId)
        // 开启定时器 200
        timeId = setTimeout(function () {
            fn(box)
        }, t)
    }
}
//日志
$(function () {
    //点击那个图片，那个图片的宽度设置为750 其余的兄弟元素都设置为50
    $('#app>div').click(function () {
        $(this).width(750)
        $(this).siblings().width(50)
    })
})
//页面滑动可以显示和隐藏
// 
//     // 点击返回页面顶部
const elevator = document.querySelectclass('.elevator')
window.addEventListener('scroll', function () {
    const n = document.documentElement.scrollTop
    if (n >= 300) {
        elevator.style.opacity = 1
    } else {
        elevator.style.opacity = 0
    }
})
