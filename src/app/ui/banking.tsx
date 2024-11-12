import Image from 'next/image';

export default function Banking() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-4">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center md:space-x-10 max-w-5xl">
                {/* Row 1 */}
                <div className="flex flex-col space-y-4 w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-800">One Cash</h1>
                    <h2 className="text-lg font-semibold text-gray-700">Banking for the better</h2>
                    <p className="text-gray-600">
                        Debit Rewards, early pay, high-yield Savings, and no monthly fees.
                    </p>
                    <button className="mt-4 w-32 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                        Join
                    </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <Image
                        src="/one_phone2.png" // Replace with your image path
                        alt="Banking app image"
                        width={400}
                        height={300}
                        className="rounded-md"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-4 md:space-y-0 md:space-x-10 max-w-5xl mt-8">
                <div className="flex w-full md:w-1/2 items-start space-x-4">
                    <Image
                        src="/one_icon_1.png" // Replace with your image path
                        alt="Feature image 1"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">Earn up to 5% cash back3</p>
                        <p className="text-gray-600">On select brands.</p>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 items-start space-x-4">
                    <Image
                        src="/one_icon_2.png" // Replace with your image path
                        alt="Feature image 2"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">Earn up to 5% cash back3</p>
                        <p className="text-gray-600">On select brands.</p>
                    </div>
                </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-4 md:space-y-0 md:space-x-10 max-w-5xl mt-4">
                <div className="flex w-full md:w-1/2 items-start space-x-4">
                    <Image
                        src="/one_icon_3.png" // Replace with your image path
                        alt="Feature image 3"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">Earn up to 5% cash back3</p>
                        <p className="text-gray-600">On select brands.</p>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 items-start space-x-4">
                    <Image
                        src="/one_icon_4.png" // Replace with your image path
                        alt="Feature image 4"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">Earn up to 5% cash back3</p>
                        <p className="text-gray-600">On select brands.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
