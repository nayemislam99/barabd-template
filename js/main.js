let header = document.querySelector('header');
let headerNavigation = document.querySelector('.navigation');
window.addEventListener("scroll", () => {
    header.classList.toggle('sticky', scrollY > 0);   
});

// icon bars
const iconBar = document.querySelector('#iconBar');
iconBar.onclick  = () =>{
    iconBar.classList.toggle('fa-times');
    headerNavigation.classList.toggle('active');
    // alert('iconBar clicked');
}
