describe('PracticeExercise',function(){
    var count = 0;
    var sum = 0;
    var cartTotal = 0;
    var obj = require("./Objects.js");
    function addtoCart(item){
        element.all(obj.by_app_card).each(function(appcard){
            appcard.element(obj.by_title_of_product).getText().then(function(title){
                if(title.toLowerCase()==item){
                    appcard.element(obj.by_add_to_cart_btn).click();
                  //  browser.sleep(10000);
                }
            })
        })
        return true;    
    }

    beforeEach(function(){
        obj.getUrl();
        browser.driver.manage().window().maximize();
    })

    it('PracticeExersice',function(){
        obj.elem_name.sendKeys("Venkat");
        obj.elem_email.sendKeys("sailoveds@gmail.com");
        obj.elem_password.sendKeys("91211baby");
        obj.elem_checkbox.click();
        obj.elem_gender.click();
        obj.elem_emp_state.get(0).click();
        obj.elem_submit_form.click().then(function(){
            obj.elem_status.getText().then(function(text){
                console.log(text);
            })
        })
    })

    it('ShopPractice',function(){
        obj.elem_shop_btn.click();
        addtoCart('iphone x')
        count++;
        addtoCart('samsung note 8')
        count++;
        addtoCart('nokia edge')
        count++;
    })

    it('validateCheckOutButton',function(){
        browser.actions().mouseMove(obj.elem_checkout_btn).perform();
        obj.elem_checkout_btn.getText().then(function(cartCount){
            var totalItemsInCart = Number(cartCount.split("(")[1].trim().charAt(0));
            expect(totalItemsInCart).toBe(count);
            console.log(count);
        })
    })

    it('validateTheTotal',function(){
        var i = count;
        obj.elem_checkout_btn.click().then(function(){
            obj.elem_cart_table.all(by.css("td:nth-child(4) strong")).each(function(itemValue){
                     itemValue.getText().then(function(itemTotal){
                         sum = sum + Number(itemTotal);
                     })
            })
            obj.elem_cart_total.getText().then(function(cart){
                    cartTotal = Number(cart);
            })
            expect(sum).toBe(cartTotal);
        })
    })

})