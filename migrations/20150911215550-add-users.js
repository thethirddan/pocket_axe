var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function (db, callback) {
  db.createTable('users', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    password: 'string',
    is_admin: 'boolean',
    created_at: 'datetime',
    updated_at: 'datetime',
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('users', callback);
};
