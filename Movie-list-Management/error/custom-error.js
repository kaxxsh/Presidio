// creating an custom-error module
class customErrorAPi extends Error {
  constructor(message) {
    super(message);
  }
}

export default customErrorAPi;
