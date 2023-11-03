import { defer, json } from "@remix-run/node";
import { Await, useLoaderData, useNavigation } from "@remix-run/react";
import { Suspense } from "react";

export async function loader() {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Some loaded data");
    }, 750);
  });
  return defer({
    data,
  });
}

export default function SomeData() {
  const navigation = useNavigation();
  const { data: someData } = useLoaderData<typeof loader>();

  return (
    <div>
      <h2 className="text-2xl font-black">Some Data</h2>
      <Suspense>
        <Await resolve={someData} errorElement={<>ERROR!</>}>
          {(data) => <div>{JSON.stringify(data)}</div>}
        </Await>
      </Suspense>
    </div>
  );
}
