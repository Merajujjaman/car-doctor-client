import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id,title, img, price } = service;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                    <img src={img} alt="Service image not found" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-gray-500">{title}</h2>
                    <p className="text-error text-xl font-bold">Price: {price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;