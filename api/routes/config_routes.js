const sportRoute = require("./sportRoute");

exports.routesInit = (app) => {
  // app.use("/user",usersRoute);
  // app.use("/professional",professionalsRoute);
  // app.use("/comment",commentsRoute);
  // app.use("/job",jobsRoute);
  app.use('/',sportRoute)
}