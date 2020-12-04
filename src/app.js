import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import planRouter from "./routers/planRouter.js";
import calendarRouter from "./routers/calendarRouter.js";
import routes from "./routes.js";
import { localsMiddleware } from "./middlewares.js";
import path from "path";
const app = express();
const __dirname = path.resolve();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.plans, planRouter);
app.use(routes.calendar, calendarRouter);

export default app;
