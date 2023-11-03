import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import Layout from "./Layout";

export const loader = async () => {
  return json({
    user: {
      name: "John Doe",
      email: "jdoe@gmail.com",
      phone: "555-555-5555",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      created: "2021-01-01",
      updated: "2021-01-01",
      active: true,
    },
  });
};
export default function App() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
