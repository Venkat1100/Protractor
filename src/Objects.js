function objects(){

    this.url = "https://qaclickacademy.github.io/protocommerce";
    this.by_app_card = by.tagName("app-card");
    this.by_title_of_product = by.css("h4 a");
    this.by_add_to_cart_btn = by.css("button[class*='btn-info']");
    this.elem_name = element(by.name("name"));
    this.elem_email = element(by.css("input[name='email']"));
    this.elem_password = element(by.id("exampleInputPassword1"));
    this.elem_checkbox = element(by.css("input[id='exampleCheck1']"));
    this.elem_gender = element(by.cssContainingText("[id=exampleFormControlSelect1] Option","Female"));
    this.elem_emp_state = element.all(by.name("inlineRadioOptions"));
    this.elem_submit_form = element(by.buttonText("Submit"));
    this.elem_status = element(by.css("div[class*='success']"));
    this.elem_shop_btn = element(by.linkText("Shop"));
    this.elem_checkout_btn = element(by.partialLinkText("Checkout"));
    this.elem_cart_table = element(by.xpath("//table[@class='table table-hover']/tbody"));
    this.elem_cart_total = element(by.xpath("//h3/strong"));

    this.getUrl = function(){
        browser.get(this.url);
    };
}

module.exports = new objects();