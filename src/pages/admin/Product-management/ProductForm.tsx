import { useState, ChangeEvent, FormEvent } from "react";
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
  clickHandler: (formData: TProduct) => void;
  label: string;
  title: string;
};

const ProductForm = ({
  isDisabled = false,
  clickHandler,
  label,
  title,
}: TForm): JSX.Element => {




  
  
  // handle form data
  const [formData, setFormDataOnState] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    image: null,
    category: "",
  });

  // handle on-change input
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


  // handle submit   
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    // Collecting all date from input ( file & data)
    const {image, ...restData} = formData
    const productData = {
        ...restData
    }
    const data = new FormData();
    data.append(
      "data",
      JSON.stringify({
        ...productData
      })
    );

    if (image) {
      data.append("image", image);
    }

    clickHandler(data)


  };

  return (
    <Dialog>
      <DialogTrigger>
        <CustomButton isDisabled={isDisabled}>{label}</CustomButton>
      </DialogTrigger>
      <DialogContent className="h-[90vh] !overflow-auto">
        <DialogHeader>
          <DialogTitle className="pb-8 title-color text-2xl">
            {title}
          </DialogTitle>
          <DialogDescription>
            <form onSubmit={(e)=> handleSubmit(e)} className="checkout-form">
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
                  required
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
                  Add
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
