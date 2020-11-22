module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllWorkers(db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};