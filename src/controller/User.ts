import { Response, Request } from "express";

import { User as UserProcessor } from "../processor/user";

export const User = {
  index: async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: "Hello world" });
  },
};
