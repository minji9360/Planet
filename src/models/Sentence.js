import mongoose from "mongoose";

const SentenceSchema = new mongoose.Schema({
	content: {
		type: String,
		required: "Content is required",
	},
	category: {
		// 일상, 공부 나누는 용도
		type: String,
		default: "일상",
	},
	daily: Boolean,
	// 원하는 날짜의 title에 들어갈 내용인지(true)
	// 페이지 상단에 들어갈 내용인지(false)
	year: String,
	month: String,
	date: String,
});

const model = mongoose.model("Sentence", SentenceSchema);
export default model;
