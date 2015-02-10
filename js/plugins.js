
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