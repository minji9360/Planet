import routes from "../routes.js";

export const postJoin = (req, res) => {
    const {
        body: { id, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
    } else {
        // To do : Register User
        // To do : Log user in
    }
    res.render("home", { pageTitle: "Join" });
};
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "User" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "change Password" });
