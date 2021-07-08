const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");
require("./db/conn");
const ContactMessage = require("./models/submit_form.js");

//paths
const template_path = path.join(__dirname, "../templates/views");
const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/submit_form", (req, res) => {
  res.render("submit_form");
});

app.post("/submit_form", async (req, res) => {
  try {
    const registerIssue = new ContactMessage({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const registered = await registerIssue.save();
    res.status(201).render("messagesent");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
