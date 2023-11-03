import { Outlet } from "@remix-run/react";
import React from "react";

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-black">Home</h2>
      <Outlet />
    </div>
  );
}

export default Home;
