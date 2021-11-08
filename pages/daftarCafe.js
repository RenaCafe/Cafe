import Data from "../components/dataCafe";
import Header from "../components/header";

export default function Daftar(){
    let Heading = {Judul : "Cafe Di Banyuwangi"}
    let Place = {
        Url : "https://www.topijelajah.com/wp-content/uploads/2019/10/cafe-di-banyuwangi-Java-Sunrise-Cafe.jpg",
        Cafe : "Java Sunrise Cafe",
        Detail : "Cafe ini menyediakan hidangan kopi original khas Banyuwangi. Selain kopi, cafe ini juga menjual menu lain seperti aneka minuman kekinian serta makanan berat...",
        Lokasi : "Jl. Moh. Husni Thamrin No.217, Pengantigan, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68414"
    }
    let Place2 = {
        Url2 : "https://www.topijelajah.com/wp-content/uploads/2019/10/cafe-di-banyuwangi-Kemunir-Kopi.jpg",
        Cafe2 : "Kemunir Kopi",
        Detail2 : "Meskipun ukuran cafe ini mungil, namun suasana yang diciptakannya sangatlah hangat. Desain interior yang disuguhkan Kemunir Kopi sangatlah nyaman. Menu yang...",
        Lokasi2 : "Jl. Penataran No.49, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416"
    }
    let Place3 = {
        Url3 : "https://www.topijelajah.com/wp-content/uploads/2019/10/cafe-di-banyuwangi-Lacosta-Cafe.jpg",
        Cafe3 : "Lacosta Cafe",
        Detail3 : "Cafe di Banyuwangi kota ini menyajikan hidangan gelato yang pas sekali dinikmati saat udara panas Banyuwangi terasa. Rasanya yang bervariasi serta harganya...",
        Lokasi3 : "Jl. MT Haryono No.62-54, Karangrejo, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68411"
    }
    let Place4 = {
        Url4 : "https://www.topijelajah.com/wp-content/uploads/2019/10/cafe-di-banyuwangi-Banyuwangi-Savana-Cake.jpg",
        Cafe4 : "Banyuwangi Savana Cake",
        Detail4 : "Savana cake merupakan oleh-oleh khas Banyuwangi yang kekinian. Cake ini memiliki keistimewaan karena setiap varian rasanya merepresentasikan suatu destinasi...",
        Lokasi4 : "Jl. Letjen S Parman No.26, Pakis, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68419"
    }
    let Place5 = {
        Url5 : "https://www.topijelajah.com/wp-content/uploads/2019/10/cafe-di-banyuwangi-Cafe-Resto-Supermilk99.jpg",
        Cafe5 : "Cafe & Resto Supermilk99",
        Detail5 : "Jika Anda ingin menikmati musik sambil makan susu enak di Banyuwangi, maka Cafe & Resto Supermilk99 adalah pilihan yang tepat. Salah satu cafe hits di Banyuwangi...",
        Lokasi5 : "Jl. Letkol I Gusti Ngurah Rai No.18, Penganjuran, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416"
    }
    let Place6 = {
        Url6 : "https://www.topijelajah.com/wp-content/uploads/2019/10/cafe-di-banyuwangi-Cafe-dCopiz.jpg",
        Cafe6 : "Cafe d'Copiz",
        Detail6 : "Cafe ini mendapat julukan “desa damai tempat ngopi” karena cafe ini dikelilingi oleh tanaman pada kursi dan mejanya. Cafe ini tidak memiliki wifi dengan tujuan agar...",
        Lokasi6 : "Jl. Brawijaya, Kebalenan, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68417"
    }
    return(
        <div>
            <Header/>
            <Data
                Judul = {Heading.Judul}

                Url = {Place.Url}
                Cafe = {Place.Cafe}
                Detail = {Place.Detail}
                Lokasi = {Place.Lokasi}

                Url2 = {Place2.Url2}
                Cafe2 = {Place2.Cafe2}
                Detail2 = {Place2.Detail2}
                Lokasi2 = {Place2.Lokasi2}

                Url3 = {Place3.Url3}
                Cafe3 = {Place3.Cafe3}
                Detail3 = {Place3.Detail3}
                Lokasi3 = {Place3.Lokasi3}

                Url4 = {Place4.Url4}
                Cafe4 = {Place4.Cafe4}
                Detail4 = {Place4.Detail4}
                Lokasi4 = {Place4.Lokasi4}

                Url5 = {Place5.Url5}
                Cafe5 = {Place5.Cafe5}
                Detail5 = {Place5.Detail5}
                Lokasi5 = {Place5.Lokasi5}

                Url6 = {Place6.Url6}
                Cafe6 = {Place6.Cafe6}
                Detail6 = {Place6.Detail6}
                Lokasi6 = {Place6.Lokasi6}
            />
        </div>
    )
}