/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    //1
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    //2
    test('Decimal Input', function(done) {
      var input = '3.333L';
      assert.equal(convertHandler.getNum(input),3.333);
      done();
    });
    
    //3
    test('Fractional Input', function(done) {
      var input = '1/2L';
      assert.equal(convertHandler.getNum(input),0.5);
      done();
    });
    
    //4
    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.5/4L';
      assert.equal(convertHandler.getNum(input),1.375);
      done();
    });
    
    //5
    test('Invalid Input (double fraction)', function(done) {
      var input = '5/5/5L';
      assert.equal(convertHandler.getNum(input),'Invalid Number');
      done();
    });
    
    //6
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    //7
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.include(input, convertHandler.getUnit(ele), ele);
      });
      done();
    });
    
    //8
    test('Unknown Unit Input', function(done) {
      var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      var userInput = "ml";
      
      assert.notInclude(units,  convertHandler.getUnit(userInput), "Invalid Unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    //9
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    //10
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(2, ele), expect[i]);
      });      
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    //11
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    //12
    test('L to Gal', function(done) {
      var input = [18.9271, 'l'];
      var expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    //13
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    //14
    test('Km to Mi', function(done) {
      var input = [8.0467, 'km'];
      var expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    //15
    test('Lbs to Kg', function(done) {
      var input = [5, 'lbs'];
      var expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    //16
    test('Kg to Lbs', function(done) {
      var input = [2.26796, 'kg'];
      var expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});