export function Hero({title, breadcrumbs, image}: {title: string, breadcrumbs: {title: string, link: string}[], image?: string})
{
    return <>
    <div className="indx_title_main_wrapper float_left">
        <div className="title_img_overlay" />
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 full_width">
                <div className="indx_title_left_wrapper">
                    <h2>
                        {title}
                    </h2>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 full_width">
                <div className="indx_title_right_wrapper">
                <ul>
                    {/* Breadcrumbs */}
                    {breadcrumbs.map((bc, i) => {
                        return <>
                            <li>
                                <a href={bc.link}>{bc.title}</a>
                            </li>
                            {i < breadcrumbs.length - 1 && <li>&nbsp;&nbsp;&nbsp;&gt;</li>}
                        </>;
                    })}
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>

    </>;
}