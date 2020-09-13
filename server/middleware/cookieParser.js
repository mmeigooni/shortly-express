const parseCookies = (req, res, next) => {
  req.headers.cookies = {};
  if (req.headers.cookie) {
    var cookieArray = req.headers.cookie.split('; ');
    cookieArray.forEach((cookieString) => {
      let thisCookieArr = cookieString.split('=');
      req.cookies[thisCookieArr[0]] = thisCookieArr[1];
    });
  }
  next();
};

module.exports = parseCookies;