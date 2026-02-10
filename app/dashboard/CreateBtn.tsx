import Link from "next/link";
import { addItems } from "../utils";

export default function ActionButtons() {
    return (
        <div className="flex gap-4">
            {/* Create Button */}
            <Link href="/dashboard/create">
                <button className="p-2 border border-gray-300 rounded-md hover:shadow-md bg-white hover:bg-amber-100 flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    Create
                </button>
            </Link>
        </div>
    );
}
