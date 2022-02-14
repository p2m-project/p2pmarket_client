import React, { useState } from "react";
import NavBar from "../../../components/shared/NavBar";

export default function AddProductScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const canSave = [name, description].every(Boolean);

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
                  placeholder="Product Name"
                  className="input input-info input-bordered"
                  value={name}
                  onChange={onNameChange}
                />
              </div>

              <div className="form-control pt-1">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea h-24 textarea-bordered"
                  placeholder="Product Description"
                  value={description}
                  onChange={onDescriptionChange}
                ></textarea>
              </div>

              <div className="pt-3">
                <button
                  className="btn btn-primary disabled:bg-base-100"
                  disabled={!canSave}
                >
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
