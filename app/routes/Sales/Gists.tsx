import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

export async function loader() {
  const res = await fetch("https://api.github.com/gists");
  await new Promise((resolve) => setTimeout(resolve, 750));
  return json(await res.json());
}

export default function Home() {
  const navigation = useNavigation();
  const gists = useLoaderData<typeof loader>();

  return (
    <div>
      <h2 className="text-5xl font-black">Gists</h2>
      <ul
        className={`ml-8 mt-8 ${
          navigation.state === "loading" ? "transition opacity-0" : ""
        }`}
      >
        {gists.map((gist: any) => (
          <li
            key={gist.id}
            className="py-2 px-4 first:border-t border-b border-gray-100"
          >
            <a
              className="text-blue-500 hover:text-blue-700 underline"
              href={gist.html_url}
            >
              {gist.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
