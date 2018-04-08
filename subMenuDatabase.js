// var sqlite3 = require('sqlite3').verbose()
// var db = new sqlite3.Database('./bawurradb')
//
// db.serialize(function () {
//   db.run('DROP TABLE LanguagesMenu_Database')
//   db.run('CREATE TABLE SubMenu_Database'+
//   '(Menu_Title TEXT PRIMARY KEY NOT NULL,'+
//    'Title TEXT NOT NULL,'+
//    'SubTitle TEXT,'+
//    'Media_1 TEXT,'+
//    'Body TEXT,'+
//    'Media_2 TEXT)')
//
//   var stmt = db.prepare('INSERT INTO SubMenu_Database VALUES (?,?,?,?,?,?)')
//
//   for (var i = 0; i < 10; i++) {
//     stmt.run('dnckjsdcnjdk' + i, "nvnavnavav", "nvjfkbvkjnvd", "kanvanvv", "navnava", "nlkanvav")
//   }
//
//   stmt.finalize()
//
//   db.each('SELECT rowid AS id, Menu_Title, Title, SubTitle, Media_1, Body, Media_2 FROM SubMenu_Database', function (err, row) {
//     console.log(row.id + ': ' + row.Menu_Title + " " + row.Title + " " + row.SubTitle + " " + row.Media_1 + " "+ row.Body + " " + row.Media_2)
//   })
// })
//
// db.close();
//
// module.exports = db;
