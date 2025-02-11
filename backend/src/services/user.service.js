import { prisma } from "../config/prismaConnect.js";

export const getUserById = async (id) => {
  try {
    const userFound = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    return userFound;
  } catch (error) {
    throw error;
  }
};
