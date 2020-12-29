import "@babel/polyfill";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import userRouter from "./routers/userRouter.js";
import planRouter from "./routers/planRouter.js";
import calendarRouter from "./routers/calendarRouter.js";
import guestRouter from "./routers/guestRouter.js";
import routes from "./routes.js";
import { localsMiddleware } from "./middlewares.js";
import path from "path";

import "./passport.js";

const app = express();
const __dirname = path.resolve();
const CookieStore = MongoStore(session);

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));
app.use("/static", express.static("src/static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
	session({
		secret: process.env.COOKIE_SECRET,
		resave: true,
		saveUninitialized: false,
		store: new CookieStore({ mongooseConnection: mongoose.connection }),
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);

app.use(routes.home, userRouter);
app.use(routes.users, userRouter);
app.use(routes.plans, planRouter);
app.use(routes.calendar, calendarRouter);
app.use("/guest", guestRouter);

export default app;
