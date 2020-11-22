module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllApplications(db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  router.get("/:id", (req, res) => {
    const application_id = req.params.id;
    helper.getApplicationById(application_id, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};