"use client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(products);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" flex flex-row text-white w-full justify-between">
        <h1 className=" text-2xl pl-8 pt-3  font-extralight">TAN TRIM</h1>

        <ul className="flex flex-row gap-14 py-14">
          <li>Bags</li>
          <li>Travel</li>
          <li>Accesories</li>
          <li>Gifting</li>
          <li>Jewelery</li>
        </ul>

        <ul className="flex flex-row gap-5 pr-8 pt-3">
          <li>
            <SearchOutlinedIcon />
          </li>
          <li>
            <PersonOutlineOutlinedIcon />
          </li>
          <li>
            <BookmarkBorderOutlinedIcon />
          </li>
          <li>
            <ShoppingBagOutlinedIcon />
          </li>
        </ul>
      </div>

      <div className=" py-5">
        <ul className="flex flex-row justify-between w-full px-8">
          <li className="flex flex-col items-center">
            <BackpackOutlinedIcon className=" size-24" /> <label>Bag</label>
          </li>
          <li className="flex flex-col items-center">
            <CasesOutlinedIcon className=" size-24" />
            <label>Bag</label>
          </li>
          <li className="flex flex-col items-center">
            <ShoppingBagIcon className=" size-24" />
            <label>Bag</label>
          </li>
          <li className="flex flex-col items-center">
            <BusinessCenterOutlinedIcon className=" size-24" />
            <label>Bag</label>
          </li>
          <li className="flex flex-col items-center">
            <LocalMallOutlinedIcon className=" size-24" />
            <label>Bag</label>
          </li>
          <li className="flex flex-col items-center">
            <LuggageOutlinedIcon className=" size-24" />
            <label>Bag</label>
          </li>
          <li className="flex flex-col items-center">
            <MedicalServicesOutlinedIcon className=" size-24" />
            <label>Bag</label>
          </li>
        </ul>
        <div className="flex flex-row justify-between py-8 px-5">
          <p>Bags . BagPacks</p>
          <p>
            13 Products{" "}
            <span className="px-1">
              <IosShareOutlinedIcon className="pb-1" />
            </span>
          </p>
        </div>
      </div>

      <div className="product-list flex flex-row flex-wrap gap-10 px-8">
        {isLoading && <p className="">Hold on tight! Loading products...</p>}
        {error && <p>Error fetching products: {error.message}</p>}
        {products.map((product) => (
          <div className="card bg-gray-950 rounded-lg shadow-md overflow-hidden w-52 h-96" key={product.id}>
            <img 
            src={product.image} 
            alt={product.title} 
            className="card-image bg-white w-52 h-60 overflow-hidden" />
            <div className="card-content text-white pt-6">
              <h3 className="card-title text-sm">{product.title}</h3>
              <p className="card-price">₹{product.price.toFixed(2)}<span className=" stroke-slate-800 pl-2 text-gray-600 line-through">899<span className=" text-green-500">(50% off)</span></span> <span className=" pl-2"><LocalMallOutlinedIcon/></span></p>{" "}
              {/* Format price to two decimals */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
