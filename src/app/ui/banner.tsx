import Image from 'next/image';

export default function Banner() {
    return (
        <section className="flex flex-col items-center justify-center w-full px-6 py-3 md:flex-row md:space-x-10 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center w-full md:w-2/3 space-y-6 text-center md:text-left">
                <h2 className="text-5xl md:text-5xl font-extrabold text-gray-800">
                    Join the millions of customers banking through One
                </h2>
                
                {/* Phone number input and button */}
                <div className="flex flex-col items-center md:items-start">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full md:w-3/4 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />
                    <button className="w-full md:w-3/4 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                        Send Code
                    </button>
                </div>
                
                {/* Additional information */}
                <p className="text-gray-600 text-sm">
                    Enter your number to download the app and get started.<br />
                    Messaging rates may apply.
                </p>
                
                <p className="text-gray-500 text-xs mt-4">
                    One is a financial technology company, not a bank. <br />
                    Banking services provided by Coastal Community Bank, Member FDIC.
                </p>
            </div>
            
            {/* Right side - Image */}
            <div className="relative w-1/3 md:w-full lg:w-3/4 aspect-square">
                <Image
                    src="/one_phone.png" // Replace with your actual image path
                    alt="Banking app"
                    layout="fill" // Ensures the image fills the container
                    objectFit="contain" // Maintains the aspect ratio without cropping
                    className="rounded-md"
                />
            </div>
        </section>
    );
}
