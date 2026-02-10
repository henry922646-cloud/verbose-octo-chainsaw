// https://react.dev/reference/react/useActionState#useactionstate

"use client";

import { useActionState } from "react";
import { addStuff, findRecipes } from "../../utils";

export default function Page() {
    const [state, formAction] = useActionState(findRecipes, []);
    const parsedState: { name: string; quantity: string }[] =
        typeof state === "string" ? JSON.parse(state) : [];

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

            {/* List the elements */}
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

            {/* No recipe found
            {(!state || parsedState.length === 0) && (
                <div className="text-red-700">No recipe found</div>
            )} */}

            {/* Add All Button*/}
            <form
                action={() => {
                    addStuff(parsedState);
                }}
            >
                <button className="p-2 border border-gray-300 rounded md hover:shadow-md">
                    Add All
                </button>
            </form>
        </div>
    );
}
