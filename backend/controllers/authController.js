const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ email, password });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error("Error signing token:", err);
          return res.status(500).json({ message: "Server error" });
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Error during signup:", err.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error("Error signing token:", err);
          return res.status(500).json({ message: "Server error" });
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).send("Server error");
  }
};

exports.getUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ status: "error", message: "User not authenticated" });
    }

    const user = await User.findById(req.user.id).select("email password");
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      user: {
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  const { email, password, new_email, new_password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    user.email = new_email;
    user.password = new_password;

    await user.save();

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      user: { email: user.email },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
