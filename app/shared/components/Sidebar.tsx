import Link from "next/link";

function Sidebar() {
    return (
        <aside className="w-48 border-r border-slate-300">
            <nav>
                <div className="sidebar-title text-2xl font-semibold p-3">Management</div>
                <ul>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white" href="/manager/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white" href="/manager/amenities">Amenities</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white" href="/manager/rooms">Rooms</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;