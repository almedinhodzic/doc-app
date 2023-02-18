/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, getUserByEmail } from "../services/user.service";
import { Login as LoginType } from "../types/Login";
import { UserCreate as UserCreateType } from "../types/UserCreate";

export const registerUser = async (req: Request, res: Response) => {
  // Destructure email and password from body
  const {
    email,
    password,
    firstName,
    lastName,
    licence,
    dateOfBirth,
    medicalSpecialty,
    gender,
    university,
    yearOfGraduation,
  }: UserCreateType = req.body;

  try {
    let user = await getUserByEmail(email);

    if (user) {
      return res
        .status(400)
        .json({ msg: "User with this email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    user = await createUser({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      licence,
      dateOfBirth,
      medicalSpecialty,
      gender,
      university,
      yearOfGraduation,
    });

    if (!user) {
      return res
        .status(400)
        .json({ msg: "Could not create user, please try again later!!" });
    }

    // Return JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET!,
      { expiresIn: "1 hour" },
      (err: Error | null, token: string | undefined) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
    );
  } catch (error) {
    res.status(500).send("Server error!");
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password }: LoginType = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    // Return JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET!,
      { expiresIn: "1 hour" },
      (err: Error | null, token: string | undefined) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    res.status(500).send("Server error!");
  }
};
