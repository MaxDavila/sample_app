function updatechar() {
    var display = jQuery("#char_count");
    var content = jQuery("#micropost_content");
    var remaining = (140 - content.val().length);
    display.text(remaining + ( remaining == 1 ? " character" : " characters" + " remaining."));
}
                   
jQuery(document).ready(function ($) {
    updatechar();
    jQuery("#micropost_content").keydown(updatechar);
    jQuery("#micropost_content").keyup(updatechar);
    jQuery("#micropost_content").onchange(updatechar);


});