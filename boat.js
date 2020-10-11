function toggle_it(itemID){ 
    // Toggle visibility between none and '' 
    if ((document.getElementById(itemID).style.display == 'none')) { 
          document.getElementById(itemID).style.display = '' 
          event.preventDefault()
    } else { 
          document.getElementById(itemID).style.display = 'none'; 
          event.preventDefault()
    }    
}