const express = require("express");
const jobsDbHelpers = require('../lib/dbHelpers/jobsDbHelpers');
const workersDbHelpers = require('../lib/dbHelpers/workersDbHelpers');
const applicationsDbHelpers = require('../lib/dbHelpers/applicationsDbHelpers');
const employersDbHelpers = require('../lib/dbHelpers/employersDbHelpers');
const employerRatingsDbHelpers = require('../lib/dbHelpers/employerRatingsDbHelpers');
const workerRatingsDbHelpers = require('../lib/dbHelpers/workerRatingsDbHelpers');
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

  const employerRatingsRouter = express.Router();
  const employerRatingsRoutes = require("./employerRatings");
  employerRatingsRoutes(employerRatingsRouter, employerRatingsDbHelpers, db);
  app.use('/api/employerratings', employerRatingsRouter);

  const workerRatingsRouter = express.Router();
  const workerRatingsRoutes = require("./workerRatings");
  workerRatingsRoutes(workerRatingsRouter, workerRatingsDbHelpers, db);
  app.use('/api/workerratings', workerRatingsRouter);

  const declineApplicationRouter = express.Router();
  const declineApplicationRoutes = require('./applications');
  declineApplicationRoutes(declineApplicationRouter, applicationsDbHelpers, db);
  app.use('api/applications/decline', declineApplicationRouter);

  const acceptApplicationRouter = express.Router();
  const acceptApplicationRoutes = require('./applications');
  acceptApplicationRoutes(acceptApplicationRouter, applicationsDbHelpers, db);
  app.use('api/applications/accept', acceptApplicationRouter);
}
exports.apiRoutes = apiRoutes;