import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";

export default function TeamForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/score", { state: data }); 
  };

  return (
    <>
      <Heading />
      <div className="fixed w-full h-screen bg-gray-400 p-3">
                <div className="max-w-md mx-auto p-6 bg-gray-200 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-2 gap-3">
            {/* Team 1 */}
            <div>
              <label htmlFor="team1name" className="block text-lg font-medium text-gray-700">
                TEAM 1:
              </label>
              <input
                type="text"
                id="team1name"
                {...register("team1name", { required: "Team 1 name is required" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Team Name"
              />
              {errors.team1name && <p className="text-red-500 text-sm">{errors.team1name.message}</p>}
            </div>

            {/* Team 2 */}
            <div>
              <label htmlFor="team2name" className="block text-lg font-medium text-gray-700">
                TEAM 2:
              </label>
              <input
                type="text"
                id="team2name"
                {...register("team2name", { required: "Team 2 name is required" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Team Name"
              />
              {errors.team2name && <p className="text-red-500 text-sm">{errors.team2name.message}</p>}
            </div>

            {/* Toss */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Toss:</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="team1"
                    {...register("toss", { required: "Toss selection is required" })}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">TEAM 1</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="team2"
                    {...register("toss", { required: "Toss selection is required" })}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">TEAM 2</span>
                </label>
              </div>
              {errors.toss && <p className="text-red-500 text-sm">{errors.toss.message}</p>}
            </div>

            {/* Bat/Bowl */}
            <div>
            <label className="block text-lg font-medium text-gray-700">Choose:</label>

              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bat"
                    {...register("batbowl", { required: "Please select Bat or Bowl" })}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">BAT</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bowl"
                    {...register("batbowl", { required: "Please select Bat or Bowl" })}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">BOWL</span>
                </label>
              </div>
              {errors.batbowl && <p className="text-red-500 text-sm">{errors.batbowl.message}</p>}
            </div>

            {/* Overs */}
            <div>
              <label htmlFor="overs" className="block text-lg font-medium text-gray-700">
                Overs:
              </label>
              <input
                type="number"
                id="overs"
                {...register("overs", {
                  required: "Overs are required",
                  min: { value: 1, message: "Overs must be at least 1" },
                  max: { value: 50, message: "Overs cannot exceed 50" },
                })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter number of overs"
              />
              {errors.overs && <p className="text-red-500 text-sm">{errors.overs.message}</p>}
            </div>

            {/* Location (New Field) */}
            <div>
              <label htmlFor="location" className="block text-lg font-medium text-gray-700">
                Location:
              </label>
              <input
                type="text"
                id="location"
                {...register("location", { required: "Location is required" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter match location"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center col-span-2">
                <button
                  type="submit"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  START MATCH
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
