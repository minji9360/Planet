import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
	id: String,
	email: String,
	plans: [
		// 작성한 계획
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Plan",
		},
	],
	sentence: [
		{
			// 명언, 오늘의 목표 등
			type: mongoose.Schema.Types.ObjectId,
			ref: "Sentence",
		},
	],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "id" });

const model = mongoose.model("User", UserSchema);

export default model;
