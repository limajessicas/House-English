var createError = require("http-errors");
var express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var methodOverride = require("method-override");
var logger = require("morgan");
var session = require("express-session");
var auth = require("./middlewares/auth");
var cookieLogin = require("./middlewares/cookieLogin");

/* rotas declaracao das pastas src routers*/
var homeRouter = require("./src/routes/home");
var usersRouter = require("./src/routes/users");
var cadastroRouter = require("./src/routes/cadastro");
var loginRouter = require("./src/routes/login");
var lojaRouter = require("./src/routes/loja");
var perfilRouter = require("./src/routes/perfil");
var carrinhoRouter = require("./src/routes/carrinho");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: `houseEnglish`,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
//* Esta pasta (public) era indicar que é publica e voce consegue acessar de qualquer lugar(ejs).//
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(cookieLogin);

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.use("/loja", auth, lojaRouter);
app.use("/perfil", perfilRouter);
app.use("/carrinho", carrinhoRouter);

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
