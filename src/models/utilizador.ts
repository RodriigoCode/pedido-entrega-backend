import mongoose from "mongoose";

const utilizadorSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Utilizador = mongoose.model("Utilizador", utilizadorSchema);
export default Utilizador;