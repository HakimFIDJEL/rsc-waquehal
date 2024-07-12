export function ActivityCard({imgSrc, title, subtitle})
{
    return <div className="activities">
        <div className="activites__image">
            <img src={imgSrc} alt="" />
            </div>
            <div className="activites__description">
            <div className="activites__title">
                {title}
            </div>
            <div className="activites__subtitle">
                {subtitle}
            </div>
        </div>
    </div>
}