"use client";
import Image from "next/image";
import Link from "next/link";
import { formLogout } from "../utils";

export default function Header() {
    return (
        <header className="bg-white shadow-md px-6 flex items-center justify-between w-full">
            <div className="flex items-center">
                <Link href="/dashboard" className="flex items-center">
                    <Image
                        src="/favicon.png"
                        alt="Shift Grocery logo"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                    <h1 className="text-2xl font-bold text-black ml-3">
                        Shift Grocery
                    </h1>
                </Link>
            </div>

            <nav className="flex gap-6">
                <Link
                    href="/dashboard/recipes"
                    className="text-lg text-gray-700 hover:text-blue-600 font-medium"
                >
                    Recipe Finder
                </Link>
                <Link
                    href="/dashboard/about"
                    className="text-lg text-gray-700 hover:text-blue-600 font-medium"
                >
                    About
                </Link>
                <form action={formLogout}>
                    <button
                        onClick={formLogout}
                        className="text-lg text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Logout
                    </button>
                </form>
            </nav>
        </header>
    );
}
