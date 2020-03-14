#!/usr/bin/env node

const Excel = require('exceljs')
const filename = process.argv[2] || 'x.csv'
const outputFile = process.argv[3] || filename.replace(/csv$/i, 'xlsx')

var workbook = new Excel.Workbook();

var options = {
  map(value, index) {
    return value
  }
}

workbook.csv.readFile(filename, options)
  .then(ws => {
    workbook.xlsx.writeFile(outputFile)
  });