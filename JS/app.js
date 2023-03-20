/* Menu lateral*/
 var menu_visible = false;
 let menu = document.getElementById("nav");
 function mostrarOcultarMenu(){
    if (menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu.visible = true;
  
    }

    else{
        menu.style.display = "none";
        menu_visible = false
    }
    
 }

 //ocultar el menu cuando se selecciona una opcion

 let links = document.querySelectorAll("nav a");
 for(var x = 0; x <links.length;x++){
    
 };