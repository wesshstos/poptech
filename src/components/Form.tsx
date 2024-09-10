export default function Form() {
     return (
          <div className="bg-red-200 flex flex-col justify-center items-center p-16 ">
               <span className="lg:text-3xl text-xl font-semibold mb-5">Entre em contato</span>

               <form action="get" className="flex flex-col items-center gap-4 w-full">
                    <input type="text" placeholder="Nome Completo" className="lg:w-2/6 w-96 p-2 bg-transparent placeholder:text-zinc-700 text-md italic lg:border-b-4 border-b-2 border-zinc-700 " />
                    <input type="email" name="email" id="email" placeholder="Seu melhor e-mail" className="lg:w-2/6 w-96 p-2 bg-transparent placeholder:text-zinc-700 text-md italic lg:border-b-4 border-b-2 border-zinc-700 " />
                    <textarea name="message" id="message" placeholder="Digite sua mensagem" className="resize-none lg:w-2/6 w-96 h-36 p-2 bg-transparent placeholder:text-zinc-700 text-md italic lg:border-2 border-b-2 border-zinc-700 lg:rounded-md rounded-none"></textarea>

                    <button className="bg-yellow-400 lg:w-1/6 w-full md:w-48 py-2 rounded-lg text-zinc-900 font-bold duration-700 hover:bg-yellow-500">Enviar</button>
               </form>
          </div>
     );
}