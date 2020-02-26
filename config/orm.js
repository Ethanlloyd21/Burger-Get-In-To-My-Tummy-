const connection = require('../config/connection.js');

const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  }

const orm = {
    selectAll: function (table, cb) {
      let queryString = 'SELECT * FROM ' + table + ';';
      connection.query(queryString, function (err, result) {
  
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  
    insertOne: function (table, cols, vals, cb) {
      let queryString = 'INSERT INTO ' + table;
  
      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += ') ';
  
      // console.log(`This is the query string from insert: ${queryString}`);
  
      connection.query(queryString, vals, function (err, result) {
  
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  
    // UPDATE burgers SET devoured = '1' WHERE burger_name = 'Cheeseburger';
    // Create an orm function for updateOne()
    updateOne: function (table, objColVals, condition, cb) {
      let queryString = 'UPDATE ' + table;
  
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;
  
      // console.log(`This is the queryString from update: ${queryString}`);
  
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  
    delete: function (table, condition, cb) {
      let queryString = 'DELETE FROM ' + table;
  
      queryString += ' WHERE ';
      queryString += condition;
  
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
  module.exports = orm;