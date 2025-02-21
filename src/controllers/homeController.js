const connection = require("../config/database");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const User = require("../models/User");

const getHomepage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results }); //
};

const getABCpage = (req, res) => {
  console.log(req);
  res.send("Check ABC!");
};

const getManDuongpage = (req, res) => {
  res.render("sample.ejs");
};

const getCreatepage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatepage = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).exec();
  console.log(user);
  return res.render("update.ejs", { user: user });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  // // C1
  const user = new User({ name, email, city });
  const result = await user.save();

  // // C2
  // const result = await User.create({ name, email, city });

  // // C3
  // await User.insertMany([{ name, email, city }, { name1, email1, city1 }, { name2, email2, city2 }]);
  res.redirect("/");
  if (result) res.send("Created user succeed!");
  else res.send("created user failed!");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  const results = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  // req.flash('message', results ? 'Updated user succeeded!' : 'Updated user failed!');
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  let userId = req.params.userId;
  let user = await getUserById(userId);
  return res.render("delete.ejs", { user: user });
};

const postHandleRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  let results = await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABCpage,
  getManDuongpage,
  getCreatepage,
  getUpdatepage,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
