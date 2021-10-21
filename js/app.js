/*==================== SHOW MENU ====================*/
/*const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}*/


//showMenu('bx','menu-mobile');




    
    
/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
  const nav = document.querySelector('.bg-header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)
    
    


