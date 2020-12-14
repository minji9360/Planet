import routes from "../routes.js";
import User from "../models/User.js";
import Plan from "../models/Plan.js";

export const plans = (req, res) => res.render("plans", { pageTitle: "Plans" });

export const postUpload = async (req, res) => {
    const {
        body: { title, content, completed, category }
    } = req;
    const newPlan = await Plan.create({
        title,
        content,
        completed,
        creator: req.user.id
    });
    req.user.plans.push(newPlan.id);
    req.user.save();
    res.redirect(routes.plans);
}
