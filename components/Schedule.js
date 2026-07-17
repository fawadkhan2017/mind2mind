const Schedule = () => {
    return (
        <section className="relative w-full py-16 bg-[var(--brand-beige)] flex justify-center text-center px-4" data-name="Schedule" data-file="components/Schedule.js">
            <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
                <img src="assets/img/schedule-texture.png" alt="texture" className="w-full h-full object-cover"/>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <h3 className="text-[#2f4c6e] text-sm font-semibold tracking-widest uppercase mb-10">
                    An Enchanted Evening Awaits, Featuring:
                </h3>
                
                <div className="flex flex-col items-center space-y-8 text-gray-800 w-full text-center">
                    <div className="flex flex-col items-center space-y-2">
                        <p className="font-semibold text-xl tracking-wider">6:30</p>
                        <p className="text-2xl font-semibold tracking-wide text-gray-700">Gourmet picnic-style dinner</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-semibold tracking-wide text-gray-700">Fresh Gelato by Patrizia</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-semibold tracking-wide text-gray-700">Live music by David Aldo in the amphitheater</p>
                    </div>
                    
                    <div className="pt-6 flex flex-col items-center space-y-2">
                        <p className="font-semibold text-xl tracking-wider">8:00</p>
                        <p className="text-2xl font-semibold tracking-wide text-gray-700">Spectacular performance by Mind2Mind</p>
                    </div>
                </div>
            </div>
        </section>
    );
};