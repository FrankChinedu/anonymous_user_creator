import { Response, Request } from "express";

import { User as UserProcessor } from "../processor/user";

export const User = {
  index: async (req: Request, res: Response): Promise<Response> => {
    const userIp = req.userIp as string;
    const response = await UserProcessor.index(userIp);
    return res.status(response.status).send(response);
  },
};
