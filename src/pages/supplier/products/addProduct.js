import React from "react";
import NavBar from "../../../components/shared/NavBar";

export default function AddProductScreen() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="w-10/12">
          <h1 className="font-semibold text-xl mb-3 mt-4">Add Product</h1>

          <div className="card bg-base-200">
            <div className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Choose your superpower</span>
                  <span className="label-text-alt">Pick wisely</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled="" defaultValue="">
                    Choose your superpower
                  </option>
                  <option>telekinesis</option>
                  <option>time travel</option>
                  <option>invisibility</option>
                </select>
                <label className="label">
                  <span className="label-text-alt">Cant pick?</span>
                  <span className="label-text-alt">Need hint?</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
