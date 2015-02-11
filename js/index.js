$(document).ready(function() {
	var btnMessageDialog = document.getElementById('btnMessageDialog');

	btnMessageDialog.addEventListener('click', function(){
		systemAlert('This is a Message Dialog');
	});


	$.getJSON("data/plugins.json", function(data){
		p.init(data);
	});

	var btnToastMessage = document.getElementById('btnToastNotification');

	btnToastMessage.addEventListener('click', function(){
		toastNotification('This is a Toast Notification');
	});

	var btnCameraCapture = document.getElementById('btnCameraCapture');

	btnCameraCapture.addEventListener('click', function(){
		cameraCapture('This is a Camera Capture');
	});
});