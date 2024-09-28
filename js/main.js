let menuHeader = document.querySelector('header');
let headerNavigation = document.querySelector('.navigation');
window.addEventListener("scroll", () => {
    menuHeader.classList.toggle('sticky', scrollY > 0);   
});

// icon bars to toggle iconbar
const iconBar = document.querySelector('#iconBar');
iconBar.onclick  = () =>{
    iconBar.classList.toggle('fa-times');
    headerNavigation.classList.toggle('active');
    // alert('iconBar clicked');
}
