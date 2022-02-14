import React from "react";
import NavBar from "../../../components/shared/NavBar";

export default function AddProductScreen() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="w-full px-2 md:p-0 md:w-10/12">
          <h1 className="font-semibold text-xl mb-3 mt-4">Add Product</h1>

          <div className="card bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-info input-bordered"
                />
                <label className="label">
                  <span className="label-text-alt">
                    Field should not be left empty
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea h-24 textarea-bordered"
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="pt-3">
                <button className="btn btn-primary disabled:bg-base-100">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
