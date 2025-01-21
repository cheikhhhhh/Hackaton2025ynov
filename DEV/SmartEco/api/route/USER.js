const express = require("express");
const route = express.Router();
const user = require("../controller/USER.controller");
const auth = require("../middleware/auth");

route.get("/user", auth, user.getUser);
//route.post('/secrete',auth,user.createUser);
route.put("/user/:id", auth, user.updateUser);
route.delete("/user/:id", auth, user.deleteUser);
route.post("/logIn", user.login);
route.get("/user/:id", auth, user.getOneUser);
route.post("/signIn", user.createUser);

module.exports = route;
