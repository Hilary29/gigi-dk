"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {};

  return (
    <div className="flex  justify-center  p-4">
      <div className="flex w-full max-w-[560px] flex-col items-center rounded-lg bg-white p-6 md:p-10">
        <div className="w-full max-w-[480px] space-y-8">
          <p className=" text-2xl font-semibold leading-9 text-black-50 md:text-heading-desktop-h4">
            Reset your password
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-inter text-paragraph-lg font-medium "
                >
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 font-inter text-base focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="font-inter text-lg font-medium leading-7"
                  >
                    New Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full rounded-lg border border-[#D6D6D6] p-3 pr-12 font-inter text-base focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#989898]"
                  >
                    {showPassword ? (
                      <Eye className="h-6 w-6" />
                    ) : (
                      <EyeOff className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="font-inter text-lg font-medium leading-7"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full rounded-lg border border-[#D6D6D6] p-3 pr-12 font-inter text-base focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#989898]"
                >
                  {showConfirmPassword ? (
                    <Eye className="h-6 w-6" />
                  ) : (
                    <EyeOff className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <button
                type="submit"
                className="w-full rounded-md bg-primary-500 py-3 font-inter text-base font-medium text-white hover:bg-primary-600"
              >
                Reset Password
              </button>
            </div>
          </form>

          <p className="text-center font-inter text-paragraph-md font-medium text-[#1E1E1E]">
            Remember your password ?{" "}
            <a
              href="/signin"
              className="text-primary-300 hover:text-primary-400  hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
