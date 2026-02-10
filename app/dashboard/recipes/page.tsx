"use client";

import { useActionState } from "react";
import { addStuff, findRecipes } from "../../utils";

type Item = { name: string; quantity: string };

// Ensure the state type is string | null because your action returns a JSON string
// and you JSON.parse it on the client.
export default function Page() {
  // explicitly type the state so TS knows what the action signature should be
  const [state, formAction] = useActionState<string | null>(findRecipes, null);

  const parsedState: Item[] = state ? (JSON.parse(state) as Item[]) : [];

  return (
    <div className="flex m-4 flex-col gap-4 border-1 border-gray-300 p-12">
      <form className="flex gap-2" action={formAction}>
        <input
          placeholder="Recipe"
          name="recipe"
          className="p-2 border-1 border-gray-300 outline-0"
          required
        />
        <button className="p-2 border-1 bg-white border-gray-300 hover:bg-gray-200 duration-200">
          Find Ingredients
        </button>
      </form>

      {state && (
        <table className="border-1 border-gray-300">
          <thead>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {parsedState.map((item) => (
              <tr key={item.name}>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Add All Button — client-side handler */}
      <div>
        <button
          type="button"
          onClick={() => {
            // this runs on the client — if addStuff is server-only, use a server action instead
            addStuff(parsedState);
          }}
          className="p-2 border border-gray-300 rounded md hover:shadow-md"
        >
          Add All
        </button>
      </div>
    </div>
  );
}
