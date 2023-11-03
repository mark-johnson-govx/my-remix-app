import { Link, Outlet } from "@remix-run/react";
import React from "react";

function Sales() {
  return (
    <div>
      <h2 className="text-3xl font-black">Sales</h2>

      <div className="flex mt-6 mb-4 pb-4 border-b border-gray-200">
        <div className="flex-1">
          <Link to="/sales" className="text-lg font-medium text-gray-600">
            Overview
          </Link>
        </div>
        <div className="flex-1">
          <a href="#" className="text-lg font-medium text-gray-600">
            Subscriptions
          </a>
        </div>
        <div className="flex-1">
          <Link
            to={"/sales/invoices"}
            className="text-lg font-medium text-gray-600"
          >
            Invoices
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Sales;
