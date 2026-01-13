import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 py-2">
        <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full"/>
            <span className="hidden md:block ml-2 font-bold text-lg tracking-wider">TRENDLAMA</span>
        </Link>
        <div className="flex items-center gap-4">
            <SearchBar />
            <Link href="/">
                <Home className="w-4 h-4 text-gray-600"/>
            </Link>
            <Bell className="w-4 h-4 text-gray-600"/>
            <ShoppingCartIcon/>
            <Link href="/login">Sign In</Link>
        </div>

    </nav>
  )
}

export default Navbar;