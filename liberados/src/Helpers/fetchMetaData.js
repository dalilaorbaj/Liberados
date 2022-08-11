import { google } from "googleapis";
import React from "react";
console.log("Hola ")
const googleSheets = google.sheets({version: "v4"});

const spreadsheetId = "1dKW233891O-uHdn5I7MoM9iKilK5dz-jdgA5mqPZN0U";

const metaData = await googleSheets.spreadsheets.get({
    spreadsheetId
})

const getRows = await googleSheets.spreadsheets.values.get({
    spreadsheetId, 
    range: "Sheet1"

});

//console.log(getRows.data)
