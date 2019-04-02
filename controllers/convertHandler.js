/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var error = "Invalid Unit";
  
  this.getNum = function(input) {
    //split array by no space
    var splitArray = input.split("");
    //create new array
    var newArray = [];
    var numberCount = 0;
    var periodCount = 0;
    var slashCount = 0;
    //loop through array to seperate numbers and special chars
    for(var i = 0; i < splitArray.length; i++){
      //is a number
      if(!isNaN(splitArray[i]))
      {
        newArray.push(splitArray[i]);
        numberCount++;
      }
      //has special characters (.)
      else if(splitArray[i] == "."){
        newArray.push(splitArray[i]);
        periodCount++;
      }//has special characters (/)
      else if(splitArray[i] == "/"){
        newArray.push(splitArray[i]);   
        slashCount++;
      }
    }
    
    //join array to form string with no space
    var stringNumber = newArray.join('');
    //evaluate array to form a number
    var result = eval(stringNumber);
    //console.log(result);
    
    //if periodCount is bigger than 1
    if(periodCount > 1)
    {
      return 'Invalid Number'
    }//if slashCount is bigger than 1
    else if(slashCount > 1)
    {
      return 'Invalid Number'
    }//if there is no number mentioned only unit
    else if(numberCount < 1)
    {
      return 1;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    //split array by no space
    var splitArray = input.split("");
    //create new array
    var newArray = [];
    //loop through array to seperate numbers and special chars
    for(var i = 0; i < splitArray.length; i++){
      //is not a number or has no special characters
      if(isNaN(splitArray[i]) && splitArray[i] != "." && splitArray[i] != "/")
      {
        newArray.push(splitArray[i]);
      }
    }
    //join array to form string with no space
    var result = newArray.join('');
    //change to lowercase
    result = result.toLowerCase();
    
    //console.log(result);
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit){
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = error;
    }
    
    //console.log("result: "+ result);
    
    return result;
  };

  this.spellOutUnit = function(value, unit) {
    var result;
    
   if(value == 1)
   {
     switch(unit){
      case "gal":
        result = "gallon";
        break;
      case "l":
        result = "liter";
        break;
      case "lbs":
        result = "pound";
        break;
      case "kg":
        result = "kilogram";
        break;
      case "mi":
        result = "mile";
        break;
      case "km":
        result = "kilometer";
        break;
      default:
        result = error;
     }        
   }
   else 
   {
     switch(unit){
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = error;
     }    
   }
   
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result;
    
    switch(initUnit){
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = error;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var spellOutInitUnit = this.spellOutUnit(initNum, initUnit);
    var spellOutReturnUnit = this.spellOutUnit(returnNum, returnUnit);
    
    var result = `${initNum} ${spellOutInitUnit} converts to ${returnNum}  ${spellOutReturnUnit} `;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
