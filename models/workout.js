const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,

  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please insert the exercise type"
      },
      name: {
        type : String,
        trim: true,
        required: "Please insert the name of the exercise"
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
    

    
  ]
});

const Transaction = mongoose.model("Workout", workoutSchema);

module.exports = Transaction;
