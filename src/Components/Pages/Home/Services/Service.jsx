import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const { _id, title, img, price } = service;
    console.log(_id)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[200px]" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions flex  justify-center">
                        <p className="text-[#FF3811] text-xl">Price:${price} </p>
                        <Link to={`/bookservice/${_id}`}>
                            <button className="btn btn-sm bg-[#FF3811]"><BsArrowRight className="text-white font-bold"></BsArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;