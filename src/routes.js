// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Plan
const PLANS = "/plans";
const UPLOAD_PLAN = "/upload/plan";
const UPLOAD_SENTENCE = "/upload/sentence";
const UPLOAD_FEEDBACK = "/upload/feedback";
const DELETE_PLAN = "/:id/delete";
const DELETE_FEEDBACK = "/:id/delete/feedback";
const EDIT_PLAN = "/edit";
const EDIT_SENTENCE = "/edit/sentence";
const EDIT_FEEDBACK = "/edit/feedback";
const CHECK_PLAN = "/:id/check";

// Calendar
const CALENDAR = "/calendar";
const CALENDAR_PLAN = "/plan";

// Guest
const GUEST = "/guest";

const routes = {
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	users: USERS,
	userDetail: USER_DETAIL,
	editProfile: EDIT_PROFILE,
	changePassword: CHANGE_PASSWORD,
	plans: PLANS,
	uploadPlan: UPLOAD_PLAN,
	uploadSentence: UPLOAD_SENTENCE,
	uploadFeedback: UPLOAD_FEEDBACK,
	editPlan: EDIT_PLAN,
	editSentence: EDIT_SENTENCE,
	editFeedback: EDIT_FEEDBACK,
	deleteFeedback: DELETE_FEEDBACK,
	deletePlan: (id) => {
		if (id) {
			return `/plans/${id}/delete`;
		} else {
			return DELETE_PLAN;
		}
	},
	checkPlan: (id) => {
		if (id) {
			return `/plans/${id}/check`;
		} else {
			return CHECK_PLAN;
		}
	},
	calendar: CALENDAR,
	calendarPlan: CALENDAR_PLAN,
	// calendarPlan: (yearMonthDate) => {
	// 	if (yearMonthDate) {
	// 		console.log("routes1 calendarPlan")
	// 		return `/calendar/${yearMonthDate}/plan`;
	// 	} else {
	// 		console.log("routes2 calendarPlan")
	// 		return CALENDAR_PLAN;
	// 	}
	// },
	guest: GUEST,
};

export default routes;
