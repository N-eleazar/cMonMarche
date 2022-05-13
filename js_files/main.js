document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

/* -- MON CODE -- */

jQuery(document).ready(() => {
    if (jQuery){
      console.log("jQuery est chargé.");
      // Mon code
      $("#accueil").click(function() {
        $("h3").text("Accueil");
      })
      $("#marche").click(function() {
        $("h3").text("Marchés");
      })
      $("#brocante").click(function() {
        $("h3").text("Brocantes");
      })
      $("#carte").click(function() {
        $("h3").text("Carte");
      })
      $("#search").click(function() {
        $("h3").text("Recherche");
      })
      $("#login").click(function() {
        $("h3").text("Connexion");
      })
      
    }
    else {
      alert("jQuery ne s'est pas chargé.");
    }
  })
  