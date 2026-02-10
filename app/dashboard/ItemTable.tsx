import { auth } from "@/auth";
import { fetchItems } from "@/db";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import { redirect } from "next/navigation";

export default async function ItemTable() {
    const user = await auth();
    if (!user || !user.user || !user.user.email) redirect("/login");

    const items = await fetchItems(user.user.email);

    return (
        <div className="w-full">
            <table className="w-full border-1 border-gray-500 text-center">
                <thead className="border-b-1 border-gray-500">
                    <tr>
                        <th className="p-4 min-w4-[150px]">Name</th>
                        <th className="p-4 min-w4-[250px]">
                            Amount of Ingredients
                        </th>
                        <th className="p-2">Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const d = new Date(item.created_at);
                        const year = d.getFullYear();
                        const month = d.getMonth() + 1;
                        const day = d.getDate() + 1;
                        const string = `${year}/${month}/${day}`;

                        return (
                            <tr key={item.uuid}>
                                <td className="p-2">{item.name}</td>
                                <td className="p-2">{item.quantity}</td>
                                <td className="p-2">{string}</td>
                                {/* <td className="p-2">
                                    <EditBtn uuid={item.uuid} />
                                </td> */}
                                <td className="p-2">
                                    <DeleteBtn uuid={item.uuid} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
