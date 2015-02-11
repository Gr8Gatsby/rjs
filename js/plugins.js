
function systemAlert(message) {
  // Log the message to the console
  console.log("OUTPUT: " + message);
  
  if(typeof Windows != 'undefined') {
    // Log to the console
    console.log("SUCCESS: Windows namespace is available.");
    
    // Create the message dialog and set its content
    var msg = new Windows.UI.Popups.MessageDialog(message);
    
    // Add commands
    msg.commands.append(new Windows.UI.Popups.UICommand("Okay", systemAlertCommandInvokedHandler));
    
    // Set default command
    msg.defaultConnadnIndex = 0;
    
    // Show the message dialog
    msg.showAsync();
    
  } else {
    //TODO: Fallback to website functionality
    console.log("ERROR: No Windows namespace was detected");
  }
}

function systemAlertCommandInvokedHandler(command) {
  console.log ("OUTPUT: The " + command.label + " was selected");
}

function toastNotification(message) {
  // Log the message to the console
  console.log("OUTPUT: " + message);
  
  if(typeof Windows != 'undefined') {
    //Error detection
    // var text = document.createTextNode("Calling the notifications")
    // document.body.appendChild(text);
    // Log to the console
    var notifications = Windows.UI.Notifications;
    //Get the XML template where the notification content will be suplied
    var template = notifications.ToastTemplateType.toastImageAndText01;
    var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);
    //Supply the text to the XML content
    var toastTextElements = toastXml.getElementsByTagName("text");
    toastTextElements[0].appendChild(toastXml.createTextNode(message));
    //Supply an image for the notification
    var toastImageElements = toastXml.getElementsByTagName("image");
    //Set the image this could be the background of the note, get the image from the web
    toastImageElements[0].setAttribute("src", "https://raw.githubusercontent.com/seksenov/grouppost/master/images/logo.png");
    toastImageElements[0].setAttribute("alt", "red graphic");
    //Specify a long duration
    var toastNode = toastXml.selectSingleNode("/toast");
    toastNode.setAttribute("duration", "long");
    //Specify the audio for the toast notification
    var toastNode = toastXml.selectSingleNode("/toast");                        
    var audio = toastXml.createElement("audio");
    audio.setAttribute("src", "ms-winsoundevent:Notification.IM");
    //Specify launch paramater
    toastXml.selectSingleNode("/toast").setAttribute("launch", '{"type":"toast","param1":"12345","param2":"67890"}');
    //Create a toast notification based on the specified XML
    var toast = new notifications.ToastNotification(toastXml);
    //Send the toast notification
    var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
    toastNotifier.show(toast);
    
  } else {
    //TODO: Fallback to website functionality
    console.log("ERROR: No Windows namespace was detected");
  }
}

function cameraCapture () {

  if(typeof Windows != 'undefined') {
    //Initialize windows media camera capture
    var captureUI = new Windows.Media.Capture.CameraCaptureUI();
    //Set the format of the picture that's going to be captured (.png or .jpg)
    captureUI.photoSettings.format = Windows.Media.Capture.CameraCaptureUIPhotoFormat.png;

    //Pop up the camera UI to take a picture
    captureUI.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).then(function (capturedItem) {
       if (capturedItem) {
          // This is where the picture can be taken and shown on the webpage if we want to add this functionality

          // var reader = new window.FileReader();
          // reader.readAsDataURL(capturedItem); 
          // reader.onloadend = function() {
          //   var base64pic = reader.result;                
          //   //Resize the base64 image
          //   var photo = document.createElement("img");
          //   photo.setAttribute('src', base64pic);
          //   var resizedImage = imageToDataUri(photo, 300, 300);
          //   //Set the picture as the background of the div
          //   $("#"+divID).css("background-image", "url(" + resizedImage + ")");
          //   //Store the image in the DB
          //   storeImage(divID, resizedImage);
          // }
        }
        else {
          //Taking a picture has failed
          console.log("Taking the picture with WinRT failed");
        }
    });
  } else {
    //TODO: Fallback to website functionality
    console.log("ERROR: No Windows namespace was detected");
  }

}