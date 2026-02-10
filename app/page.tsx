export default function Page() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <a
                href="/login"
                className="m-auto p-12 rounded-full shadow-2xl shadow-gray-300 flex gap-2 bg-blue-400 hover:bg-blue-500 hover:p-16 duration-200"
            >
                <p>Log In</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                </svg>
            </a>
        </div>
    );
}
