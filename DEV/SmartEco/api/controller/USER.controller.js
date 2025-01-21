const userModel = require("../model/USER.model");
const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.json({ data: user, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.json({ message: "utilisateur absent", code: 404 });
    }

    const passwordMatch = await bCrypt.compare(password, user.password);

    if (passwordMatch) {
      res.json({
        data: {
          userId: user._id,
          token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          }),
        },
        code: 200,
        message: "ok",
      });
    } else {
      res.json({ message: "Invalid credentials", code: 401 });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.json({ message: "An error occurred during login", code: 500 });
  }
};

// const secreteUser = async (req, res) => {
//   try {
//     const user = new userModel(req.body);
//     const result = await user.save();
//     if (result) {
//       res.json({
//         message: "user " + req.body.NOM + " created successfully",
//         code: 201,
//       });
//     } else {
//       res.json({ message: "error during creation", code: 500 });
//     }
//   } catch (err) {
//     res.json({ message: err, code: 500 });
//   }
// };

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bCrypt.hash(req.body.password, 10);

    const user = new userModel({
      ...req.body,
      password: hashedPassword,
    });

    const result = await user.save();

    if (result) {
      res.json({
        message: `User ${req.body.username} created successfully`,
        code: 201,
      });
    } else {
      res.json({ message: "Error during creation", code: 500 });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ message: "An error occurred during user creation", code: 500 });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userModel.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
      res.json({ message: "updated successfully", code: 200 });
    } else {
      res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user) {
      res.json({ data: user, message: "ok", code: 200 });
    } else {
      res.json({ data: null, message: "user not found", code: 404 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await userModel.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: "deleted successfully" });
    } else {
      res.json({ message: "error during update", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getUser,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  //secreteUser,
  login,
};
