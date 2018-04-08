// var sqlite3 = require('sqlite3').verbose()
// var db = new sqlite3.Database('./bawurradb')
//
// db.serialize(function () {
//   db.run('DROP TABLE LanguagesMenu_Database')
//   db.run('CREATE TABLE LanguagesMenu_Database'+
//   '(Menu_Title TEXT PRIMARY KEY NOT NULL,'+
//    'Title TEXT NOT NULL,'+
//    'Body1 TEXT,'+
//    'Body2 TEXT,'+
//    'Body3 TEXT,'+
//    'Body4 TEXT,'+
//    'Body5 TEXT,'+
//    'Body6 TEXT)')
//
//   var stmt = db.prepare('INSERT INTO LanguagesMenu_Database VALUES (?,?,?,?,?,?,?,?)')
//
//   for (var i = 0; i < 10; i++) {
//     stmt.run('dnckjsdcnjdk' + i, "nvnavnavav", "nvjfkbvkjnvd", "kanvanvv", "navnava", "nlkanvav", "bvbvkjsbvkjs", "nvknvkjsdnv")
//   }
//
//   stmt.finalize()
//
//   db.each('SELECT rowid AS id, Menu_Title, Title, Body1, Body2, Body3, Body4, Body5, Body6 FROM LanguagesMenu_Database', function (err, row) {
//     console.log(row.id + ': ' + row.Menu_Title + " " + row.Title + " " + row.Body1 + " " + row.Body2 + " "+ row.Body3 + " " + row.Body4 + " " + row.Body5 + " " + row.Body6)
//   })
// })
//
// //db.close();
//
// module.exports = db;
