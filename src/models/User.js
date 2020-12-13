import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    email: String,
    plans: [
        // 작성한 계획
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Plan"
        }
    ],
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "id"});

const model = mongoose.model("User", UserSchema);

export default model;