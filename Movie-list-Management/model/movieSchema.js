import mongoose from "mongoose";

// creating an schema for the Movie
const Schema = new mongoose.Schema(
  {
    moviename: {
      type: String,
      require: true,
      unique: true,
    },
    director: {
      type: String,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    language: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const MovieSchema = mongoose.model("Movie", Schema);

export default MovieSchema;
