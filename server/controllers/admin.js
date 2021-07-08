const bcrypt = require("bcrypt");
const Admin = require("../model/adminSchema");

exports.register = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "One or more fields empty" });
  } else if (password != cpassword) {
    return res.status(422).json({ error: "Passwords no matching" });
  } else {
    try {
      const adminExist = await Admin.findOne({ email: email });
      if (adminExist) {
        return res.json({ error: "Email already exists" });
      }
      const admin = new Admin({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      try {
        const adminSaved = await admin.save();

        if (adminSaved) {
          return res.json({ message: "Admin Registered Successfully!" });
        }
      } catch {
        res.json({ error: "Server Error" });
      }
    } catch (err) {
      console.log(err);
    }
  }
};
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "One or more fields empty" });
    }

    const adminLogin = await Admin.findOne({ email: email });

    if (adminLogin) {
      const isMatch = await bcrypt.compare(password, adminLogin.password);
      const token = await adminLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Admin Error" });
      } else {
        res.json({ message: "Admin SignIn Successful" });
      }
    } else {
      res.status(400).json({ error: "Admin Error" });
    }
  } catch (err) {
    console.log(err.message);
  }
};
