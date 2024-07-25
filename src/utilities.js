function captureDailyTotal() {
  const lastRow = getLastCLient();
  for (var i = 1; i < lastRow; i++){ 
    var url = getClientData(i).portfolioLink;   // Seleccionar la id de un cliente determinado
    var spreadsheet = SpreadsheetApp.openByUrl(url); 

    // Seleccionar hoja específica
    var sheetName = "historico portafolio";
    var sheet = spreadsheet.getSheetByName(sheetName);  

    // Obtener valor de la celda
    var dailyTotalCell = "F6";
    var dailyTotal = sheet.getRange(dailyTotalCell).getValue();

    var dateWithTime = new Date()
    var day = dateWithTime.getDate();
    var month = dateWithTime.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
    var year = dateWithTime.getFullYear();

    // Formatear la fecha como dd/mm/yyyy
    var date = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + year;

  // Obtener última fila de columna de fecha
    var row = 1; 
    while (sheet.getRange("A" + row).getValue() != "") {
      row++;
    }

    // Establecer valores en la fila vacía encontrada
    sheet.getRange("A" + (row)).setValue(date);
    sheet.getRange("B" + (row)).setValue(dailyTotal);
  };
};

function getClientData (i) {
  var spreadsheet, clientsSheet, clients, fullName, email, portfolioLink, lastRow;
  spreadsheet = SpreadsheetApp.openById(
    '1GiWuVKD_rqmcjYtCOkw3XMUSGkxZT9JTkBxNslVlPu0'
    );

  clientsSheet = spreadsheet.getSheets()[0];
  clients = clientsSheet.getDataRange().getValues();
  fullName = clients[i][1];
  email = clients[i][3];
  portfolioLink = clients[i][10];
  return {fullName: fullName, email: email, portfolioLink: portfolioLink};
};

function getName(fullName) {
  names = {
    "GIMENEZ ORTIZ FACUNDO": "Facundo",
    "CONSENTINO CORINA JOHANA": "Johana",
    "HAEDO ARIEL OSVALDO": "Ariel",
    "BENAY MONICA BEATRIZ": "Mónica",
    "MAC LOUGHLIN MARÍA DEL CARMEN": "María del Carmen",
    "ERMACORA LEANDRO NICOLAS": "Leandro",
    "EMPRESA PUERTO TIROL SRL": "Puerto Tirol SRL",
    "BIDERMANN FEDRIZZI FEDERICO FERNANDO": "Fernando",
    "JEREZ MANTARAS MARTA RAQUEL": "Marta",
    "THOMAS CARLOS EDUARDO": "Carlos",
    "CORNALO CAMILA": "Camila",
    "JEREZ MANTARAS JORGE JAVIER": "Jorge",
    "REY ALLOI MARIANO": "Mariano",
    "ERMACORA ROMINA BELEN": "Romina",
    "GRASSANO MANUELA": "Manuela",
    "JEREZ MANTARAS HUGO MARCELINO": "Hugo",
    "REY ALLOI GERARDO": "Gerardo",
    "JEREZ FABRICIO EZEQUIEL": "Fabricio"
  };
  
  var name = names[fullName.toUpperCase()]
  if (!(name in names)) {
    name = "";
  }
  return name;
};

function getLastName (fullName) {
 lastNames = {
    "GIMENEZ ORTIZ FACUNDO": "GimenezOrtiz",
    "CONSENTINO CORINA JOHANA": "Consentino",
    "HAEDO ARIEL OSVALDO": "Haedo",
    "BENAY MONICA BEATRIZ": "Benay",
    "MAC LOUGHLIN MARÍA DEL CARMEN": "MacLoughlin",
    "ERMACORA LEANDRO NICOLAS": "Ermacora",
    "EMPRESA PUERTO TIROL SRL": "PtoTirolSRL",
    "BIDERMANN FEDRIZZI FEDERICO FERNANDO": "Bidermann",
    "JEREZ MANTARAS MARTA RAQUEL": "Jerez",
    "THOMAS CARLOS EDUARDO": "Thomas",
    "CORNALO CAMILA": "Cornalo",
    "JEREZ MANTARAS JORGE JAVIER": "Jerez",
    "REY ALLOI MARIANO": "ReyAlloi",
    "ERMACORA ROMINA BELEN": "Ermacora",
    "GRASSANO MANUELA": "Grassano",
    "JEREZ MANTARAS HUGO MARCELINO": "Jerez",
    "REY ALLOI GERARDO": "ReyAlloi",
    "JEREZ FABRICIO EZEQUIEL": "Jerez"
  }
  var lastName = lastNames[fullName.toUpperCase()]
  if (!(lastName in lastNames)) {
    lastName = "resumen";
  }
  return lastName;
}
 
function getTitle (name) {
  var femenineNames = [
    "Johana",
    "Mónica",
    "María del Carmen",
    "Marta",
    "Camila",
    "Romina",
    "Manuela", 
    ]
  if (femenineNames.includes(name)) {
    var title = "Estimada";
  } else {
    var title = "Estimado";
  }
  return title;
};

function getPdfName (fullName) {
  var lastName = getLastName(fullName);
  var date = new Date();
  var day = date.getDate().toString();
  var month = date.getMonth().toString();
  var year = date.getFullYear().toString().slice(-2);
  if (day.length === 1) {
    day = "0" + day;
  }
  if (month.length === 1) {
    month = "0" + month;
  }
  var pdfName = lastName + day + "-" + month + "-" + year + ".pdf"

  return pdfName
};

function getLastCLient () {
  const spreadsheet = SpreadsheetApp.openById(
  '1GiWuVKD_rqmcjYtCOkw3XMUSGkxZT9JTkBxNslVlPu0'
  )
  const clientsSheet = spreadsheet.getSheets()[0];
  const lastClient = clientsSheet.getLastRow();
  return lastClient;
}





  