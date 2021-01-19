import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
	createdAt: {
		// 생성된 날짜
		type: Date,
		default: Date.now,
	},
	plan: {
		// 어떤 계획에 대한 피드백인지
		type: mongoose.Schema.Types.ObjectId,
		ref: "Plan",
	},
	content: String,
	// 피드백 내용
	rating: {
		// 별점
		type: Number,
		default: 0,
	},
});

const model = mongoose.model("Feedback", FeedbackSchema);
export default model;
