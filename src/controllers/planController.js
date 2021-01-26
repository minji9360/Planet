import routes from "../routes.js";
import User from "../models/User.js";
import Plan from "../models/Plan.js";
import Sentence from "../models/Sentence.js";
import Feedback from "../models/Feedback.js";
import thisWeek from "../week.js";

export const plans = async (req, res) => {
	try {
		const user = await User.findById(req.user._id)
			.populate({ path: "plans", populate: { path: "feedback" } })
			.populate("sentence");
		if (user.id !== req.user.id) {
			throw Error();
		} else {
			res.render("plans", { pageTitle: "Plans", user, thisWeek });
		}
	} catch (error) {
		console.log(error);
		res.render("plans", { pageTitle: "Plans", user: [], thisWeek });
	}
};

export const postUploadPlan = async (req, res) => {
	const {
		body: { title, content, category, important, time, year, month, date, day },
	} = req;
	const newPlan = await Plan.create({
		title,
		content,
		category,
		important,
		time,
		year,
		month,
		date,
		day,
	});
	req.user.plans.push(newPlan.id);
	req.user.save();
	res.redirect(routes.plans);
};

export const postUploadSentence = async (req, res) => {
	const {
		body: { content, category, daily, year, month, date },
	} = req;
	const newSentence = await Sentence.create({
		content,
		category,
		daily,
		year,
		month,
		date,
	});
	req.user.sentence.push(newSentence.id);
	req.user.save();
	res.redirect(routes.plans);
};

export const postUploadFeedback = async (req, res) => {
	const {
		body: { id, title, content, rating },
	} = req;
	try {
		const plan = await Plan.findById(id);
		const newFeedback = await Feedback.create({
			title,
			content,
			rating,
			plan: plan.id,
		});
		plan.feedback = newFeedback.id;
		plan.save();
		res.redirect(routes.plans);
	} catch (error) {
		console.log(error);
		res.status(400);
	} finally {
		res.end();
	}
};

export const deletePlan = async (req, res) => {
	const {
		params: { id },
	} = req;
	try {
		await Feedback.findOneAndRemove({ plan: id });
		await Plan.findOneAndRemove({ _id: id });
	} catch (error) {
		console.log(error);
	}
	res.redirect(routes.plans);
};

export const deleteFeedback = async (req, res) => {
	const {
		body: { id },
	} = req;
	try {
		await Feedback.findOneAndRemove({ plan: id });
	} catch (error) {
		console.log(error);
	}
	res.redirect(routes.plans);
};

export const postEditPlan = async (req, res) => {
	const {
		body: { id, title, content, important },
	} = req;
	try {
		await Plan.findOneAndUpdate({ _id: id }, { title, content, important });
	} catch (error) {
		console.log(error);
	}
	res.redirect(routes.plans);
};

export const postEditSentence = async (req, res) => {
	const {
		body: { id, content },
	} = req;
	try {
		await Sentence.findOneAndUpdate({ _id: id }, { content });
	} catch (error) {
		console.log(error);
	}
	res.redirect(routes.plans);
};

export const checkPlan = async (req, res) => {
	const {
		params: { id },
		body: { completed },
	} = req;
	try {
		await Plan.findOneAndUpdate(
			{ _id: id },
			{ completed: completed == "true" ? "false" : "true" }
		);
	} catch (error) {
		console.log(error);
	}
	res.redirect(routes.plans);
};
