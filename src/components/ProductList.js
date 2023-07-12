import { useGetAllProductsQuery } from "../services/getProducts";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductList = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.map((product) => {
              console.log(product, "product");
              const { id, title, price, image } = product;
              return (
                <div className="group relative" key={product.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <img
                      src={product.image}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link
                          to={`/products/${id}`}
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></Link>
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
