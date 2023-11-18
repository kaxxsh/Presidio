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
      type: Number,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    language: {
      type: Number,
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
