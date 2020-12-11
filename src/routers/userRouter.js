import express from "express";
import { 
    home, 
    postLogin, 
    postJoin, 
    logout 
} from "../controllers/userController.js";
import { 
    changePassword, 
    editProfile, 
    users 
} from "../controllers/userController.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.home, home);
userRouter.post(routes.login, postLogin);
userRouter.post(routes.join, postJoin);
userRouter.get(routes.logout, logout);
userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
