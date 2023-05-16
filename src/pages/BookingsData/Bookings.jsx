/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data)
            })
    }, [load])

    return (
        <div className="my-8">
            <h1>Total bookings:{bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <button className="btn btn-circle btn-sm btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <th>Image</th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                setLoad={setLoad}
                                load={load}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;