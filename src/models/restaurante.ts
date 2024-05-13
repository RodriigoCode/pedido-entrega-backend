import mongoose, { InferSchemaType } from "mongoose";

const menuItemSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
});

export type MenuItemType = InferSchemaType<typeof menuItemSchema>;

const restaurantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  NomeRestaurante: { type: String, required: true },
  Cidade: { type: String, required: true },
  Pais: { type: String, required: true },
  precoentrega: { type: Number, required: true },
  tempoestimado: { type: Number, required: true },
  cozinhas: [{ type: String, required: true }],
  ItemMenu: [menuItemSchema],
  imageUrl: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;