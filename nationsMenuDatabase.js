// var sqlite3 = require('sqlite3').verbose()
// var db = new sqlite3.Database('./bawurradb')
//
// db.serialize(function () {
//   db.run('DROP TABLE LanguagesMenu_Database')
//   db.run('CREATE TABLE NationsMenu_Database'+
//   '(Menu_Title TEXT PRIMARY KEY NOT NULL,'+
//    'Title TEXT NOT NULL,'+
//    'SubTitle TEXT,'+
//    'Body TEXT)')
//
//   var stmt = db.prepare('INSERT INTO NationsMenu_Database VALUES (?,?,?,?)')
//
//   for (var i = 0; i < 10; i++) {
//     stmt.run('dnckjsdcnjdk' + i, "nvnavnavav", "nvjfkbvkjnvd", "kanvanvv")
//   }
//
//   stmt.finalize()
//
//   db.each('SELECT rowid AS id, Menu_Title, Title, SubTitle, Body FROM NationsMenu_Database', function (err, row) {
//     console.log(row.id + ': ' + row.Menu_Title + " " + row.Title + " " + row.SubTitle + " "+ row.Body)
//   })
// })
//
// db.close();
//
// //module.exports = db;
