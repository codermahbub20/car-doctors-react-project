import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import BookingRow from "./BookingRow";


const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = id =>{
        const procced = confirm('Are You Sure You want to delete this')
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: "DELETE"
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data)
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining)
            })
        }
    }

    const handleBookingUpdate = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers:{
                "content-types" : "application/json"
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h1>My Bookings:{bookings.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow 
                                key={booking._id} 
                                booking={booking}
                                 handleDelete={handleDelete}
                                 handleBookingUpdate={handleBookingUpdate}
                                 ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;