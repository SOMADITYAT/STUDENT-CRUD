import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLists = () => {
  const navigate = useNavigate();
  const [storages, setStorages] = useState(
    JSON.parse(localStorage.getItem('storages')) || []
  );

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  const handleDelete = (id) => {
    const newData = storages.filter((storage) => storage.id !== id);
    setStorages(newData);
    localStorage.setItem('storages', JSON.stringify(newData));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      <ul>
        {storages.map((storage, index) => (
          <li key={index} className="mb-4 p-4 border rounded shadow-md">
            <p className="mb-2 text-lg font-semibold">Name: {storage.name}</p>
            <p className="mb-2">Email: {storage.email}</p>
            <p className="mb-2">Phone: {storage.phone}</p>
            <p className="mb-2">City: {storage.city}</p>
            <p className="mb-2">State: {storage.state}</p>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(storage.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormLists;

