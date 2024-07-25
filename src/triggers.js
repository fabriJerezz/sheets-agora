function listTriggers() {
    var triggers = ScriptApp.getProjectTriggers();
    triggers.forEach(function(trigger) {
      Logger.log('Trigger ID: ' + trigger.getUniqueId());
      Logger.log('Trigger Type: ' + trigger.getEventType());
      Logger.log('Trigger Function: ' + trigger.getHandlerFunction());
    });
  }