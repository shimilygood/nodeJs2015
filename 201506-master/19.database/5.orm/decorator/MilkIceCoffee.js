var MilkCoffee = require('./MilkCoffee');
module.exports = function(){
    this.make = function(){
        new MilkCoffee().make();
        console.log('add ice');
    }
}