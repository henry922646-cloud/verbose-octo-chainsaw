import { Suspense } from "react";
import ItemTable from "./ItemTable";
import CreateBtn from "./CreateBtn";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 justify-center items-start m-4">
            <Suspense fallback={<div>Loading</div>}>
                <CreateBtn />
                <ItemTable />
            </Suspense>
        </div>
    );
}
