import { Request, Response, NextFunction} from "express";

export const getIp = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {

  console.log('reqq', req);
  next();
};
