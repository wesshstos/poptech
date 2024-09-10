import imgBanner from "../assets/image/banner.jpg"

export default function Banner() {
     return (
          <div className="w-full bg-gradient-to-r from-[#FF3655] to-[#FF7157] p-10 flex flex-col-reverse justify-center items-center md:flex-row duration-700">
               <div className="w-full md:w-2/4 lg:w-3/6 flex flex-col justify-center items-center lg:items-start py-4 text-white duration-700">
                    <h1 className="uppercase text-lg md:font-semibold my-2 lg:text-3xl md:text-center lg:text-left font-bold duration-700">
                         A sua dose diária de <span className=" text-yellow-300 font-black">cultura pop</span>, do clássico ao contemporâneo!
                    </h1>
                    <p className="lg:text-base text-xs italic text-white text-justify duration-700">
                         Do cinema clássico aos games mais modernos, passando pela música e pela literatura, aqui você encontra tudo o que ama sobre a cultura pop. Desvende os segredos dos seus ídolos, relembre clássicos inesquecíveis e descubra novas paixões!
                    </p>

                    <button className=" lg:w-2/6 w-full py-3 rounded-md font-bold bg-yellow-400 text-zinc-900 mt-5 duration-700 hover:bg-yellow-500">Buscar artigos</button>
               </div>
               <div className="w-2/4 flex justify-center items-center py-5 duration-700">
                    <img src={imgBanner} className="rounded-full lg:w-96  md:w-60 shadow-md shadow-zinc-700 duration-700" alt="" />
               </div>
          </div>
     );
}