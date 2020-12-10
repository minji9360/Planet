import express from "express";
import { home } from "../controllers/planController.js";
import { postJoin, login, logout } from "../controllers/userController.js";
import { changePassword, editProfile, users } from "../controllers/userController.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.home, home);
userRouter.post(routes.home, postJoin);
userRouter.get(routes.login, login);
userRouter.get(routes.logout, logout);
userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
