import Link from "next/link";

export default function Data(props){
    return(
        <div className="container">
            <h1 className="display-5 fw-bold text-black text-opacity-80 justify-content-center d-flex my-5">
                {props.Judul}
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card">
                    <img src={props.Url} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.Cafe}</h4>
                    <p className="card-text">{props.Detail}</p>
                    <p className="card-text">{props.Lokasi}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/cafe/Java-Sunrise-Cafe/JavaSunrise.jpg/Detail-Cafe/Lokasi">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card">
                    <img src={props.Url2} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.Cafe2}</h4>
                    <p className="card-text">{props.Detail2}</p>
                    <p className="card-text">{props.Lokasi2}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/cafe/Kemunir-Kopi/Kemunir.jpg/Detail-Cafe/Lokasi">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card">
                    <img src={props.Url3} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.Cafe3}</h4>
                    <p className="card-text">{props.Detail3}</p>
                    <p className="card-text">{props.Lokasi3}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/cafe/Lacosta-Cafe/Lacosta.jpg/Detail-Cafe/Lokasi">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card">
                    <img src={props.Url4} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.Cafe4}</h4>
                    <p className="card-text">{props.Detail4}</p>
                    <p className="card-text">{props.Lokasi4}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/cafe/Banyuwangi-Savana-Cake/Savana-Cake.jpg/Detail-Cafe/Lokasi">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>                
                <div className="col">
                <div className="card">
                    <img src={props.Url5} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.Cafe5}</h4>
                    <p className="card-text">{props.Detail5}</p>
                    <p className="card-text">{props.Lokasi5}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/cafe/Cafe-&-Resto-Supermilk99/Supermilk99.jpg/Detail-Cafe/Lokasi">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>                
                <div className="col">
                <div className="card">
                    <img src={props.Url6} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.Cafe6}</h4>
                    <p className="card-text">{props.Detail6}</p>
                    <p className="card-text">{props.Lokasi6}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/cafe/D'Copiz-Cafe/D'Copiz.jpg/Detail-Cafe/Lokasi">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}