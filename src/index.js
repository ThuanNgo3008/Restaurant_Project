// HEADER
// khi ta nhấn vào nút menu thì chiều cao header kéo dài ra
let headerMobile = document.querySelector('header'); // thẻ header
let menuMobile = document.getElementById('mobile-menu'); // nút button nên đặt theo id
let headerHeight = headerMobile.clientHeight;
// sự kiện khi ta nhấn vào nút button
menuMobile.onclick = function() {
    // headerMobile.clientHeight để biết chiều cao hiện tại
    let isClosed = headerMobile.clientHeight === headerHeight;
    // nếu hiện tại đang đóng thì chiều cao header kéo dài ra
    if (isClosed) {
        headerMobile.style.height = 'auto';
    // nếu đang mở thì chiều cao đóng lại
    } else {
        headerMobile.style.height = '';
    }
}

// ta chọn tất cả thẻ a làm một mảng array
let menuItems = document.querySelectorAll('.header-nav_item');
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];

    menuItem.onclick = function() {
        headerMobile.style.height = '';
    }
}









// SLIDER
let imgs = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg'];

setInterval(slider,3000);

function slider() {
    let i = document.querySelector('.slider-img').alt; 

    i++;

    if (i == imgs.length) i = 0;

    document.querySelector('.slider-img').src = "./assets/img/" + imgs[i];
    document.querySelector('.slider-img').alt = i;
}




// MENU
let seaButton = document.querySelector('.content-4-seafood');
let hotButton = document.querySelector('.content-4-hotpot');
let drinkButton = document.querySelector('.content-4-drink');

let seaMenu = document.querySelector('.seafood-menu');
let hotMenu = document.querySelector('.hotpot-menu');
let drinkMenu = document.querySelector('.drink-menu');

let hsmn = document.querySelector('.hsmn');
let lmn = document.querySelector('.lmn');
let tumn = document.querySelector('.tumn');

seaButton.onclick = function() {
        seaButton.setAttribute('style','background-color: var(--green-color);');
        seaMenu.setAttribute('style','display: block');
        hsmn.setAttribute('style','display: block');
        
        hotButton.setAttribute('style','background-color: var(--signature-color);');
        hotMenu.setAttribute('style','display: none');
        lmn.setAttribute('style','display: none');
        
        drinkButton.setAttribute('style','background-color: var(--signature-color);');
        drinkMenu.setAttribute('style','display: none');
        tumn.setAttribute('style','display: none');
    }
hotButton.onclick = function() {
        hotButton.setAttribute('style','background-color: var(--green-color);');
        hotMenu.setAttribute('style','display: block');
        lmn.setAttribute('style','display: block');
        
        seaButton.setAttribute('style','background-color: var(--signature-color);');
        seaMenu.setAttribute('style','display: none');
        hsmn.setAttribute('style','display: none');

        drinkButton.setAttribute('style','background-color: var(--signature-color);');
        drinkMenu.setAttribute('style','display: none');
        tumn.setAttribute('style','display: none');
    }

drinkButton.onclick = function() {
        drinkButton.setAttribute('style','background-color: var(--green-color);');
        drinkMenu.setAttribute('style','display: block');
        tumn.setAttribute('style','display: block');
        
        seaButton.setAttribute('style','background-color: var(--signature-color);');
        seaMenu.setAttribute('style','display: none');
        hsmn.setAttribute('style','display: none');
        
        hotButton.setAttribute('style','background-color: var(--signature-color);');
        hotMenu.setAttribute('style','display: none');
        lmn.setAttribute('style','display: none');
    }
