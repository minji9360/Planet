import routes from "../routes.js";
import User from "../models/User.js";
import Plan from "../models/Plan.js";
import Sentence from "../models/Sentence.js";
import thisWeek from "../week.js";

export const plans = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("plans").populate("sentence");
        if(user.id !== req.user.id){
            throw Error();
        } else {
            res.render("plans", { pageTitle: "Plans", user, thisWeek });
        }
    } catch(error) {
        console.log(error);
        res.render("plans", { pageTitle: "Plans", user: [], thisWeek });
    }
};

export const postUpload = async (req, res) => {
    const {
        body: { title, content, completed, category, year, month, date }
    } = req;
    const newPlan = await Plan.create({
        title,
        content,
        completed,
        category,
        year,
        month,
        date,
    });
    req.user.plans.push(newPlan.id);
    req.user.save();
    res.redirect(routes.plans);
};

export const deletePlan = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Plan.findOneAndRemove({ _id: id });
    } catch (error) {
    }
    res.redirect(routes.plans);
};

export const editPlan = async (req, res) => {
    const {
        params: { id },
        body: { title }
    } = req;
    try {
        await Plan.findOneAndUpdate({ _id: id }, { title });
        res.redirect(routes.plans);
    } catch (error) {
        res.redirect(routes.plans);
    }
};

export const checkPlan = async (req, res) => {
    const {
        params: { id },
        body: { completed }
    } = req;
    try {
        await Plan.findOneAndUpdate({ _id: id }, { completed: completed == "true" ? "false" : "true" });
        res.redirect(routes.plans);
    } catch (error) {
        res.redirect(routes.plans);
    }
};
