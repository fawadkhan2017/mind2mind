function Footer() {
    return (
        <footer className="w-full text-white" data-name="Footer" data-file="components/Footer.js">
            <div className="bg-[#1b2535] py-16 px-6 flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <p className="text-[#8ca6ca] text-sm md:text-base font-semibold tracking-wide mb-3">
                        S. Mark Taper Foundation Amphitheatre
                    </p>
                    <p className="text-white text-base md:text-lg font-semibold tracking-wide mb-3">
                        2601 Mulholland Drive, Beverly Hills CA 90210
                    </p>
                    <p className="text-white text-sm md:text-base font-semibold leading-[1.8] max-w-4xl mx-auto mb-10">
                        TreePeople's S. Mark Taper Foundation Amphitheatre is a hidden cultural gem and event space located at our Coldwater Canyon Park headquarters in the hills above Los Angeles. Please email development@treepeople.org with any ADA requirements. This venue is outdoors and down two flights of stairs.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <button className="bg-[#c29f64] text-black text-sm font-bold px-8 py-3 rounded-md tracking-widest uppercase hover:bg-opacity-90 transition shadow-md">
                            SHARE
                        </button>
                        <button className="bg-[#c29f64] text-black text-sm font-bold px-8 py-3 rounded-md tracking-widest uppercase hover:bg-opacity-90 transition shadow-md">
                            EXPLORE MORE WAYS TO GIVE
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="bg-[#0b101a] py-10 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-gray-300 text-sm flex flex-col items-center md:items-start text-center md:text-left font-normal space-y-1">
                        <p className="font-semibold text-white tracking-wide mb-2">TreePeople</p>
                        <p>12601 Mulholland Drive</p>
                        <p>Beverly Hills, CA 90210 US</p>
                        <p className="pt-3 font-normal hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
                    </div>
                    
                    <div className="flex justify-center">
                        <img 
                            src="assets/img/treepeople-logo.png" 
                            alt="TreePeople Logo" 
                            className="h-20 md:h-24 object-contain"
                            style={{ filter: "brightness(0) saturate(100%) invert(75%) sepia(21%) saturate(996%) hue-rotate(352deg) brightness(88%) contrast(85%)" }} 
                        />
                    </div>
                    
                    <div className="text-gray-300 text-sm flex flex-col items-center md:items-end text-center md:text-right font-normal space-y-1">
                        <p className="font-semibold text-white tracking-wide mb-1">Donor Support</p>
                        <a href="mailto:development@treepeople.org" className="hover:text-white transition-colors">development@treepeople.org</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}