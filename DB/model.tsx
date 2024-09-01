import mongoose, { Schema, Types } from "mongoose";

interface IUser extends Document {
  userName: string;
  userPassward: string;
  organization: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  "userName": {
    type: String, 
    required: true
  },
  "userPassward": {
    type: String,
    required: true
  },
  organization: {
    type: Schema.Types.ObjectId
  }},
  {timestamps: true}
)
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;