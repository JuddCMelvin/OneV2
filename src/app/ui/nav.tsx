import Link from 'next/link';
import AcmeLogo from '@/app/ui/one-logo';

export default function Nav() {
    return (
        <div className="flex w-full items-center px-3 py-4 bg-[rgb(90,193,255)] shadow-md">
            {/* Content Wrapper for Centered Max Width */}
            <div className="flex w-full max-w-5xl mx-auto items-center justify-between">
                {/* Left - Logo */}
                <Link href="/" className="flex items-center">
                    <div className="w-32">
                        <AcmeLogo />
                    </div>
                </Link>

                {/* Right - Links */}
                <div className="flex space-x-4 items-center">
                    <Link href="/signin" className="text-sm font-bold text-gray-700 hover:text-blue-600">
                        Sign In
                    </Link>
                    <Link href="/join" className="px-8 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800">
                        Join One
                    </Link>
                </div>
            </div>
        </div>
    );
}
