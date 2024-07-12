export function GalerieCard({src, date, description})
{
    const formatDate = (date) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate()} / ${dateObj.getMonth()} / ${dateObj.getFullYear()}`;
    }

    return <div className="gallerie__wrapper">
    <div className="gallerie">
     <div className="gallerie__infos">
       <img src={src} alt="" className="gallerie__image" />
       <div className="gallerie__cover">
         <div className="gallerie__cover__content"> { description } </div>
       </div>
     </div>
     <div className="gallerie__date">
        { formatDate(date) }
     </div>
  </div>
 </div>
}