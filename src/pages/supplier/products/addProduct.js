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
                  <a href="#" className="label-text-alt">
                    Pick wisely
                  </a>
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
                  <a href="#" className="label-text-alt">
                    Cant pick?
                  </a>
                  <a href="#" className="label-text-alt">
                    Need hint?
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
