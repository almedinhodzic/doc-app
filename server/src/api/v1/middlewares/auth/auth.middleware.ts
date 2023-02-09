/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith("Bearer")) {
    const token = auth.slice(7);

    try {
      const tokenData = jwt.verify(token, process.env.JWT_SECRET!);
      tokenData as { _id: string; email: string };
      req.body.tokenData = tokenData;
      next();
    } catch (error) {
      res.status(401).json({ msg: "User can not be authenticated" });
    }
  } else {
    res.status(401).json({ msg: "User can not be authenticated" });
  }
};
