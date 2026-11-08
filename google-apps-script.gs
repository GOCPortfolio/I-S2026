/**
 * RSVP receiver for the wedding site. Paste into Extensions > Apps Script of a Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 */
var SHEET_NAME = 'RSVPs';
var HEADERS = ['Received', 'Name', 'Phone', 'Attending', 'Guests', 'Message'];

function clean_(v, max) {
  var s = String(v == null ? '' : v).slice(0, max || 500);
  // stop spreadsheet formula injection
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) { sheet.appendRow(HEADERS); sheet.setFrozenRows(1); }
    var row = sheet.getLastRow() + 1;
    sheet.getRange(row, 3).setNumberFormat('@');   // keep leading zeros in phone numbers
    sheet.getRange(row, 1, 1, 6).setValues([[
      new Date(), clean_(data.name, 120), clean_(data.phone, 30),
      clean_(data.attending, 40), Number(data.guests) || 0, clean_(data.message, 500)
    ]]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() { return ContentService.createTextOutput('RSVP endpoint is live.'); }
