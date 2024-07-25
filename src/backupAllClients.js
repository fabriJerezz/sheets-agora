function makeAllBackUps() {
  const lastRow = getLastCLient()

  for (var i = 1; i < lastRow; i++){ 
    const url = getClientData(i).portfolioLink;   // Seleccionar la id de un cliente determinado
    const ss = SpreadsheetApp.openByUrl(url);  

    makePortfolioValueBackup(ss);
    makeDolarMepBackup(ss);
    makeAL30Backup(ss);
    makeAL41Backup(ss);
    makeTicker1Backup(ss);
    makeTicker2Backup(ss);
    makeTicker3Backup(ss);
    makeTicker4Backup(ss);
    makeTicker5Backup(ss);
    makeAL30DBackup(ss);
  };
};
