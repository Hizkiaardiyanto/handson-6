import { MutateFunction, MutationFunction, UseMutateFunction } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ProductFormProps {
  isEdit: Boolean;
  mutateFn:  MutateFunction<ProductFormInput>
}

export type ProductFormInput = {
  title: string;
  description: string;
  price: number;
  category: string;
  discountPercentage: number;
};

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProductFormInput>();
  const onSubmitAdd: SubmitHandler<ProductFormInput> = (data) => console.log(data);
  const onSubmitEdit: SubmitHandler<ProductFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={props.isEdit ? handleSubmit(onSubmitAdd) : handleSubmit(onSubmitEdit)}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          className={
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
            (errors.title && "border-red-500")
          }
          placeholder="Product Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <p className="text-red-600 text-xs italic" id="titleError">
            Title is required.
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          className={
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
            (errors.description && "border-red-500")
          }
          rows={4}
          placeholder="Product Description"
          {...register("description", { required: true })}
        ></textarea>

        {errors.description && (
          <p className="text-red-600 text-xs italic" id="titleError">
            Description is required.
          </p>
        )}
      </div>

      <div className="mb-4 relative">
        <label className="block text-gray-700 font-bold mb-2">Price</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
            $
          </span>
          <input
            type="number"
            id="price"
            className={
              "shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
              (errors.price && "border-red-500")
            }
            placeholder="0.00"
            {...register("price")}
          />
          {errors.price && (
            <p className="text-red-600 text-xs italic" id="titleError">
              Price is required.
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Category</label>
        <select
          id="category"
          className={
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
            (errors.category && "border-red-500")
          }
          {...register("category")}
        >
          <option value="beauty">Beauty</option>
          <option value="fragrance">Fragrance</option>
          <option value="furniture">Furniture</option>
        </select>
        {errors.category && (
          <p className="text-red-600 text-xs italic" id="titleError">
            Category is required.
          </p>
        )}
      </div>

      <div className="mb-4 relative">
        <label className="block text-gray-700 font-bold mb-2">
          Discount Percentage
        </label>
        <div className="flex">
          <input
            {...register("discountPercentage")}
            type="number"
            id="discountPercentage"
            className={"shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" + (errors.category && "border-red-500")}
            placeholder="0"
          />
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300">
            %
          </span>
          {errors.discountPercentage && (
            <p className="text-red-600 text-xs italic" id="titleError">
              Discount is required.
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        {props.isEdit ? (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Product
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
