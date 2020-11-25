module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllApplications(db, req.query)
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
  router.post("/", (req, res) => {
    const newApplication = req.body.application;
    helper.addNewApplication(newApplication, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};