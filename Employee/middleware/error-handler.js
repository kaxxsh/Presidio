
// creating an middleware for an custom error handling
const handleError = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || 404,
    message: err.message || "Something went wrong",
  };

  res.status(customError.statusCode).json({ message: customError.message });
};

export default handleError;
