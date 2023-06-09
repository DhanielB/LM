export default function AnimatedText() {
    return (
        <div className="text-[#5102FB] inline-block pl-[0.20rem]">
            <div className="z-10 inline-block w-[5rem] h-[4.75rem] md:h-[4.85rem] bg-white absolute"></div>
            <div className="z-10 inline-block mt-[5.95rem] w-[5rem] h-[6.2rem] md:h-[5.85rem] bg-white absolute"></div>
            <div className="animate-move text-[1.05rem] md:text-base">
                <p className="1">ao IME</p>
                <p className="2">à ESA</p>
                <p className="3">à ESPCEX</p>
                <p className="4">à ITA</p>
            </div>
        </div>
    )
}