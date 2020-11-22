const express = require("express");
const jobsDbHelpers = require('../lib/dbHelpers/jobsDbHelpers');
const workersDbHelpers = require('../lib/dbHelpers/workersDbHelpers');
const applicationsDbHelpers = require('../lib/dbHelpers/applicationsDbHelpers');
const employersDbHelpers = require('../lib/dbHelpers/employersDbHelpers');
const savedCompaniesDbHelpers = require('../lib/dbHelpers/savedCompaniesDbHelpers');
const savedWorkersDbHelpers = require('../lib/dbHelpers/savedWorkersDbHelpers');
const { app } = require("../server");


function apiRoutes(db) {
  const jobsRouter = express.Router();
  const jobRoutes = require("./jobs");
  jobRoutes(jobsRouter, jobsDbHelpers, db);
  app.use('/api/jobs', jobsRouter);

  const workersRouter = express.Router();
  const workersRoutes = require("./workers");
  workersRoutes(workersRouter, workersDbHelpers, db);
  app.use('/api/workers', workersRouter);

  const applicationsRouter = express.Router();
  const applicationsRoutes = require("./applications");
  applicationsRoutes(applicationsRouter, applicationsDbHelpers, db);
  app.use('/api/applications', applicationsRouter);

  const employersRouter = express.Router();
  const employersRoutes = require("./employers");
  employersRoutes(employersRouter, employersDbHelpers, db);
  app.use('/api/employers', employersRouter);

  const savedCompaniesRouter = express.Router();
  const savedCompaniesRoutes = require("./saved_companies");
  savedCompaniesRoutes(savedCompaniesRouter, savedCompaniesDbHelpers, db);
  app.use('/api/savedcompanies', savedCompaniesRouter);

  const savedWorkersRouter = express.Router();
  const savedWorkersRoutes = require("./saved_workers");
  savedWorkersRoutes(savedWorkersRouter, savedWorkersDbHelpers, db);
  app.use('/api/savedworkers', savedWorkersRouter);
}
exports.apiRoutes = apiRoutes;