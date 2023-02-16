import { Request, Response } from "express";
import { UserResponse } from "../schemas/UserResponse";
import { getAllUsers, getUserById, removeUser } from "../services/user.service";

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
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server error!" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server error!" });
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
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server error!" });
  }
};
