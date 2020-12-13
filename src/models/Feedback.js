import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    createdAt: {
        // 생성된 날짜
        type: Date,
        default: Date.now
    },
    content: {
        // 피드백 내용
        type: String,
        required: true
    },
    plan: {
        // 어떤 계획에 대한 피드백인지
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"
    }
})

const model = mongoose.model("Feedback", FeedbackSchema);
export default model;
