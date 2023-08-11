import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'; 



const Form = () => {
    const  navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: ""
    })
    // const [count, setCount] = useState(100); // Initialize the count to 100

    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4().slice(0,4);
        console.log(id);
        const storages = JSON.parse(localStorage.getItem('storages')) || [];
        storages.push({ ...formData, id });
        localStorage.setItem('storages', JSON.stringify(storages));

        setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            state: "",
        });
        navigate('/details');

    }
    return (
        <div className="w-full mx-auto p-6 rounded shadow-lg ">
            <h2 className='text-2xl font-semibold mb-4'>Fill the form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input type="text" name="name"
                     className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input type="email" name="email" 
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-medium mb-1">Phone</label>
                    <input type="tell" name="phone" 
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-medium mb-1">City</label>
                    <input type="text" name="city"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    value={formData.city} onChange={handleChange} />
                </div>
                <div>
                    <label className="block font-medium mb-1">State</label>
                    <input type="text" name="state"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    value={formData.state} onChange={handleChange} />
                </div>

                <button type='submit' className="bg-blue-500 text-white 
                px-4 py-2 rounded hover:bg-blue-600"
               >Submit</button>

            </form>
        </div>
    )
}

export default Form