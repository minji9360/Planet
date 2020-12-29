import thisWeek from "../week.js";

export const guestPlans = async (req, res) =>
	res.render("guestPlans", { pageTitle: "Plans", thisWeek });
