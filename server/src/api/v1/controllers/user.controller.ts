import { Request, Response } from "express";
import { UserResponse } from "../schemas/UserResponse";
import {
  getAllUsers,
  getUserById,
  modifyUser,
  removeUser,
} from "../services/user.service";

export const getUser = async (req: Request, res: Response) => {
  const id: string = req.params.userId;
  console.log(id);
  try {
    const user = await getUserById(id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found!" });
    }

    res.status(200).json({
      success: true,
      data: new UserResponse(
        user.id,
        user.email,
        user.firstName,
        user.lastName,
        user.licence,
        user.medicalSpecialty,
        user.yearOfGraduation,
        user.dateOfBirth,
        user.university,
        user.gender
      ),
    });
  } catch ({ message }) {
    res.status(500).json({ success: false, msg: message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch ({ message }) {
    res.status(500).json({ success: false, msg: message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    // Check if user exists
    const id = req.params.id;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found and can not be deleted!",
      });
    }

    await removeUser(user.id);
    return res.status(204);
  } catch ({ message }) {
    res.status(500).json({ success: false, msg: message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { id, firstName, lastName } = req.body;

  try {
    if (userId !== id) {
      return res
        .status(400)
        .json({ success: false, msg: "User can not be updated!" });
    }

    let user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found!" });
    }

    user = await modifyUser({ id, firstName, lastName });
    return res
      .status(200)
      .json({ success: true, msg: "User updated successfully!", data: user });
  } catch ({ message }) {
    return res.status(500).json({ success: false, msg: message });
  }
};
