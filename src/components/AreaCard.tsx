import Card from "./Card";
import db_notices from "../data/db_notices";
// import notice1 from '../assets/image/noticia1.jpg'



export default function AreaCard() {

     return (

          <div className="p-16">
               <h1 className="lg:text-xl text-lg ml-5 mb-16 font-bold duration-700">Artigos Recomendados</h1>
               <div className="grid lg:gap-x-5 lg:gap-y-10 gap-y-10 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-4 justify-items-center duration-700">
                    {
                         db_notices.map((notice) => (
                              <Card
                                   key={notice.id}
                                   img={`${notice.image}`}
                                   subtitle={notice.subtitle}
                                   date={notice.date}
                                   theme={notice.theme}
                                   title={notice.title}
                              />
                         ))
                    }

               </div>
          </div>
     );
}