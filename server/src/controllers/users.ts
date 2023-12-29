// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
// Models
import UserModel from "../models/user";

interface userCreationBody {
  name?: string;
  emailAddress?: string;
  password?: string;
  role?: string;
}

export const createUser: RequestHandler<
  unknown,
  unknown,
  userCreationBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.emailAddress;
  const passwordRaw = req.body.password;
  const role = req.body.role;

  try {
    if (!name || !email || !passwordRaw || !role) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    const existingEmail = await UserModel.findOne({
      emailAddress: email,
    }).exec();

    if (existingEmail) {
      throw createHttpError(
        409,
        "Email already taken. Please choose a different one or log in."
      );
    }

    const passwordHashed = await bcrypt.hash(passwordRaw, 10);

    const newUser = await UserModel.create({
      name: name,
      emailAddress: email,
      password: passwordHashed,
      role: role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

/* 
! In the tutorial the session is initiated on creation, but since the user creation will
! be handled by admin, we don't want that, here's the code for it and make sure to put it in
! the /login route

? req.session.userId = newUser._id;
*/
