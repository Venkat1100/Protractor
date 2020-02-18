describe('Actions Demo',function(){
    it('Actions Demo',function(){
        browser.get('http://posse.com');
        var firstTile = browser.getTitle();
        element(by.model("userInputQuery")).sendKeys("Coffee");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();        
    })
})