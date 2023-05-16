import person from '../../assets/images/about_us/person.jpg'
import perts from '../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='md:w-1/2 relative'>
                    <img src={person} className=" rounded-lg shadow-2xl w-2/3" />
                    <img src={perts} className=" rounded-lg shadow-2xl w-1/2 absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className='md:w-1/2 space-y-5 p-8'>
                    <h1 className="text-3xl font-bold text-error">About Us</h1>
                    <h1 className="text-6xl font-bold">We are qualified <br /> & of experience in this field</h1>
                    <p><small>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do nat look even slightly believable.
                    </small></p>
                    <p><small>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                    </small></p>
                    <button className="btn btn-error">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;