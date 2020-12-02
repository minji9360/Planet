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
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.plans, planRouter);
app.use(routes.calendar, calendarRouter);

export default app;