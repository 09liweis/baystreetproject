const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user.js");
const express = require("express");
const router = express.Router();

router.get("/current", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});
router.post('/login',async (req,res)=>{
  const password = req.body.password;
  const query = {
    email:req.body.email,
  };
  User.findOne(query,'name email password favs isAdmin',(err,user)=>{
    bcrypt.compare(password, user.password, function(err, ret) {
      if (ret) {
        req.session.user = user;
        res.send({ok:1,user});
      } else {
        res.send({ok:0})
      }
    });
  })
})
router.post("/", async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  user.password = await bcrypt.hash(user.password, 10);
  await user.save();

  req.session.user = user;
  res.send({ok:1,user});

  // const token = user.generateAuthToken();
  // res.header("x-auth-token", token).send({
  //   _id: user._id,
  //   name: user.name,
  //   email: user.email
  // });
});

module.exports = router;