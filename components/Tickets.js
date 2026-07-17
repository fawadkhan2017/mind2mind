function Tickets() {
    return (
        <section 
            className="w-full py-20 relative bg-[#eef3f8]" 
            style={{ 
                backgroundImage: "url('assets/img/tickets-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            data-name="Tickets"
            data-file="components/Tickets.js"
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
                
                <h3 className="text-[#2f4c6e] text-sm font-normal tracking-[0.15em] uppercase mb-4">
                    TICKETS
                </h3>
                <h2 className="text-[#151e2e] text-3xl md:text-4xl font-normal tracking-[0.1em] uppercase mb-16 text-center">
                    SELECT TICKETS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16 items-stretch">
                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                        <div className="bg-[#c29f64] text-black py-5 px-2 text-center flex items-center justify-center min-h-[64px]">
                            <h4 className="text-[11px] lg:text-[12px] xl:text-sm font-semibold tracking-wide whitespace-nowrap">
                                VIP Experience <span className="text-white mx-1">|</span> $600 <span className="text-white mx-1">|</span> Only 20 Seats
                            </h4>
                        </div>
                        <div className="p-8 text-gray-700 text-sm leading-[2.2] flex-grow flex">
                            <p className="font-semibold">
                                Private 30 minute post-show meet & greet and exclusive performance with Mind2Mind. Plus front-section reserved seating and a TreePeople gift. Gourmet, picnic-style dinner, reserved priority valet parking, and live music included. The best seat, and story, in the house.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                        <div className="bg-[#c29f64] text-black py-5 px-2 text-center flex items-center justify-center min-h-[64px]">
                            <h4 className="text-[11px] lg:text-[12px] xl:text-sm font-semibold tracking-wide whitespace-nowrap">
                                Premier Reserved <span className="text-white mx-1">|</span> $400 <span className="text-white mx-1">|</span> 40 Seats
                            </h4>
                        </div>
                        <div className="p-8 text-gray-700 text-sm leading-[2.2] flex-grow flex">
                            <p className="font-semibold">
                                Reserved seating in the premier section directly behind VIP and a TreePeople gift. Gourmet, picnic-style dinner, reserved priority valet parking, and live music included. Prime sightlines for every reveal.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                        <div className="bg-[#c29f64] text-black py-5 px-2 text-center flex items-center justify-center min-h-[64px]">
                            <h4 className="text-[11px] lg:text-[12px] xl:text-sm font-semibold tracking-wide whitespace-nowrap">
                                General Admission <span className="text-white mx-1">|</span> $250
                            </h4>
                        </div>
                        <div className="p-8 text-gray-700 text-sm leading-[2.2] flex-grow flex">
                            <p className="font-semibold">
                                Open amphitheater seating under the stars, plus gourmet, picnic-style dinner & live music. Valet parking is included for the evening. Immerse yourself in the magic.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl text-center mb-12">
                    <p className="text-[#151e2e] text-sm leading-relaxed font-semibold">
                        This event is sponsored by the Schuman Family Foundation, allowing 100% of ticket sales and event proceeds to directly support TreePeople's mission to grow a greener, more climate-resilient Southern California.
                    </p>
                </div>

                <button className="bg-[#bc9353] text-black rounded-[14px] px-12 py-4 text-[15px] font-semibold tracking-[0.15em] uppercase hover:bg-opacity-90 transition-all duration-300 shadow-md">
                    RESERVE TICKETS NOW
                </button>
            </div>
        </section>
    );
}