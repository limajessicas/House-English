var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* rotas declaracao das pastas src routers*/
var homeRouter = require("./src/routes/home");
var usersRouter = require("./src/routes/users");
var cadastroRouter = require("./src/routes/cadastro");
var loginRouter = require("./src/routes/login");
var lojaRouter = require("./src/routes/loja");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//* Esta pasta (public) era indicar que é publica e voce consegue acessar de qualquer lugar(ejs).//
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.use("/loja", lojaRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;