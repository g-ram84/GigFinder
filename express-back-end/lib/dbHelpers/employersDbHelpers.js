//API Query
const getAllEmployers = function(db) {
  return db.query(`SELECT * FROM employers`)
    .then((res) => {
      //console.log(res.rows);
      return res.rows;
    }).catch(err => {
      console.log(err);
    });
};
exports.getAllEmployers = getAllEmployers;