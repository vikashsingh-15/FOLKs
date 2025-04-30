import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  iss: {
    type: String,
  },
  azp: {
    type: String,
  },
  aud: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
  },
  email_verified: {
    type: Boolean,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  given_name: {
    type: String,
  },
  family_name: {
    type: String,
  },
  picture: {
    type: String,
  },
  iat: {
    type: Number,
  },
  exp: {
    type: Number,
  },
  jti: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
