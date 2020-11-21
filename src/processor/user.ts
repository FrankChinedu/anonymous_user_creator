import { Error as MongooseError } from "mongoose";

import { IResponse } from "../Interfaces";
import { User as UserModel } from "../database/model";
import { getRandomName } from "../helpers";
import { UserDoc } from "../database/model/user";

export const User = {
  index: async (userIp: string): Promise<IResponse> => {
    try {
      const user = await UserModel.findOne({
        ip: userIp,
      });
      let _user: UserDoc;
      let data = {};

      if (!user) {
        const randomUserName = getRandomName();

        const user = await UserModel.create({
          ip: userIp,
          username: randomUserName,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }).catch((err: MongooseError) => {
          throw MongooseError;
        });
        data = {
          message: `Welcome ${user.username} to our awesome app 😊`,
        };

        _user = user as UserDoc;
      } else {
        data = {
          message: `Welcome, Back ${user.username} 😊`,
        };
        _user = user;
      }
      data = {
        ...data,
        _id: _user._id,
        ip: _user.ip,
        username: _user.username,
      };

      return {
        status: 200,
        success: true,
        data,
      };
    } catch (error) {
      return {
        status: 500,
        success: false,
        data: {
          error: "An Error must have occured",
        },
      };
    }
  },
};
