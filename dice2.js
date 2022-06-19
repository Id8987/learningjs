var random2 = Math.floor(Math.random()*5)
console.log(random2)
switch (random2) {
    case 0:
        for (let i = 1; i <= 8; i++) {
            document.querySelectorAll('.item .dicenumber2 ')[i].style.zIndex = '-1'
        }
                                            
        break;
    case 1:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber2')[i].style.zIndex = '-1'
        }
        break;
    case 2:
        for (let i = 0; i <= 8; i++) {
            document.querySelectorAll('.item .dicenumber2')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.sfor3')[0].style.zIndex = '1'
        document.querySelectorAll('.sfor3')[1].style.zIndex = '1'
        document.querySelectorAll('.sfor3')[2].style.zIndex = '1'
        break;
    case 3:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber2')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.item .dicenumber2')[2].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber2')[6].style.zIndex = '1'
        break;
    case 4:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber2')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.item .dicenumber2')[2].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber2')[6].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber2')[4].style.zIndex = '1'
        break;
    case 5:
        for (let i = 1; i < 8; i++) {
            document.querySelectorAll('.item .dicenumber2')[i].style.zIndex = '-1'
        }
        document.querySelectorAll('.item .dicenumber2')[2].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber2')[6].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber2')[1].style.zIndex = '1'
        document.querySelectorAll('.item .dicenumber2')[7].style.zIndex = '1'
        break;



}