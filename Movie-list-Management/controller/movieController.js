import { badRequest } from "../error/index.js";
import Movie from "../model/movieSchema.js";

// Get all Movies or filter based on query parameters
// route: http://localhost:3000/api/v1
// you can filter the according to the criteria route: http://localhost:3000/api/v1?name=name
const allMovie = async (req, res, next) => {
  try {
    const data = await Movie.find(req.query);
    if (data.length === 0)
      return res.status(200).json({ message: "no data found" });
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// Add a new Movie
// route: http://localhost:3000/api/v1
const addMovie = async (req, res, next) => {
  try {
    const data = await Movie.findOne({ Moviename: req.body.Moviename });
    console.log(data);
    if (data) throw new badRequest("user already available");
    await Movie.create(req.body);
    res.status(200).json({ message: "Movie added Successfully" });
  } catch (error) {
    next(error);
  }
};

// Get a Movie by ID
// route: http://localhost:3000/api/v1/:id
const getMovie = async (req, res, next) => {
  try {
    const data = await Movie.findById(req.params.id);
    if (!data) return res.status(200).json({ message: "no data found" });
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// Update a Movie by ID
// route: http://localhost:3000/api/v1/:id
const updateMovie = async (req, res, next) => {
  try {
    const data = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) throw new badRequest("Not updated");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

// Delete a Movie by ID
// route: http://localhost:3000/api/v1/:id
const deleteMovie = async (req, res, next) => {
  try {
    const data = await Movie.findByIdAndDelete(req.params.id);
    if (!data) throw new badRequest("Not Deleted");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

export { allMovie, addMovie, getMovie, updateMovie, deleteMovie };
