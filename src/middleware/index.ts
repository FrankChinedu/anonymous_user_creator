import { Request, Response, NextFunction } from "express";

export const getIp = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.userIp = String(
    req.headers["x-forwarded-for"] || req.connection.remoteAddress
  );

  next();
};
