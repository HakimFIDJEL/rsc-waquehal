export function TrophyCard({placement, title, season, team})
{

    var trophyClass, trophyTitle;

    switch(placement)
    {
        case "1":
            trophyClass = "first-p";
            trophyTitle = "1ere place";
            break;
        case "2":
            trophyClass = "second-p";
            trophyTitle = "2eme place";
            break;
        case "3":
            trophyClass = "third-p";
            trophyTitle = "3eme place";
            break;
        default:
            trophyClass = "default-p";
            trophyTitle = placement+"eme place";
            break;
    }

    return <div className="palmares__wrapper">
    <div className={`trophy ${trophyClass}`}>
      <div className="trophy__logo">
        <svg width="192" height="201" viewBox="0 0 192 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.215 0L29.5303 9.42188H162.471L167.787 0H24.215ZM21.289 0.392578C20.5274 0.646969 19.7861 1.03013 19.2399 1.4227L12.6076 6.13364L78.8346 122.778C82.1649 121.398 85.659 120.394 89.32 119.834L58.6457 65.9516H58.5473L36.5528 27.1837L21.289 0.389437V0.392578ZM170.713 0.392578L155.789 26.598C155.753 26.7785 155.705 26.9921 155.594 27.1868L102.778 119.835C106.405 120.397 109.865 121.412 113.165 122.78L179.392 6.18389L172.76 1.42427C172.214 1.0317 171.473 0.648539 170.711 0.394148L170.713 0.392578ZM7.48736 9.76577L1.09843 14.2804C0.00603511 15.0656 -0.306077 16.6657 0.318147 17.7649L65.1298 131.908H65.4232C67.9201 129.552 70.4076 127.502 73.3727 125.774L7.48736 9.76577ZM184.464 9.81445L118.627 125.773C121.436 127.5 124.089 129.551 126.43 131.906H126.967L191.682 17.911C192.306 16.8118 191.994 15.2116 190.902 14.4265L184.464 9.81445ZM33.0899 15.7031L38.4551 25.125H153.546L158.912 15.7031H33.0899ZM96.0008 125.625C75.3156 125.625 58.5473 142.498 58.5473 163.312C58.5473 184.127 75.3156 201 96.0008 201C116.686 201 133.454 184.127 133.454 163.312C133.454 142.498 116.686 125.625 96.0008 125.625Z" fill=""/>
        </svg>
      </div>
      <div className="trophy__content">
        <div className="trophy__title">{ trophyTitle }</div>
        <div className="trophy__subtitle">{ title }</div>
      </div>
      <div className="trophy__cover">
        <div className="trophy__bar"></div>
        <div className="trophy__cover__content">  
          <div className="trophy__season">Saison { season }</div>
          <div className="trophy__team">{ team }</div>
        </div>
        <div className="trophy__bar"></div>
      </div>
    </div>
  </div>
}