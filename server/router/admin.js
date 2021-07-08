const router = require("express").Router();
const adminController = require("../controllers/admin");
const authenticate = require("../middleware/authenticate");

router
  .post("/register", adminController.register)
  .post("/signin", adminController.signIn);

module.exports = router;
