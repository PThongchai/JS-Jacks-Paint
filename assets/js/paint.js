function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity)  
        document.getElementById(images[i].id).addEventListener('mouseleave',removeOpacity) 
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    document.getElementById(event.target.id).setAttribute("class","dim")
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     document.getElementById(event.target.id).removeAttribute("class","dim")
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':   
                updatePrice('Lime Green','$14.99')        
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            
            updatePrice('Medium Brown','$11.14')
            
            
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            updatePrice('Royal Blue','$22.99')
         
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            updatePrice('Solid Red','$13.42')
           // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
 
            updatePrice('Solid White','$21.98')
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
 
            updatePrice('Solid Black','$4.99')
            
 
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
           
            updatePrice('Solid Cyan','$8.22')
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':

            updatePrice('Solid Purple','$11.99')
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            updatePrice('Solid Yellow','$14.99')
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
    let color = document.getElementById('color-name');
    color.textContent = colorName; 
    }
    
}
