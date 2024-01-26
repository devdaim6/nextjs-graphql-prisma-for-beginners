"use client";
import { fetchData, fetchSingleData } from "@/utils/util";
import Link from "next/link";
import { FC, useState } from "react";
type User = {
  id: number;
  email: string;
  name: string;
};

const DisplayData: FC = ({}) => {
  const [data, setData] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [showEmail, setShowEmail] = useState<boolean>(true);
  const [id, setId] = useState<number | undefined>(undefined);
  const [showId, setShowId] = useState<boolean>(true);
  const [showName, setShowName] = useState<boolean>(true);

  /**
   * The function `getUsers` is an asynchronous function that fetches data based on selected options and
   * sets the fetched data to the state.
   * @returns The function `getUsers` returns nothing.
   */
  const getUsers = async () => {
    if (!showEmail && !showId && !showName) {
      alert("Atleast Select One Option TO Query");
      return;
    }
    const { data } = await fetchData(
      showId as boolean,
      showName as boolean,
      showEmail as boolean
    );
    setData(data?.users);
  };

  /**
   * The function `getSingleUser` is an asynchronous function that retrieves a single user's data based
   * on the provided options (showId, showName, showEmail) and the user's id.
   * @returns a Promise.
   */
  const getSingleUser = async () => {
    if (!showEmail && !showId && !showName) {
      alert("Atleast Select One Option TO Query");
      return;
    }
    if (!id) {
      alert("Id is Required");
      return;
    }
    const data = await fetchSingleData(
      id as number,
      showId as boolean,
      showName as boolean,
      showEmail as boolean
    );
    if (!data?.user) {
      alert("No user Found with this Id");
      setUser({} as User);
      return;
    }
    setUser(data?.user);
  };

  const handleCheckboxChange = (checkbox: string) => {
    switch (checkbox) {
      case "email":
        setShowEmail(!showEmail);
        break;
      case "id":
        setShowId(!showId);
        break;
      case "name":
        setShowName(!showName);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="flex justify-between p-10">
        <div className="flex flex-col gap-4 ">

          {/* Checkboxes */}

          <div className="flex space-x-4 items-center mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showId}
                onChange={() => handleCheckboxChange("id")}
                className={`form-checkbox focus:ring-1 ${
                  showId ? "focus:ring-green-600" : "focus:ring-red-600"
                }`}
              />
              <span className="text-gray-700">Show ID</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showName}
                onChange={() => handleCheckboxChange("name")}
                className={`form-checkbox focus:ring-1 ${
                  showName ? "focus:ring-green-600" : "focus:ring-red-600"
                }`}
              />
              <span className="text-gray-700">Show Name</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showEmail}
                onChange={() => handleCheckboxChange("email")}
                className={`form-checkbox focus:ring-1 ${
                  showEmail ? "focus:ring-green-600" : "focus:ring-red-600"
                }`}
              />
              <span className="text-gray-700">Show Email</span>
            </label>
          </div>

          {/* Users Table */}

          <div className="mt-2">
            <table className="min-w-full border border-gray-600">
              <thead>
                <tr className="bg-gray-600">
                  {showId && (
                    <th className="py-2 px-4 border-r border-gray-500">ID</th>
                  )}
                  {showName && (
                    <th className="py-2 px-4 border-r border-gray-500">NAME</th>
                  )}
                  {showEmail && <th className="py-2 px-4">EMAIL</th>}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data?.map((user: User) => (
                    <tr key={user.id} className="border-b  border-gray-500">
                      {showId && (
                        <td className="py-2 px-4 border-r border-gray-500">
                          {user?.id ? user?.id : ""}
                        </td>
                      )}
                      {showName && (
                        <td className="py-2 px-4 border-r border-gray-500">
                          {user?.name ? user?.name : ""}
                        </td>
                      )}
                      {showEmail && (
                        <td className="py-2 px-4">
                          {user?.email ? user?.email : ""}
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={getUsers}
          >
            Get Users
          </button>
        </div>{" "}

        {/* Single User */}

        <div className="flex flex-col gap-y-6 mt-2">
          <Link
            className="w-40 text-center bg-slate-500 text-white rounded-md py-1 px-4 hover:bg-slate-700 transition duration-300"
            href="/user/add"
          >
            Add User
          </Link>
          <div className="flex gap-x-4">
            <input
              type="numeric"
              className="bg-gray-600 w-[50vw] rounded-md"
              value={id !== undefined ? id : ""}
              placeholder="ID of User"
              onChange={(e) => {
                const inputValue = parseInt(e.target.value, 10);
                setId(isNaN(inputValue) ? undefined : inputValue);
              }}
            />
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={getSingleUser}
            >
              Get User
            </button>
          </div>

          {/* Single User Data */}

          <div className="mt-4">
            <table className="min-w-full border border-gray-600">
              <thead>
                <tr className="bg-gray-600">
                  <th className="py-2 px-4 border-r border-gray-500">ID</th>
                  <th className="py-2 px-4 border-r  border-gray-500">NAME</th>
                  <th className="py-2 px-4">EMAIL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  border-gray-500">
                  <td className="py-2 px-4 border-r  border-gray-500">
                    {user?.id ? user?.id : ""}
                  </td>
                  <td className="py-2 px-4 border-r  border-gray-500">
                    {user?.name ? user?.name : ""}
                  </td>
                  <td className="py-2 px-4">
                    {user?.email ? user?.email : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayData;
