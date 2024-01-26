import { prisma } from "@/utils/prisma";
import React from "react";

const page = () => {
  async function addUser(e) {
    "use server";
    const { name, email, age } = Object.fromEntries(e);
    const res = await prisma.user.create({
      data: { email, name, age: parseInt(age) },
    });
    console.log(res);
  }
  return (
    <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md my-10">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <form className="space-y-4" action={addUser} name="form">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border bg-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            className="w-full border bg-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full border bg-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
