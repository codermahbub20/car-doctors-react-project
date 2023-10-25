import slider1 from '../../../../assets/images/homeCarousel/1.jpg'
import slider2 from '../../../../assets/images/homeCarousel/2.jpg'
import slider3 from '../../../../assets/images/homeCarousel/3.jpg'
import slider4 from '../../../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
    return (
        <div className="carousel h-[600px] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className='space-y-6 ml-12 text-white w-1/2'>
                        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>Discover More</button>
                        <button className="btn text-white btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 space-x-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className='space-y-6 ml-12 text-white w-1/2'>
                        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>Discover More</button>
                        <button className="btn text-white btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 space-x-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className='space-y-6 ml-12 text-white w-1/2'>
                        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>Discover More</button>
                        <button className="btn text-white btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 space-x-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className='space-y-6 ml-12 text-white w-1/2'>
                        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] text-white border-none hover:text-black mr-4 '>Discover More</button>
                        <button className="btn text-white btn-outline">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 space-x-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;