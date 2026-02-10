"use server";

import { addItem, alterItem, deleteItem, fetchItems } from "@/db";
import { queryRecipe } from "@/ai";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function getItems() {
    const user = await auth();
    if (!user || !user.user || !user.user.email) redirect("/login");
    const result = await fetchItems(user.user.email);
    return result;
}

export async function getItem(uuid: string) {
    if (!uuid) return null;
    const items = await getItems();
    const result = items.find((item) => item.uuid === uuid);
    return result || null;
}

export async function addStuff(
    ingredients: { name: string; quantity: string }[]
) {
    const user = await auth();
    if (!user || !user.user || !user.user.email) redirect("/login");
    ingredients.forEach((ingredient) => {
        addItem(ingredient.name, ingredient.quantity, user.user!.email);
    });
}

export async function createItem(
    _prevState: string | null,
    formData: FormData
) {
    const name = formData.get("name")?.toString() || "";
    const quantity = formData.get("quantity")?.toString() || "";
    const user = await auth();
    if (!user || !user.user || !user.user.email) redirect("/login");

    await addItem(name, quantity, user.user.email);
    redirect("/dashboard");
    return "";
}

export async function addItems(
    state: {
        name: string;
        quantity: string;
    }[]
) {
    const user = await auth();
    if (!user || !user.user || !user.user.email) redirect("/login");

    state.forEach(async (item) => {
        await addItem(item.name, item.quantity, user.user!.email);
    });
}

export async function editItem(_prevState: string | null, formData: FormData) {
    const uuid = formData.get("uuid");
    console.log("aisogjioasdjgio: " + JSON.stringify(uuid));
    const name = formData.get("name")?.toString() || "";
    const quantity = formData.get("quantity")?.toString() || "";
    if (!uuid) console.log("iasdgasiojgioads");
    await alterItem(uuid!.toString(), name, quantity);
    redirect("/dashboard");
    return "";
}

export async function delItem(uuid: string) {
    await deleteItem(uuid);
    redirect("/dashboard");
}

export async function findRecipes(
    _prevState: string | null,
    formData: FormData
) {
    const recipe = formData.get("recipe")?.toString() || "";
    const aiResponse = (await queryRecipe(recipe)) || [];
    return aiResponse;
}

export async function formLogout() {
    await signOut({ redirectTo: "/login" });
}
