module.exports = (app) => {
  var router = require("express").Router();
  const axios = require("axios");
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  router.get("/", (req, res) => {
    res.send("All Test Data");
  });

  router.post("/login", async (req, res) => {
    let payload = { uname: "swapp", pwd: "1111" };
    try {
      let res2 = await axios.post(
        "http://ec2-50-18-70-242.us-west-1.compute.amazonaws.com/core/user/login",
        payload
      );
      let data = res2.data;
      console.log(data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
      res.send("Error");
    }

    res.send("Success");
  });

  app.use("/api/test", router);
};
