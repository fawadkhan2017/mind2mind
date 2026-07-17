const Hero = () => {
    return (
        <div 
            className="relative w-full h-screen min-h-[700px] md:min-h-[900px] flex flex-col items-center justify-between overflow-hidden bg-black bg-center bg-cover"
            style={{
                backgroundImage: `url('assets/img/hero-bg.png')`,
                backgroundPosition: 'top center'
            }}
            data-name="Hero"
            data-file="components/Hero.js"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center space-y-4 md:space-y-6 mt-12 md:mt-20 w-full px-4">
                <img 
                    src="assets/img/treepeople-presents.png" 
                    alt="Treepeople Presents" 
                    className="w-24 md:w-36 object-contain drop-shadow-md"
                />
                
                <img 
                    src="assets/img/mind2mind-logo.png" 
                    alt="MIND2MIND" 
                    className="w-[85%] max-w-4xl object-contain drop-shadow-2xl"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-3 md:space-y-5 mb-8 md:mb-10 w-full px-4">
                <img 
                    src="assets/img/moonlit-magic.png" 
                    alt="Moonlit Magic" 
                    className="w-[45%] max-w-[240px] md:max-w-xs object-contain drop-shadow-2xl pointer-events-none"
                />

                <p className="text-[var(--text-cream)] text-xs md:text-sm lg:text-base tracking-[0.15em] md:tracking-[0.2em] uppercase font-semibold text-center drop-shadow-md mt-5">
                    Saturday, August 22<sup className="text-[0.65em] md:text-xs">nd</sup> at 6:30PM
                </p>

                <button className="bg-[var(--gold-primary)] hover:bg-[var(--gold-hover)] transition-all duration-300 text-black px-6 py-2.5 md:px-8 md:py-3 rounded uppercase font-bold tracking-[0.15em] text-[10px] md:text-xs shadow-[0_4px_20px_rgba(205,162,96,0.2)]">
                    Get Tickets Here
                </button>
            </div>
        </div>
    );
};