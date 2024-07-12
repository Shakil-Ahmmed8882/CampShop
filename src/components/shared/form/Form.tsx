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
import { setFormData } from "@/redux/features/checkout/checkoutSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";

type TForm = {
  isDisabled?: boolean;
  handleNavigation: () => void;
  totalPrice: number;
};

const Form = ({
  isDisabled = false,
  handleNavigation,
  totalPrice,
}: TForm): JSX.Element => {
  const disPatch = useAppDispatch();
  const [formData, setFormDataOnState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    totalPrice:totalPrice
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataOnState({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    disPatch(setFormData(formData));
    handleNavigation();
    console.log(formData)
  };

  return (
    <Dialog>
      <DialogTrigger>
        <CustomButton isDisabled={isDisabled}>Place Order</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-8 title-color text-2xl">
            Place the details of you
          </DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit} className="checkout-form">
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
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full mt-10 text-right">
                <Button
                  type="submit"
                  className="bg-primaryLight outline-[0.5px] outline"
                >
                  Submit
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
