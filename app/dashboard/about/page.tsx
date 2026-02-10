export default function Page() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                <a href="/dashboard">About Shift Grocery</a>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
                <strong>Shift Grocery</strong> is a personal kitchen assistant
                that can help you with grocery shopping. Type anything you would
                want to eat and we will give you an accurate grocery list in the
                matter of seconds.
            </p>
            <p className="text-lg leading-relaxed">
                We want to prevent food waste and help you spend less of your
                time. Shift Grocery also supports efficiency whether you want to
                try something new or want to host a special event.
            </p>
        </section>
    );
}
