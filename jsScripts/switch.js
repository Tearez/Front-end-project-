jQuery(document).ready(function() {
	jQuery('.navbar-default .navbar-nav li a').on('click', function(e) {

		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).siblings().slideUp(600);
		jQuery('.tabs ' + currentAttrValue).delay(600).slideDown(600);

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});