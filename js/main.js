$(document).ready(function(){
	$nav = $('.nav');
	$toggleCollapse = $('.toggle-collapse');
	
	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse'); 
		
		
	})
});

function angka(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57)) 
		return false;
		return true;
};


function huruf(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode < 65 || charCode > 90)&&(charCode < 97 || charCode > 122)&&charCode>32) {
        return false;
    }
    return true;
};