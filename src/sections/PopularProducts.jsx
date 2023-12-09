
import { products } from "../constants"; 
import PopularProductCard from "../Components/PopularProductCard";
const PopularProducts = () => {
  return (
     <section id="products" className="max-container">
      <div className="flex flex-col justify-start p-5">
        <h2 className="text-4xl font-palanquin font-bold"> Our <span className="text-coral-red">Popular </span>  Products </h2>
         <p className="lg: max-w-lg m-2 font-montserrat text-slate-gray">Experience top-bnotch quality and style with our sought-after selections. Discover a world of comfort , design and value </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductCard key= {product.name} product= {product}/>
        ))}
      </div>
      
     </section>
  )
}

export default PopularProducts