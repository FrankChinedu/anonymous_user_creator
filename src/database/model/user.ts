import mongoose from "mongoose";

interface IUser {
  ip: string;
  username: string;
}

interface userModelInterface extends mongoose.Model<UserDoc> {
  build(attr: IUser): UserDoc;
}

interface UserDoc extends mongoose.Document {
  ip: string;
  username: string;
}

const userSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};

const User = mongoose.model<UserDoc, userModelInterface>("User", userSchema);

User.build({
  ip: "user ip",
  username: "username",
});

export { User };
