const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Handle form
const cover = $('.r-l__cover')
const registerHeader = $('.r-l__header--res')
const loginHeader = $('.r-l__header--login')
const cancelBtn = $('.form-cancel')
const cancel = $('.r-l__modal')
const overlay = $('.r-l__modal--overlay')
const login = $('.Log-in')
const register = $('.regis')
const changeRegister = $('.change-register')
const mobileLogin = $('.mobile-login')                           // Mobile
// open form 
function openFormLogin() {
    cancel.classList.add('modal-none')
    removeRes()
}

function openFormRes() {
    cancel.classList.add('modal-none')
    addRes()
}

login.addEventListener('click', openFormLogin)
register.addEventListener('click', openFormRes)
mobileLogin.addEventListener('click', openFormLogin)
// Cancel
function closeForm() {
    cancel.classList.remove('modal-none')
}

cancelBtn.addEventListener('click', closeForm)
overlay.addEventListener('click', closeForm)

// Change login or res
function addRes() {
    cover.classList.add('r-l--res')
}
function removeRes() {
    cover.classList.remove('r-l--res')
}

registerHeader.addEventListener('click', addRes)
loginHeader.addEventListener('click', removeRes)
changeRegister.addEventListener('click', addRes)


// in-out shop
const inShop = $('.block-select--intoshop')
const outShop = $('.block-select--outshop')
const selectShop = $('.header__select')

function addCheckOutShop() {
    selectShop.classList.add('select--outshop')
}
function removeCheckOutShop() {
    selectShop.classList.remove('select--outshop')
}

outShop.addEventListener('click', addCheckOutShop)
inShop.addEventListener('click', removeCheckOutShop)


// open nav-mobile

const nav = $('.header__control-left-out')
const navInNav = $('.header__control-left-innav')
const overlayNav = $('.header__control-detail')
const fadeIn = $('.control-detail--cover')


function openNavLeft() {
    overlayNav.style.animation = `appear linear 0.4s`;
    fadeIn.style.animation = `fadein ease 0.4s`
    nav.classList.add('open-control-left')
}
function closeNavLeft() {
    fadeIn.style.animation = `fadeout ease 0.4s`
    overlayNav.style.animation = `disappear linear 0.4s`;
    fadeIn.addEventListener('click', function(event) {
        event.stopPropagation();
    })
    setTimeout(function() {
        nav.classList.remove('open-control-left')
    }, 300)
}

nav.addEventListener('click', openNavLeft)
navInNav.addEventListener('click', closeNavLeft)
overlayNav.addEventListener('click', closeNavLeft)

// open and close input mobile
const headMobile = $('.header__main')
const iconSearchMobile = $('.mobile-search')
const cancelInputMobile = $('.cancel-input')

iconSearchMobile.addEventListener('click', function() {
    headMobile.classList.add('change-mobile')
})
cancelInputMobile.addEventListener('click', function() {
    headMobile.classList.remove('change-mobile')
})


