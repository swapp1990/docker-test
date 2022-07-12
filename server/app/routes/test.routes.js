module.exports = (app) => {
  var router = require("express").Router();
  router.get("/", (req, res) => {
    res.send("All Test Data");
  });

  app.use("/api/test", router);
};
