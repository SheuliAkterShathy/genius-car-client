import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const {_id,img, title,price } = useLoaderData();
  const {user} = useContext(AuthContext);

  const handlePlaceOrder = event =>{
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;
   
    const order = {
        service:_id,
        serviceName:title,price,
        customer:name,email,phone,message
    }

    // if(phone.length>10){
    //     alert('phone number should be 10 charecters or longer')
    // }
    // else{

    // }

    fetch('http://localhost:5000/orders', {
        method:'POST',
        headers: {
            'content-type': 'application/json',
            authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify(order)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        if(data.acknowledged){
          alert('Orderd placed successfully')
          form.reset()
        }
    })
    .catch(error=>console.log(error));
  }


  return (
    <div>
        <img className="w-full" src={img} alt="" />
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h3 className="text-3xl">Price: ${price}</h3>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
            name="lastName"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            name="phone"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full"
            name="email"
            defaultValue={user?.email}
            readOnly
          />
        <textarea  name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
        </div>

        <input className="bg-red-500 cursor-pointer px-4 py-2 rounded-md" type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
