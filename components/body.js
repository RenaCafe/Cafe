import Link from "next/link"

export default function Body(props){
    return(
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div class="col-md-6 p-lg-6 mx-auto my-2">
                <h1 class="display-5 fw-bold text-success text-opacity-80 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        {props.Judul}
                </h1>
                <p class="lead">
                    <Link href="/daftarCafe">
                        <a class="btn btn-outline-primary">Lanjutkan</a>
                    </Link>
                </p>
            </div>
        </div>
    )
}