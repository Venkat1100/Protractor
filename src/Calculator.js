describe('Calculator Demo',function(){

    console.log("The is the first git test");
    var d = require("./Objects2.js");
    var using = require("jasmine-data-provider");
    function calc(number1, number2, arithmaticOp){
        element(by.model("first")).sendKeys(number1);
        element.all(by.model("operator")).each(function(oper){
            switch(arithmaticOp){
                case "Add":
                    oper.element(by.css("option[value='ADDITION']")).click();
                    break;
                case "Devide":
                    oper.element(by.css("option[value='DIVISION']")).click();
                    break;
                case "Multiply":
                    oper.element(by.css("option[value='MULTIPLICATION']")).click();
                    break;
                case "Modulo":
                    oper.element(by.css("option[value='MODULO']")).click();
                    break;
                case "Subtract":
                    oper.element(by.css("option[value='SUBTRACTION']")).click();
                    break;
            }
        })
        element(by.model("second")).sendKeys(number2);
        element(by.id("gobutton")).click();
    }

    it('setUp',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    })

    using(d.DataDrive, function(data, description){
        it('Calculator Add Demo'+description,function(){
            
            calc(data.firstinput,data.secondinput,"Add");
        })
    });    

    it('Calculator Subtract Demo',function(){
        calc(7,4,"Subtract");
    })


    it('Calculator Multiply Demo',function(){
        calc(3,4,"Multiply");
    })


    it('Calculator Devide Demo',function(){
        calc(20,4,"Devide");
    })

    it('verification',function(){
        element.all(by.repeater("result in memory")).each(function(elem){
            elem.element(by.css("td:nth-child(2)")).getText().then(function(text1){
                elem.element(by.css("td:nth-child(3)")).getText().then(function(text2){
                    console.log(text1+" = "+text2);
                    expect("true","true");
                })
            })    
        })
    })
})