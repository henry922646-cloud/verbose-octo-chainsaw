"use client";

import { useActionState } from "react";
import { addStuff, findRecipes } from "../../utils";

type Item = { name: string; quantity: string };

export default function Page() {
  // Adapter so the action has the correct FormAction signature:
  // FormAction expects (formData: FormData, prevState: StateType | null)
  // while your existing findRecipes currently expects (prevState, formData).
  const action = async (formData: FormData, prevState: string | null) => {
    // call the existing util which has (prevState, formData) signature
    // adjust this call if your findRecipes has a different return type
    const result = await findRecipes(prevState, formData);
    return result;
  };

  // Explicitly type the state so TS knows the action/state shape
  // Use string | null if action returns a JSON string that you parse client-side.
  const [state, formAction] = useActionState<string | null>(action, null);

  // Parse state safely into Items
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
