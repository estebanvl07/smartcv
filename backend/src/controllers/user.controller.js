import * as UserServices from "../services/user.service.js";

export const getUserById = (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "Id not found" });
    }

    const response = UserServices.getUserById(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
