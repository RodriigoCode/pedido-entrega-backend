import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("nome").isString().notEmpty().withMessage("Name must be a string"),
  body("endereco")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a string"),
  body("cidade").isString().notEmpty().withMessage("City must be a string"),
  body("pais").isString().notEmpty().withMessage("Country must be a string"),
  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("NomeRestaurante").notEmpty().withMessage("Restaurant name is required"),
  body("Cidade").notEmpty().withMessage("City is required"),
  body("Pais").notEmpty().withMessage("Country is required"),
  body("precoentrega")
    .isFloat({ min: 0 })
    .withMessage("Delivery price must be a positive number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .withMessage("Estimated delivery time must be a postivie integar"),
  body("cozinhas")
    .isArray()
    .withMessage("Cuisines must be an array")
    .not()
    .isEmpty()
    .withMessage("Cuisines array cannot be empty"),
  body("Carrinho").isArray().withMessage("Menu items must be an array"),
  body("menuItems.*.nome").notEmpty().withMessage("Menu item name is required"),
  body("menuItems.*.preco")
    .isFloat({ min: 0 })
    .withMessage("Menu item price is required and must be a postive number"),
  handleValidationErrors,
];