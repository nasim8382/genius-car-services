import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/service', data)
        .then(res => console.log(res));
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-primary my-4">Please Add a Service</h2>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" className="mb-4" {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder="Price" className="mb-4" type="number" {...register("price")} />
        <textarea placeholder="Description" className="mb-4" {...register("description")} />
        <input placeholder="Photo URL" className="mb-4" type="text" {...register("img")} />
        <input type="submit" value="Add Service" />
      </form>

    </div>
  );
};

export default AddService;
