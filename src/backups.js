function makePortfolioValueBackup (ss) { 
  let sheetName = "historico portafolio";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("F4").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("F6").setValue(newValue);
    };
    
  } catch (error) {
    Logger.log(error);
  };
};


function makeDolarMepBackup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("B1").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("C1").setValue(newValue);
    };
  } catch (error) {
    Logger.log(error);
  };
};


function makeAL30Backup (ss) {    
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E30").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G30").setValue(newValue);
    };

  } catch (error) {
    Logger.log(error);
  };
};


function makeAL41Backup (ss) {   
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E37").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G37").setValue(newValue);
    };

  } catch (error) {
    Logger.log(error);
  };
};


function makeTicker1Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E44").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G44").setValue(newValue);
    };

  } catch (error) {
    Logger.log(error);
  };
};


function makeTicker2Backup (ss) {     
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E51").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G51").setValue(newValue);
    };
  } catch (error) {
    Logger.log(error);
  };
};


function makeTicker3Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E58").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G58").setValue(newValue);
    };
  } catch (error) {
    Logger.log(error);
  };
};


function makeTicker4Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E65").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G65").setValue(newValue);
    };

  } catch (error) {
    Logger.log(error);
  };
};


function makeTicker5Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E72").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G72").setValue(newValue);
    };

  } catch (error) {
    Logger.log(error);
  };
};


function makeAL30DBackup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E79").getValue();
  try {
    if (!isNaN(newValue)) {
      sheet.getRange("G79").setValue(newValue);
    };

  } catch (error) {
      Logger.log(error);
  };
};








