import Timer from "@/components/Timer";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="header bg-[#C1E7EA] flex justify-center p-[0.15rem]">
        <p className="header-promotion inline-block font-bold">A promoção de lançamento termina em</p> <Timer></Timer>
      </header>
      <header className="header-logo flex justify-center mt-[3.15rem]">
        <Image src={require("@/images/logo.png")} alt={""} width={125} height={125}/>
      </header>
      <main className="main">
        <h1 className="main-title text-[#201F20] font-extrabold text-[3rem] mt-[5rem] ml-[1.5rem]">MATEMÁTICA<br/> É PARA <p className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">VOCÊ</p></h1>
        <p className="ml-[1.5rem] text-[1.05rem] inline-block">Trace seu plano de estudos para aprovação rumo</p><AnimatedText/>
        <div className="left-[30rem] top-[14rem] absolute">
          <Image src={require("@/images/main.gif")} alt={""} width={500} height={500}/>
        </div><br/>
        <button className="bg-[#5102FB] text-white px-[0.5rem] py-[0.35rem] ml-[1.5rem] mt-[4rem] rounded-md flex justify-center md:block md:justify-normal">Quero mandar bem em Matemática em 2023</button>
        <a href="https://api.whatsapp.com/send?phone=5531995406293&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20'replica%20do%20LM'%2C%20mas%20gostaria%20de%20fazer%20uma%20pergunta" className="bg-[#25d366] rounded-[100%] w-[4rem] h-[4rem] pt-[1rem] pl-[1.25rem] bottom-[2.25rem] right-[4.15rem] absolute">
          <Image src={require("@/images/whatsapp.svg")} alt={""} width={25} height={25}/>
        </a>
      </main>
    </div>
  )
}
