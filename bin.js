#!/usr/bin/env node

const Excel = require('exceljs')
const filename = process.argv[2] || 'x.csv'
const outputFile = process.argv[3] || filename.replace(/csv$/i, 'xlsx')

var workbook = new Excel.Workbook();
workbook.csv.readFile(filename)
  .then(ws => {
    for(let i=0; i<ws.actualColumnCount; i++){
      ws.getColumn(i + 1).numFmt = '@'
    }
    workbook.xlsx.writeFile(outputFile)
  });