export function SponsorCard({imgSrc, sponsor, href})
{
    return <div className="sponsors__wrapper">
    <div className="sponsors">
        <a href={href} className="sponsor__card">
            <img src={imgSrc} alt={sponsor} />
        </a>
    </div>
</div>
}