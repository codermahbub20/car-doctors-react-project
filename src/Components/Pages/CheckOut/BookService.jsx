import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const BookService = () => {

    const service = useLoaderData();
    const { title, img, service_id,price,_id } = service;
    const {user} = useContext(AuthContext)

    const handleBookService = e =>{
        e.preventDefault();
        const from = e. target;
        const name = from.name.value;
        const email = from.email.value;
        const date =from.date.value;

        const booking = {
            customerName: name,
            email,
            date,
            service: _id,
            price,
            title,
            img,
            service_id
        }

        console.log(booking)

    //     fetch('http://localhost:5000/bookings',{
    //         method: 'POST',
    //         headers: {
    //             'content-types' : 'application/json'
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

    return (
        <div>
            <h1 className="text-2xl text-center">Book Service: {title}</h1>

            <form onSubmit={handleBookService}>
                <div className='md:flex md:px-24'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Name</span>
                        </label>
                        <input type="text" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" name='name' />

                    </div>
                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Date</span>
                        </label>
                        <input type="date" placeholder="Date" className="input input-bordered" name='date' />
                    </div>
                </div>


                <div className='md:flex md:px-24'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Email</span>
                        </label>
                        <input type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" name='email' />

                    </div>
                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-rancho text-xl">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" name='taste' />
                    </div>
                </div>
               
                <div className="form-control md:px-24  w-full">
                    <input className='btn mt-5 mb-5 w-full mx-auto border-2 text-white hover:bg-[#FF3811] bg-[#FF3811]' type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;