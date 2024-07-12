export function HomeActuCard({title, text, date, imageSrc})
{

    const formatDate = (date) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate()} / ${dateObj.getMonth()} / ${dateObj.getFullYear()}`;
    }

    return <div className="actualite">
    {imageSrc && <img className="actualite__image" src={imageSrc}/>}
    <div className="actualite__description">
      <h4 className="actualite__title">{title}</h4>
      <div className="actualite__text">{text}</div>
      <div className="actualite__date">
        {formatDate(date)}
      </div>
    </div>
  </div>
}