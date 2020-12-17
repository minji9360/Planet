import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
    createdAt: {
        // 생성된 날짜
        type: Date,
        default: Date.now
    },
    title: {
        // 할 일 제목
        type: String,
        required: "Title is required"
    },
    content: {
        // 할 일 상세 내용
        type: String,
        required: false
    },
    description: {
        // 날짜 아래 출력되는 명언이나 그 날의 설명인지 여부
        type: Boolean,
        default: false
    },
    completed: { 
        // 진행중인지 완료인지 확인하는 용도
        type: String,
        default: false
    },
    category: { 
        // 일상, 공부 나누는 용도
        type: String,
        default: "일상"
    },
    day: String,
    // 할 일 요일
    date: String,
    // 할 일 날짜
    feedback: {
        // 할 일 종료 후 피드백 내용 > 이건 댓글로 만들 수도
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback"
    }
});

const model = mongoose.model("Plan", PlanSchema);
export default model;