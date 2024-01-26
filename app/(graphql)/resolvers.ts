import { prisma } from "@/utils/prisma";

export const resolvers = {
  Query: {
    user: async (_: any, { id }: any) => {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return user ? user : null;
    },
    users: async () => {
      return await prisma.user.findMany();
    },
  },
};
