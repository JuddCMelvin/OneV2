import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 shadow-md bg-white">
            {/* Left Side - Logo */}
            <div className="flex flex-grow justify-start">
                <Link href="/" className="text-xl font-bold text-gray-800">One{/* Replace with your logo component if you have one */}
                </Link>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex space-x-4 justify-end items-center">
                <Link href="/signin" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                </Link>
                <Link href="/join" className="text-sm font-medium text-white bg-black rounded-md px-4 py-2 hover:bg-gray-800">
                </Link>
            </div>
        </div>
    );
}
