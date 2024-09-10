function Card({ img, date, theme, title, subtitle }) {
     return (
          <div className="bg-zinc-200 p-4 rounded-lg w-[300px] shadow-md shadow-zinc-800 duration-700">
               <div className="w-full rounded-t-lg h-[150px] overflow-hidden duration-700">
                    <img src={img} alt="" className="w-full duration-700" />
               </div>
               <div className="flex justify-between items-center p-5 font-bold duration-700">
                    <span className="bg-gray-600 text-sm py-1 px-5 text-white rounded-lg duration-700" >{theme}</span>
                    <span>{date}</span>
               </div>
               <div className="flex flex-col px-5 mb-5 duration-700">
                    <p className="uppercase text-sm mb-1 font-bold duration-700">{title}</p>
                    <p className="text-xs mt-2 italic text-zinc-600 duration-700">{subtitle}</p>
               </div>
          </div>
     );
}

export default Card