const router = require('express').Router();
const { userController } = require("../controller/user.controller.js");

router.post("/signup", userController.createSignup);
router.post("/login", userController.login);
router.post("/reset", userController.reset);
router.post("/resetform", userController.resetform);
router.post("/shorturl", userController.shorturl);
router.get("/geturl", userController.getUrl);

module.exports = router;