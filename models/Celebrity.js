const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    default: "unknown",
  },
  catchPhrase: {
    type: String,
  },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

// Add 4 popular celebrities
const celebrities = [
  {
    name: "Jason Statham",
    occupation: "Actor and former professional diver",
    catchPhrase: "Can you smell what The Rock is cooking",
  },
  {
    name: "Jennifer Lawrence",
    occupation: "Actress",
    catchPhrase:
      "Do you know what happens to a man who doesn't pay his debts? He loses everything.from the movie Snatch",
  },
  {
    name: "Robert Downey Jr.",
    occupation: "Actor",
    catchPhrase: "I am Iron Man from the Marvel Cinematic Universe",
  },
  {
    name: "Kim Kardashian",
    occupation: "TV personality",
    catchPhrase: "Im obsessed with selfies.",
  },
];

// Insert celebrities into the database

Celebrity.insertMany(celebrities)
  .then(() => {
    console.log("Celebrities added successfully.");
  })
  .catch((error) => {
    console.error("Error adding celebrities:", error);
  });

module.exports = Celebrity;
