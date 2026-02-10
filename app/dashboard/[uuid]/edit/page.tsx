import { getItem } from "@/app/utils";
import Form from "./Form";

export default async function Page({
    params,
}: {
    params: Promise<{ uuid: string }>;
}) {
    const item = await getItem((await params).uuid);
    if (!(item && item.name && item.uuid)) {
        return (
            <div className="p-4 text-red-600">
                Item not found or invalid UUID.
            </div>
        );
    }

    const itemData = {
        name: item.name,
        quantity: item.quantity,
        uuid: item.uuid,
    };
    return <Form data={itemData} />;
}
