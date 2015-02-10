$(document).ready(function() {
	var btnMessageDialog = document.getElementById('btnMessageDialog');

	btnMessageDialog.addEventListener('click', function(){
		systemAlert('This is a Message Dialog');
	});

	var btnToastMessage = document.getElementById('btnToastNotification');

	btnToastMessage.addEventListener('click', function(){
		toastNotification('This is a Toast Notification');
	});

	var cameraCapture = document.getElementById('btnCameraCapture');

	btnToastMessage.addEventListener('click', function(){
		cameraCapture('This is a Camera Capture');
	});

});