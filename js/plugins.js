
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