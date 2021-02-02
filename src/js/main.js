(function () {
    // while (1) {
    //     
    // }   
    setTimeout(heightAdjustment, 1000); 
}())

function heightAdjustment() {
    let elem = document.querySelector('.nav-main');
    let activeSize = (document.documentElement.clientHeight - document.querySelector('.nav-main').clientHeight)  ;
    // elem.style.height = 
    console.log(activeSize)
}