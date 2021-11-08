//Proses Dynamic Route

import Header from "../../../../../../cafe/components/header";
import Link from "next/link";

export async function getServerSideProps(context){
    let Nama = context.params.namaCafe;
    let Img = context.params.gambar;
    let Detail = context.params.detail;
    let Lokasi = context.params.lokasi;

    return{props : {Nama, Img, Detail, Lokasi}};
}

export default function Cafe(props){
    return(
        <div>
            <Header/>
            <h1 className="display-5 fw-bold text-black text-opacity-80 justify-content-center d-flex my-5">
                Cafe
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
            <div className="col">
                    <div className="card">
                        <img src={props.Img} width="100%" height="225"/>
                        <div className="card-body">
                        <h4>{props.Nama}</h4>
                        <p className="card-text">{props.Detail}</p>
                        <p className="card-text">{props.Lokasi}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link href="/daftarCafe">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Back</button>
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