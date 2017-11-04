//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// DATA CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var dataController = (function(){
    
    //// VARIABLES ////
    var restaurants={
        chipotle:{
            rawString: 'Soft Flour Tortilla (Burrito & Taco)__wheat__sulphites\nCrispy Corn Tortilla (Taco)__none\nCilantro-Lime Rice (White)__none\nCilantro-Lime Rice (Brown)__none\nBeans (Black)__none\nBeans (Pinto)__none\nFajita Vegetables__none\nMeats(All)__none\nSofritas__soy__sulphites\nSalsas (All)__none\nQueso__dairy__sulphites\nCheese__dairy\nSour Cream__dairy\nGuacamole__none\nRomaine Lettuce__none\nChips__none\nVinaigrette__sulphites\n',
            noAllergens: [],
                noDairy: [],
                noSoy: [],
                noWheat: [],
                noSulphites: [],
                noEggs: [],
                noFish: [],
                noPeanuts: [],
                noSesame: [],
                noShellfish: [],
                noTreeNuts: [],
                noNitratesNitrites: []
        }
    };
    
    function updateNoAllergen(whichRestaurant, whichAllergy, newValue){
        restaurants[whichRestaurant].noAllergens[whichAllergy].push(newValue);
    };

    function whichNoAllergens(allergyArray){
        console.log('restarting allergy');
        
        var matchArray = ['dairy', 'soy', 'wheat', 'sulphites', 'eggs', 'fish', 'peanuts', 'sesame', 'shellfish', 'treeNuts', 'nitratesNitrites'];
        
        var returnArray = ['noDairy', 'noSoy', 'noWheat', 'noSulphites', 'noEggs', 'noFish', 'noPeanuts', 'noSesame', 'noShellfish', 'noTreeNuts', 'noNitratesNitrites'];
        
        allergyArray.forEach(function(cur){
            
            var deleteIndex = matchArray.indexOf(cur);
            matchArray.splice(deleteIndex, 1);
            returnArray.splice(deleteIndex, 1);
            });
        return returnArray;
       
    };
    
    function addNewItem(whichRestaurant, someItem, someArray){
        someArray.forEach(function(cur){
            console.log(someItem);
            restaurants[whichRestaurant][cur].push(someItem);
            console.log(restaurants[whichRestaurant][cur]);
        });
    };
    
    function loadMenuArrays(whichRestaurant, someString){
        var itemArray = someString.split('\n');
        console.log(itemArray);
        
        itemArray.forEach(function(cur){
            var allergenArray = cur.split('__');
            console.log(allergenArray);
            var whichItem = allergenArray[0];
            console.log(whichItem);
            var splicedArray = allergenArray.splice(1, allergenArray.length);
            
            console.log(splicedArray);

                var whichNoAllergies = whichNoAllergens(splicedArray);
                
                addNewItem(whichRestaurant, whichItem, whichNoAllergies);
            console.log(restaurants.chipotle);
        
        });
        };

                          
                          loadMenuArrays('chipotle', restaurants.chipotle.rawString);
    //// FUNCTIONS ////
    
    
    return {
       
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// UI CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var UIController = (function(){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    function listToArray(nodeList){
        var tempList, newArray;
        tempList = nodeList;
        newArray = [];
        console.log(newArray);
        
        for (i = 0; i < nodeList.length; i++){
            newArray[i] = nodeList[i];
        };
        return newArray;
    };
    
    return {
       
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// APP CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var appController = (function(dataCtrl, UICtrl){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    function innit(){
        
    }
    
    return {
       innit: innit
    }
})(dataController, UIController);

appController.innit();
/*
////// Save File //////
var testString = "hello world!";

uriContent = "data:application/octet-stream," + encodeURIComponent(testString);

// newWindow = window.open(uriContent, 'neuesDokument');

////// Load and read FILE //////
if (window.File && window.FileReader && window.FileList && window.Blob) {
    
  function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 
      
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
        alert( "Got the file.\n" 
              +"name: " + f.name + "\n"
              +"type: " + f.type + "\n"
              +"size: " + f.size + " bytes\n"
              + "starts with: " + contents.substr(0, contents.indexOf("\n"))
        );  
      }
      console.log(r.readAsText(f));
        
    } else { 
      alert("Failed to load file");
    }
  }

  document.getElementById('testFile').addEventListener('change', readSingleFile, false);

} else {
  alert('The File APIs are not fully supported by your browser.');
}

*/

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// CODE Tools >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//// XXXXXXXXXXX ////


// START... //// xxTITLExx xxDescriptionxx //////////////// M.M.

// ...END //// xxTITLExx xxDescriptionxx //////////////// M.M.

