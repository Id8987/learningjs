var random1 = Math.floor(Math.random()*5)

console.log(random1)
switch (random1) {
    case 0:
        for (let i = 1; i <= 8; i++) {
            document.querySelectorAll('.item .dicenumber1 ')[i].style.zIndex = '-1'
        }
                                            
        break;
    case 1:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber1')[i].style.zIndex = '-1'
        }
        break;
    case 2:
        for (let i = 0; i <= 8; i++) {
            document.querySelectorAll('.item .dicenumber1 ')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.for3')[0].style.zIndex = '1'
        document.querySelectorAll('.for3')[1].style.zIndex = '1'
        document.querySelectorAll('.for3')[2].style.zIndex = '1'
        break;
    case 3:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber1')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.item .dicenumber1')[2].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber1')[6].style.zIndex = '1'
        break;
    case 4:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber1')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.item .dicenumber1')[2].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber1')[6].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber1')[4].style.zIndex = '1'
        break;
    case 5:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber1')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.item .dicenumber1')[2].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber1')[6].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber1')[1].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber1')[7].style.zIndex = '1'
        break;



}


