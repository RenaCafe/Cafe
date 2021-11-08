import Link from 'next/link'

export default function Header(){
    return(
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header class="mb-auto">
                    <div>
                    <h3 class="float-md-start mb-0 bd-highlight">RENA</h3>
                    <nav class="nav nav-masthead justify-content-center float-md-end">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/daftarCafe">Cafe</a>
                        <a class="nav-link" href="/about">About RENA</a>
                    </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}