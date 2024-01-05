import { useEffect, useState, useContext } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import { ART_PRODUCTS } from "../../Data";
import CartContext from "../../Context/CartContext";
import toast from "react-hot-toast";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailsSection() {
  const cart = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(ART_PRODUCTS.find((product) => product.id === id));
  }, [id]);
  const clickHandler = () => {
    cart.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0].src,
      amount: 1,
    });
    toast.success("Item Added to Cart");
  };
  if (!product) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {product.images.map((image) => (
                <Tab
                  key={image.id}
                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-heading cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 rounded-md overflow-hidden">
                        <img
                          src={image.src}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </span>
                      <span
                        className={classNames(
                          selected ? "ring-indigo-500" : "ring-transparent",
                          "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
            {product.images.map((image) => (
              <Tab.Panel key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-heading">
            {product.title}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-heading">{product.price} USDC</p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      product.rating > rating
                        ? "text-secondary"
                        : "text-gray-300",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              className="text-base text-gray-300 space-y-6"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          <div className="mt-10 flex sm:flex-col1">
            <button
              onClick={clickHandler}
              className="max-w-xs flex-1 bg-secondary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:opacity-90  sm:w-full"
            >
              Add to bag
            </button>
          </div>

          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>

            <div className="border-t divide-y divide-gray-200">
              {product.details.map((detail) => (
                <Disclosure as="div" key={detail.name}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-indigo-600" : "text-heading",
                              "text-sm font-medium"
                            )}
                          >
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="pb-6 prose text-gray-300 text-sm prose-sm"
                      >
                        <ul role="list">
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>
        </div>
      </div>
      <hr className="mt-24 border-gray-500" />
    </div>
  );
}
