// Library Imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
// Models
import UserModel from "../models/user";

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  const authenticatedUserIdFromSession = req.session.userId;
 /*  console.log("req.session in auth user check: ", req.session);
  console.log("authenticatedUserIdFromSession: ", authenticatedUserIdFromSession) */
  try {
    if (!authenticatedUserIdFromSession) {
      throw createHttpError(401, "User not authenticated.");
    }

    /* // Retrieve the value of the cookie
    const authenticatedUserIdFromCookie = req.cookies.authenticatedUserId;

    // Ensure that the value from the cookie matches the value from the session
    if (authenticatedUserIdFromCookie !== authenticatedUserIdFromSession) {
      throw createHttpError(401, "User authentication mismatch.");
    } */

    console.log("FETCHING USER DATA FROM DB....")
    
    const user = await UserModel.findById(authenticatedUserIdFromSession)
      .select("+emailAddress")
      .exec();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

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

interface LoginBody {
  emailAddress?: string;
  password?: string;
}

export const login: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res, next) => {
  const email = req.body.emailAddress;
  const password = req.body.password;

  try {
    if (!email || !password) {
      throw createHttpError(
        400,
        "You didn't fill out all of the required fields, try again."
      );
    }

    const user = await UserModel.findOne({ emailAddress: email })
      .select("+password +emailAddress")
      .exec();

    if (!user) {
      throw createHttpError(401, "Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createHttpError(401, "Invalid credentials");
    }

    req.session.userId = user._id;

    // Set a cookie with the user's ID
    (res.cookie as any)("authenticatedUserId", user._id, {
      httpOnly: true, // This ensures that the cookie cannot be accessed by client-side scripts
      secure: true, // This requires HTTPS to send the cookie
      sameSite: "None", // This allows cross-origin requests
      path: "/", // This sets the path for which the cookie is valid
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const logout: RequestHandler = (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(200);
    }
  });
};
