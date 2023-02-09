import { Request, Response } from "express";

export const postTreatment = async (req: Request, res: Response) => {
  const { treatment } = req.body;
  res.json({ treatment });
  // Currently only to prevent eslint errors
  // TODO: Implement create of treatment with doctor and patient checks
};
