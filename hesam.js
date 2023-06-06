// // step 1
// // make the folders

// // step 2
// // nmp install

// // step 3
// // link the files

// const celebritiesRoutes = require("./routes/celebrities.routes");
// const moviesRoutes = require("./routes/movies.routes");

// // step 4
// // define the routes :

// app.use("/celebrities", celebritiesRoutes);
// app.use("/movies", moviesRoutes);

// // step 5
// // make the folders celebrities & movies :

// // step 6
// // add Schema
// const mongoose = require("mongoose");

// const celebritySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   occupation: {
//     type: String,
//     default: "unknown",
//   },
//   catchPhrase: {
//     type: String,
//   },
// });

// const Celebrity = mongoose.model("Celebrity", celebritySchema);

// // Add 7 popular celebrities
// const celebrities = [
//   {
//     name: "Tom Cruise",
//     occupation: "Actor",
//     catchPhrase: "Show me the money!",
//   },
//   {
//     name: "Beyoncé",
//     occupation: "Singer",
//     catchPhrase: "I woke up like this.",
//   },
//   {
//     name: "Daffy Duck",
//     occupation: "Cartoon character",
//     catchPhrase: "Youre despicable!",
//   },
//   {
//     name: "Kim Kardashian",
//     occupation: "TV personality",
//     catchPhrase: "Im obsessed with selfies.",
//   },
// ];

// // Insert celebrities into the database
// Celebrity.insertMany(celebrities)
//   .then(() => {
//     console.log("Celebrities added successfully.");
//   })
//   .catch((error) => {
//     console.error("Error adding celebrities:", error);
//   });

// module.exports = Celebrity;

// // step 7
// // Iteration #3: Adding New Celebrities
