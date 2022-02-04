import React from "react";

export default function SignInScreen() {
  return (
    <div className="w-screen h-screen bg-base-300 bg-opacity-80 p-2 flex items-center justify-center">
      <div className="basis-full md:basis-7/12 lg:basis-6/12 xl:basis-4/12 2xl:basis-3/12">
        <div className="card shadow bg-base-200 w-full">
          <div className="card-body">
            <h2 className="card-title">Sign In to Antimony</h2>

            <div className="space-y-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@host.com"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  v-model="password"
                />
              </div>

              <div className="pt-3">
                <button className="btn btn-block btn-primary">Sign In</button>
              </div>

              <div className="link link-hover link-primary w-full text-center pt-3">
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
