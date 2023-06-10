const parseCookies = (req, res, next) => {
  const currCookie = req.headers.cookie;
  console.log(`Cookies from parseCookies: ${currCookie}`);
  // JSON.parse(currCookie);
  // if !cookie

  // render login
  console.log('parseCookies');
  next();
};

module.exports = parseCookies;

//  In middleware/cookieParser.js, write a middleware function that will access the cookies on an incoming request, parse them into an object, and assign this object to a cookies property on the request