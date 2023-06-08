// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

//another routs comes here
router.get("/", (req, res) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      // Handle the error
      console.log(err);
      res.render("error"); // Render an error view or handle it in your preferred way
    } else {
      res.render("celebrities/celebrities", { celebrities });
    }
  });
});

// all your routes here

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase,
  });

  newCelebrity.save((err) => {
    if (err) {
      res.render("celebrities/new-celebrity");
    } else {
      res.redirect("/celebrities");
    }
  });
});

module.exports = Celebrity;
