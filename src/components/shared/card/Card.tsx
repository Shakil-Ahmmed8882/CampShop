
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Card = ({ product }): JSX.Element => {
  return (
    <div key={product.id} className="bg-[#0e131b] transition-all duration-500 hover:-translate-y-4 flex flex-col p-6 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-72 h-48 mx-auto object-cover rounded-md -mt-10 mb-14"
      />
      <h3 className="text-xl text-[#ececec] font-semibold mb-2">
        {product.name}
      </h3>
      <p className="text-[#c3c3c3] mb-5 mt-3">{product.price}</p>

      <div className="flex py-3">
      <div className="flex w-full justify-between mt-4">
          
          <Button className="text-[#c4c4c4] hover:text-white bg-transparent hover:bg-transparent"  >
            Learn More
          </Button>
            
          <Button className="!bg-primaryLight hover:!bg-[#233b0f83] text-primaryColor" >
           Buy now
          </Button>
            
            
          
          
        </div>
      </div>
      
    </div>
  );
};

export default Card;
