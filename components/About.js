const About = () => {
    return (
        <section className="w-full py-20 bg-white relative overflow-hidden flex items-center justify-center" data-name="About" data-file="components/About.js">
            <div className="max-w-6xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img 
                        src="assets/img/performers.png" 
                        alt="Mind2Mind performers" 
                        className="w-full max-w-[450px] h-auto shadow-2xl"
                    />
                </div>
                
                <div className="relative w-full md:w-1/2 max-w-[500px] flex flex-col justify-center items-center text-center py-8">
                    <img 
                        src="assets/img/about-bg-decoration.png" 
                        alt="Decorative background" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[100px] ml-[100px] w-[120%] h-auto opacity-30 pointer-events-none z-0"
                    />
                    
                    <div className="relative z-10 flex flex-col items-start text-left">
                        <h3 className="text-[var(--brand-blue-text)] text-sm font-semibold tracking-[0.15em] uppercase mb-6">
                            Join TreePeople
                        </h3>
                        <p className="text-gray-700 text-lg leading-[2.2] font-normal">
                            Join TreePeople for an intimate evening of world championship mentalism at our open-air S. Mark Taper Foundation Amphitheatre. Fresh from their sold-out Las Vegas residency, Mind2Mind, hailed by David Blaine as a favorite, bring their famed "second sight," thought-reveals, and up-close mind-reading to Los Angeles for a single night under the stars.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};