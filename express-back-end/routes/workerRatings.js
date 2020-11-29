module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    helper.getAllWorkerRatings(db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });

  router.get("/:id", (req, res) => {
    const company_id = req.params.id;
    helper.getWorkerRatingsByEmployerId(company_id, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;
};