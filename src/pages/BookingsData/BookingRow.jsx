
const BookingRow = ({ booking, setLoad, load }) => {
    const { _id ,img, serviceName, date, price } = booking
    
    const hanldeDelete = id => {
        const peced = confirm('are you sure ?')
        if(peced){
            fetch(`https://car-doctor-server-alpha-seven.vercel.app/bookings/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    setLoad(!load)
                }
            })
        }
    }

    return (

        <tr>
            <th>
                <button onClick={() => hanldeDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="image" />
                    </div>
                </div>


            </td>
            <td>
                {serviceName}
            </td>
            <td>
                {date}
            </td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default BookingRow;