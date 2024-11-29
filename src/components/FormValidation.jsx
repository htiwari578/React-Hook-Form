import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';






const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be less than or equal to 15 digits")
      .regex(/^[0-9]+$/, "Phone number must only contain digits"),
  });

const FormValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(formSchema),
      });
    
      const onSubmit = (data) => {
        console.log("Form data: ", data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-2xl">
          <div>
            <label className="text-white">Name:</label>
            <input
              type="text"
              {...register('name')}
              className="border p-2 rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
    
          <div>
            <label>Email:</label>
            <input
              type="email"
              {...register('email')}
              className="border p-2 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
    
          <div>
            <label>Password:</label>
            <input
              type="password"
              {...register('password')}
              className="border p-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
    
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              {...register('phoneNumber')}
              className="border p-2 rounded"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
    
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      );
    };

export default FormValidation