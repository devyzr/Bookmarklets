javascript:(
    function(){
        header_selectors = "div > div.metabar.u-clearfix.js-metabar.u-fixed.u-backgroundTransparentWhiteDarkest.u-xs-sizeFullViewportWidth";
        footer_selectors = "div > div.u-fixed.u-bottom0.u-sizeFullWidth.u-backgroundWhite.u-boxShadowTop.u-borderBox.u-paddingTop10.u-paddingBottom10.u-zIndexMetabar.u-xs-paddingLeft10.u-xs-paddingRight10.js-stickyFooter";
        clapper_thing = "div > aside > div > ul";

        header_elemnt = document.querySelector(header_selectors);
        footer_element = document.querySelector(footer_selectors);
        clapper_element = document.querySelector(clapper_thing);

        header_elemnt.style.display = "none";
        footer_element.style.display = "none";
        clapper_element.style.display = "none";
    }()
);