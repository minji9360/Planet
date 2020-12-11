import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    email: String,
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "id"});

const model = mongoose.model("User", UserSchema);

export default model;