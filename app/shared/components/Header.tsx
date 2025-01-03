import Link from "next/link";

function Header() {
    const isAuthenticated = false;

    const onLogout = () => {
    };
    return (
        <header className="flex justify-between items-center px-4 bg-blue-500 text-white">
            <Link href="/" className="brand block text-2xl font-bold">Hotel App</Link>
            <nav>
                <ul className="nav-menu flex justify-center">
                    <li className="nav-item">
                        <Link href="/" className="nav-link block p-4 hover:bg-blue-700">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/manager/dashboard" className="nav-link block p-4 hover:bg-blue-700">Management</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className="nav-link block p-4 hover:bg-blue-700">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link block p-4 hover:bg-blue-700">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="profile-menu">
                {isAuthenticated ? (
                    <ul className="nav-menu flex justify-center">
                        <li className="nav-item">
                            <Link href="/auth/profile" className="nav-link block p-4 hover:bg-blue-700">Welcome, Admin</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={onLogout} className="nav-link block p-4 hover:bg-blue-700">Logout</button>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav-menu flex justify-center">
                        <li className="nav-item">
                            <Link href="/auth/login" className="nav-link block p-4 hover:bg-blue-700">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/auth/register" className="nav-link block p-4 hover:bg-blue-700">Register</Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    )
}

export default Header
