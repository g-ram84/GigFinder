module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllEmployers(db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });

  router.get("/:id", (req, res) => {
    const employer_id = req.params.id;
    helper.getEmployerById(employer_id, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;

};

