function getDashboard (url) {
  var blob,exportUrl,options,response,sheetTabNameToGet,sheetTabId,spreadsheet,ssID,url_base;

  range = "B1:J44";//Set the default to whatever you want

  sheetTabNameToGet = "Dashboard";//Replace the name with the sheet tab name for your situation
  spreadsheet = SpreadsheetApp.openByUrl(url);//This assumes that the Apps Script project is bound to a G-Sheet
  ssID = spreadsheet.getId();
  sh = spreadsheet.getSheetByName(sheetTabNameToGet);
  sheetTabId = spreadsheet.getSheetId();
  url_base = spreadsheet.getUrl().replace(/edit$/,'');

  //Logger.log('url_base: ' + url_base)

  exportUrl = url_base + 'export?exportFormat=pdf&format=pdf' +

    '&gid=' + sheetTabId + '&id=' + ssID +
    '&range=' + range + 
    //'&range=NamedRange +
    '&size=15x11' +     // paper size
    '&portrait=true' +   // orientation, false for landscape
    '&fitw=true' +       // fit to width, false for actual size  // REVISAR SI VA TRUE O FALSE
    '&sheetnames=true&printtitle=false&pagenumbers=true' + //hide optional headers and footers
    '&gridlines=false' + // hide gridlines
    '&fzr=false';       // do not repeat row headers (frozen rows) on each page

  //Logger.log('exportUrl: ' + exportUrl)

  options = {
    headers: {
      'Authorization': 'Bearer ' +  ScriptApp.getOAuthToken(),
    }
  }

  options.muteHttpExceptions = true;//Make sure this is always set

  response = UrlFetchApp.fetch(exportUrl, options);

  //Logger.log(response.getResponseCode())

  if (response.getResponseCode() !== 200) {
    console.log("Error exporting Sheet to PDF!  Response Code: " + response.getResponseCode());
    return;

  }
  
  blob = response.getBlob();
  return blob;
  }

function sendEmail (emailAddress, fullName, attachedFile) {
  var subject = "Resumen semanal de cartera";
  var name = getName(fullName);
  var title = getTitle(name);

  var body = 
    `Estimado/a  inversor/a, \n 
    Adjunto encontrará un resumen semanal de su cartera de inversión. \n 

    Saludos cordiales 
    Lic. Gonzalo Jerez \n`;

  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    body: body,
    attachments: attachedFile
  });
}



function weeklyEmailSending () {
  for (var i = 1; i <= 18; i++) {

    var clientData = getClientData(i);
    var url = clientData.portfolioLink;
    var pdfName = getPdfName(clientData.fullName);
    var attachedFile = getDashboard(url).setName(pdfName);

    sendEmail(clientData.email, clientData.fullName, attachedFile);
  }
}






