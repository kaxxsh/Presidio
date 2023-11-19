import mongoose from "mongoose";

// creating an schema for the Movie
const Schema = new mongoose.Schema(
  {
    moviename: {
      type: String,
      required: true,
      unique: true,
    },
    director: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MovieSchema = mongoose.model("Movie", Schema);

export default MovieSchema;
