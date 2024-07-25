type Galerie = {
    id: string
    title: string
    image: string
    status: string
    createdAt: string
  }

import { Backend_URL } from "@/lib/Constant"

const GalerieCard = ({ galeries }: { galeries: Galerie[] }) => (

    <>
        {galeries
            .filter(galerie => galerie.status !== 'false')
            .map((galerie, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                    <div className="portfolio_item">
                        <img src={`${Backend_URL}${galerie.image}`} alt={`${galerie.title}`} />
                        <div className="portfolio_hover">
                            <a href="#">
                                {galerie.title}
                            </a>
                            <div className="zoom_popup">
                                <a className="img-link" href={`${Backend_URL}${galerie.image}`} target="_blank">
                                    <i className="flaticon-search" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        ))}
    </>

)

export default GalerieCard