/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();
  //link: /api/convert?input=1gal
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      if(input === ""){
         input = "1gal";
      }
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
    if((initNum === undefined && returnUnit === "Invalid Unit") || (initNum === "Invalid Number" && returnUnit === "Invalid Unit"))
      {
        res.send("Invalid Number and Unit");  
      }      
      else if(initNum === undefined || initNum == "Invalid Number")
      {
         res.send("Invalid Number");          
      }
      else if(returnUnit === "Invalid Unit")
      {
        res.send("Invalid Unit");  
      }
      else 
      {
        //object
        let compiledObj = {
          input : input,
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: toString
        };

        //res.json
        res.json(compiledObj);      
      }

    });
    
    app.
      post("/api/convert", function (req, res){
        //get select string
        var selectUnits = req.body.selectUnits;
        //split by space
        selectUnits = selectUnits.split(" ");
      
        //get first value in split array
        selectUnits = selectUnits[0];
      
        var unitValue = req.body.unitValue;
      
        if(unitValue === ""){
           unitValue = "1";
        }
      
        console.log(unitValue);
        console.log(selectUnits);
        
        var input = unitValue + selectUnits;     
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        if(initNum === undefined && returnUnit === "error")
        {
          res.send("invalid number and unit");  
        }      
        else if(initNum === undefined)
        {
           res.send("Invalid Number");          
        }
        else if(returnUnit === "error")
        {
          res.send("Invalid Unit");  
        }
        else if(initNum === undefined && returnUnit === "error")
        {
          res.send("invalid number and unit");  
        }
        else 
        {
          //object
          let compiledObj = {
            input : input,
            initNum: initNum,
            initUnit: initUnit,
            returnNum: returnNum,
            returnUnit: returnUnit,
            string: toString
          };

          //res.json
          res.json(compiledObj);      
        }

      });  
  
};
