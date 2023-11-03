import { Link, useNavigation } from "@remix-run/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-200 w-64 p-6">
        <nav>
          <h1 className="text-2xl font-bold mb-8">Sales Dock</h1>
          <ul>
            <li>
              <Link className="underline font-medium block my-1" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="underline font-medium block my-1" to="/sales">
                Sales
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`flex-1 m-6`}>{children}</div>
    </div>
  );
}

export default Layout;
