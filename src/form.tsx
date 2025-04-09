import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button, Label, Fieldset } from '@shadcn/ui';

const schema = z.object({
  name: z.string().min(2, "Name is required and should be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number"),
});


type FormData = z.infer<typeof schema>;

const form: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign Up Form</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <Fieldset className="mb-4">
          <Label htmlFor="name" className="block text-sm font-medium">Full Name</Label>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                {...field}
                id="name"
                type="text"
                placeholder="Enter your full name"
                className={`mt-2 p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </Fieldset>

        <Fieldset className="mb-4">
          <Label htmlFor="email" className="block text-sm font-medium">Email Address</Label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`mt-2 p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </Fieldset>

        <Fieldset className="mb-6">
          <Label htmlFor="password" className="block text-sm font-medium">Password</Label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Enter your password"
                className={`mt-2 p-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </Fieldset>

        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default form;
