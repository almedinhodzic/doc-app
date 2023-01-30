import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, getUserByEmail } from "../services/auth.service";

type EmailPw = { email: string; password: string };

export const registerUser = async (req: Request, res: Response) => {
  // Destructure email and password from body
  const { email, password }: EmailPw = req.body;

  try {
    let user = await getUserByEmail(email);

    if (user) {
      return res
        .status(400)
        .json({ msg: "User with this email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);

    let hashedPassword = await bcrypt.hash(password, salt);

    user = await createUser(email, hashedPassword);

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
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).send("Server error!");
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password }: EmailPw = req.body;

  try {
    let user = await getUserByEmail(email);
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
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).send("Server error!");
  }
};
