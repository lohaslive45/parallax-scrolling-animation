//=====MENU菜單  手機版 彈出完整菜單
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')        
        })
    }
}
showMenu('nav-toggle','nav-menu') 

//======rellax滾動交錯特效-js插件==============
var rellax = new Rellax('.parallax')

//======animate gsap開啟時 向上浮出 特效-js插件==========
//===navbar導行列
gsap.from('.nav_logo',{opacity:0, duration: 3, delay: 0.5, y:30, ease: 'expo.out'})
gsap.from('.nav_toggle',{opacity:0, duration: 3, delay: 0.7, y:30, ease: 'expo.out'})
gsap.from('.nav_item',{opacity:0, duration: 3, delay: 0.7, y:35, ease: 'expo.out', stagger: 0.2}) //===stagger依序向上浮出
//===text主頁字
gsap.from('.home_title',{opacity:0, duration: 3, delay: 1.3, y:35, ease: 'expo.out'})
gsap.from('.home_subtitle',{opacity:0, duration: 3, delay: 1.1, y:35, ease: 'expo.out'})
//===scroll向下 鼠標
gsap.from('.home_scroll',{opacity:0, duration: 3, delay: 1.5, y:35, ease: 'expo.out'})

//=====scroll reveal section隨畫面位置 浮出內容
const sr = ScrollReveal({
    duration:2500,
    reset: true
})
//===data資料
sr.reveal('.section_data',{origin:'left',distance:'70px'})
//===img圖片
sr.reveal('.section_img',{origin:'left',distance:'90px'})