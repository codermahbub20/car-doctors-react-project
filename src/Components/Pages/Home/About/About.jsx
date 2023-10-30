import AboutPerson from '../../../../assets/images/about_us/person.jpg'
import AboutParts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex flex-col lg:flex-row">
                <div className='md:w-1/2 relative'>
                    <img src={AboutPerson} className="lg:w-[400px] lg:h-[400px] rounded-lg shadow-2xl" />
                    <img className='absolute right-4 border-8 shadow-xl border-white top-1/2 lg:w-[270px] lg:h-[270px]' src={AboutParts} alt="" />
                </div>
                <div className='md:w-1/2 space-y-4 p-5'>
                    <h3 className='text-2xl text-[#FF3811]'>About Us</h3>
                    <h1 className='text-5xl text-extrabold'>We are qualified & of experience in this field</h1>
                    <p className='text-xl text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>

                    <p className='text-xl text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable</p>

                    <button className='btn bg-[#FF3811] text-white'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;