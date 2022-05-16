function auth(req, res, next) {
  if (typeof req.session.usuario != "undefined") {
    return next();
  } else {
    return res.redirect("/login");
  }
}
/*verificar se o usuario esta logado*/
module.exports = auth;
