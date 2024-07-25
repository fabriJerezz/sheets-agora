
function makeAllBackUps() {
  const lastRow = getLastCLient();

  for (var i = 1; i < lastRow; i++){
    const clientData = getClientData(i);
    
    if (clientData && clientData.portfolioLink) {// Seleccionar la id de un cliente determinado
      const clientUrl = clientData.portfolioLink;
      const ss = SpreadsheetApp.openByUrl(clientUrl);  

      buckups.forEach(backup => {
        try {
          backup(ss);
        } catch (error) {
          Logger.log(`Error en el backup ${backup.name} del cliente ${clientData.fullName} : ${error}`);
        };
      });
    } else {
      Logger.log('No se encontró la URL del cliente');
    };
  };
};

