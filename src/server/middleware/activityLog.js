export default (req, res, next) => {
  console.log({
    requestPath: req.url,
    httpVerb: req.method,
    params: req.params,
    headers: req.headers
  });
  next();
}
