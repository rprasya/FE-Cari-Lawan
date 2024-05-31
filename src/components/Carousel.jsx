import slide1 from "../assets/Carousel/Slide 1.png";
import slide2 from "../assets/Carousel/Slide 2.png";
import slide3 from "../assets/Carousel/Slide 3.png";

const Carousel = () => {
  return (
    <>
      <div className="w-full h-[420px] carousel rounded-box">
        {/* slide 1 */}
        <div className="carousel-item w-full flex flex-col justify-center items-center text-center">
          <img src={slide1} className="w-[290px]" alt="slide 1" />
          <div className="font-bold text-2xl text-black">
            Temukan Lawan Tanding <br /> dengan Mudah!
          </div>
          <p className="font-semibold text-xs text-black mt-[17px] mx-6">
            Mau cari lawan untuk pertandingan atau sekedar sparring? Temukan
            lawan yang cocok hanya dengan beberapa klik di Cari Lawan. Gabung
            sekarang dan mulai tantangan baru!
          </p>
        </div>

        {/* slide 2 */}
        <div className="carousel-item w-full flex flex-col justify-center items-center text-center">
          <img
            src={slide2}
            className="w-[350px]"
            alt="Tailwind CSS Carousel component"
          />
          <div className="font-bold text-2xl text-black">
            Buat Tim Anda Sendiri <br /> di Cari Lawan!
          </div>
          <p className="font-semibold text-xs text-black mt-[17px] mx-6">
            Sekarang Anda bisa membentuk tim sendiri dan menantang <br /> lawan
            lainnya. Ajak teman-teman Anda dan mulai petualangan seru bersama di
            Cari Lawan!
          </p>
        </div>

        {/* slide 3 */}
        <div className="carousel-item w-full flex flex-col justify-center items-center text-center">
          <img
            src={slide3}
            className="w-[350px]"
            alt="Tailwind CSS Carousel component"
          />
          <div className="font-bold text-2xl text-black">
            Lihat Rekam Jejak <br /> dan Profil Tim Lawan!
          </div>
          <p className="font-semibold text-xs text-black mt-[17px] mx-6">
            Dengan fitur History di Cari Lawan, Anda bisa melihat tim yang
            pernah Anda hadapi dan membuka profil mereka. Evaluasi pertandingan
            sebelumnya dan persiapkan strategi terbaik untuk tantangan
            berikutnya!
          </p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
