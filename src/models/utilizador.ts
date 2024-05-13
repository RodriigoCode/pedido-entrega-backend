import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
  },
  endereco: {
    type: String,
  },
  cidade: {
    type: String,
  },
  pais: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;