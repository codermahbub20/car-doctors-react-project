

const BookingRow = ({ booking, handleDelete, handleBookingUpdate }) => {

    const { img, customerName, email, price, date, title, _id, status } = booking;



    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div>
                                <img className="w-52" src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                <h1>{customerName}</h1>
                            </div>
                            <div className="text-sm opacity-50">{title}</div>
                        </div>
                    </div>
                </td>

                <td>{email}</td>
                <td>{price}</td>
                <td>{date}</td>
                <th>
                    {status === 'confirm' ?
                        <span className="font-bold text-primary">Confirmed</span>
                        :
                        <button onClick={() => handleBookingUpdate(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;