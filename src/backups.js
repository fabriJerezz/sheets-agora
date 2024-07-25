function makePortfolioValueBackup (ss) { 
  let sheetName = "historico portafolio";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("F4").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("F6").setValue(newValue);
  };
};


function makeDolarMepBackup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("B1").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("C1").setValue(newValue);
  }
};


function makeAL30Backup (ss) {    
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E30").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G30").setValue(newValue);
  };
};


function makeAL41Backup (ss) {   
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E37").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G37").setValue(newValue);
  }
};


function makeTicker1Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E44").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G44").setValue(newValue);
  };
};


function makeTicker2Backup (ss) {     
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E51").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G51").setValue(newValue);
  };
};


function makeTicker3Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E58").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G58").setValue(newValue);
  }
};


function makeTicker4Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E65").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G65").setValue(newValue);
  };
};


function makeTicker5Backup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E72").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G72").setValue(newValue);
  };
};


function makeAL30DBackup (ss) { 
  let sheetName = "cotizaciones de bonos";
  let sheet = ss.getSheetByName(sheetName);  
  let newValue = sheet.getRange("E79").getValue();

  if (!isNaN(newValue)) {
    sheet.getRange("G79").setValue(newValue);
  };
};








