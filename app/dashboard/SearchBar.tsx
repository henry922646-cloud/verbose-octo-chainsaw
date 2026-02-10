export default function SearchBar(props: {
    default: string;
    handleSearch: (arg0: string) => void;
}) {
    return (
        <div className="flex gap-3 w-full">
            <input
                className="px-3 py-2 outline-none border-1 rounded-full text-sm border-gray-400 grow"
                defaultValue={props.default}
            />
            <button className="px-3 py-2 border-1 border-gray-400 rounded-full text-sm duration-200 hover:bg-blue-200">
                Search
            </button>
        </div>
    );
}
