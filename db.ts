import { redirect } from "next/navigation";
import postgres from "postgres";
const db = postgres(process.env.POSTGRES_URL!, { ssl: require });

export async function fetchItems(email: string | undefined | null) {
    if (!email) {
        redirect("/login");
    }

    const items =
        await db`SELECT uuid, name, quantity, user, created_at FROM items WHERE "user" = ${email}`;
    return items;
}

export async function addItem(
    name: string,
    quantity: string,
    email: string | undefined | null
) {
    if (!email) {
        return [];
    }
    const result =
        await db`INSERT INTO items (name, quantity, "user") VALUES (${name.toLowerCase()}, ${
            parseInt(quantity) || 1
        }, ${email})`;
    return result;
}

export async function alterItem(uuid: string, name: string, quantity: string) {
    await db`
        UPDATE items
        SET name = ${name.toLowerCase()}, quantity = ${parseInt(quantity) || 1}
        WHERE uuid = ${uuid}
    `;
}

export async function deleteItem(uuid: string) {
    const result = await db`DELETE FROM items WHERE uuid = ${uuid}`;
    return result;
}
