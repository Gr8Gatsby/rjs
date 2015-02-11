$(document).ready(function() {
	var btnMessageDialog = document.getElementById('btnMessageDialog');

	btnMessageDialog.addEventListener('click', function(){
		systemAlert('This is a Message Dialog');
	});

	$.getJSON("data/plugins.json", function(data){
		p.init(data);
	});
});