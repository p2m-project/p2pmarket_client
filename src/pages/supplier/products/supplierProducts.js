import React from "react";
import NavBar from "../../../components/shared/NavBar";

export default function SupplierProductsScreen() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="w-full px-2 md:p-0 md:w-10/12">
          <h1 className="font-semibold text-xl mb-3 mt-4">Your Products</h1>
        </div>
      </div>
    </div>
  );
}
