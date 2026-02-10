"use client";

import { useActionState } from "react";
import { createItem } from "../../utils";

export default function Form() {
    const [, formAction] = useActionState(createItem, null);
    return (
        <form
            action={formAction}
            className="flex flex-col gap-3 border-1 border-black p-4 m-4"
        >
            <h1 className="text-2xl font-bold">Add Item</h1>
            <div className="flex gap-3">
                <label htmlFor="name" className="p-2">
                    Name
                </label>
                <input
                    name="name"
                    placeholder="Name"
                    className="outline-0 p-2 border-1 border-gray-300"
                    required
                />
            </div>

            <div className="flex gap-3">
                <label htmlFor="quantity" className="p-2">
                    Quantity
                </label>
                <input
                    name="quantity"
                    placeholder="Quantity"
                    className="outline-0 p-2 border-1 border-gray-300"
                />
            </div>

            <button className="mr-auto p-2 border-1 border-gray-300">
                Add Item
            </button>
        </form>
    );
}
