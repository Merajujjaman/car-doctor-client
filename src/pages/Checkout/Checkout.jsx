import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(service);
    const { _id, title, img, price,  } = service;
    const handleOrder = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const order ={
            customerName: name,
            email,
            date,
            serviseId: _id,
            serviceName: title,
            img,
            price

        }
        console.log(order);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'

            },
            body: JSON.stringify(order)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert ('you order is done')
            }
        })
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Service Name: {title}</h1>


            <form onSubmit={handleOrder} className="bg-blue-100 p-2 md:p-4 rounded my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order confirm" />
                </div>
            </form>
        </div>


    );
};

export default Checkout;