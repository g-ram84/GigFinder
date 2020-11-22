module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllSavedCompanies(db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  router.get("/:id", (req, res) => {
    const worker_id = req.params.id;
    helper.getSavedCompaniesByWorkerId(worker_id, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};