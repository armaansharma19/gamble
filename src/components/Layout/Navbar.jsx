const Navbar = () => {
    return (
        <header className="h-16 bg-[#213743] border-b border-[#2F4553] flex items-center justify-between px-6">

            {/* Left */}
            <div className="flex items-center gap-4">
                <button className="text-white text-2xl">
                    ☰
                </button>

                <h1 className="text-3xl font-bold italic tracking-wide">
                    Stake
                </h1>
            </div>

            {/* Right */}
            <div className="flex gap-3">
                <button className="px-5 py-2 rounded-lg bg-[#2F4553] hover:bg-[#3A5568] transition">
                    Login
                </button>

                <button className="px-5 py-2 rounded-lg bg-[#1475E1] hover:bg-[#1B82F1] transition">
                    Register
                </button>
            </div>

        </header>
    );
};

export default Navbar;