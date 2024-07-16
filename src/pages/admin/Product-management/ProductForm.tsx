import {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TProduct } from "@/components/pages/products/type";

type TForm = {
  isDisabled?: boolean;
  clickHandler: (formData: any) => void;
  label: string;
  title: string;
  existingProduc?: TProduct;
  isOpen?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
};

const ProductForm = ({
  isDisabled = false,
  clickHandler,
  label,
  title,
  existingProduc,
  isOpen,
  onOpenChange,
}: TForm): JSX.Element => {
  const { name, description, price, category, stock } = existingProduc || {};

  // Initialize state with existing product values if available
  const [formData, setFormDataOnState] = useState({
    name: name || "",
    description: description || "",
    stock: stock ? stock.toString() : "",
    price: price ? price.toString() : "",
    image: null as File | null,
    category: category || "",
  });


  
  useEffect(() => {
    if (existingProduc) {
      setFormDataOnState({
        name: existingProduc.name || "",
        description: existingProduc.description || "",
        stock: existingProduc.stock ? existingProduc.stock.toString() : "",
        price: existingProduc.price ? existingProduc.price.toString() : "",
        image: null as File | null,
        category: existingProduc.category || "",
      });
    }
  }, [existingProduc]);


  // Handle on-change input
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      setFormDataOnState({ ...formData, image: files[0] });
    } else {
      setFormDataOnState({ ...formData, [name]: value });
    }
  };

  // Handle submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clickHandler(formData);

    // // Collecting all data from input (file & data)
    // const { image, ...restProductData } = formData;

    // const data = new FormData();
    // data.append(
    //   "data",
    //   JSON.stringify({
    //     ...restProductData,
    //   })
    // );

    // if (image) {
    //   data.append("image", image);
    // }

    
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <CustomButton isDisabled={isDisabled}>{label}</CustomButton>
      </DialogTrigger>
      <DialogContent className="h-[90vh] !overflow-auto">
        <DialogHeader>
          <DialogTitle className="pb-8 title-color text-2xl">
            {title}
          </DialogTitle>
          <DialogDescription>
            <form onSubmit={(e) => handleSubmit(e)} className="checkout-form">
              <div className="form-group">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="image">Image</Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  required={!existingProduc} // Only required if adding a new product
                />
              </div>

              <div className="form-group">
                <Label htmlFor="category">Category</Label>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w-full mt-10 text-right">
                <Button
                  type="submit"
                  className="bg-primaryLight outline-[0.5px] outline"
                >
                  {existingProduc ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
