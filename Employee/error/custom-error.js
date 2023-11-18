
// creating an custom-error module
class CustomAPIError extends Error {
    constructor(message) {
      super(message)
    }
  }

export default CustomAPIError