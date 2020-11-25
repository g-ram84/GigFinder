module.exports = function(router, helper, db) {
  router.get("/", (req, res) => {
    //console.log(req.query);
    helper.getAllJobs(db, req.query)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  router.get("/:id", (req, res) => {
    const job_id = req.params.id;
    helper.getJobById(job_id, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });

  router.post("/", (req, res) => {
    const newJob = req.body.job;
    //console.log(newJob);
    helper.addNewJob(newJob, db)
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500);
      });
  });
  return router;

};