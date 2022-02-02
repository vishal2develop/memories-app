import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  // next - do someting and move to the next thing
  try {
    //   verify if logged in user is the real user
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    // if token is present and is our own (Not GoogleAuth)
    if (token && isCustomAuth) {
      // decode token to get plain data
      decodedData = jwt.verify(token, "test");
      // From Decoded data we know which user is logged in and is doing what
      // get user id from decoded data to use it other features of app (CRUD)

      req.userId = decodedData?.id;
    } else {
      if (token && !isCustomAuth) {
        // decode google auth token - isCustomAuth = false
        decodedData = jwt.decode(token);
        // sub is equivalent to id that diiferentiates every user. It is unique
        req.userId = decodedData?.sub;
      }
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
