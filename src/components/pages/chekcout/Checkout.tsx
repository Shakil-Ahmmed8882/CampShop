// import { useAppDispatch } from "@/redux/hooks";

// const Checkout = (): JSX.Element => {

//   const dispatch = useAppDispatch()



//   return (

//       <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
//         <h1 className="text-3xl font-bold mb-6">Checkout</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block font-medium mb-1">
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   defaultValue=""
//                   name="name"
//                   className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block font-medium mb-1">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   defaultValue=""
//                   name="email"
//                   className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"

//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block font-medium mb-1">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"

//                   name="phone"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="address" className="block font-medium mb-1">
//                   Delivery Address
//                 </label>
//                 <textarea
//                   id="address"
//                   name="address"
//                   className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
//                   rows={3}

//                   defaultValue={""}
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold mb-4">Payment Method</h2>
//                 <div className="space-y-2">
//                   <div className="flex items-center">
//                     <input
//                       id="cod"
//                       type="radio"
//                       defaultValue="cod"
//                       name="paymentMethod"
//                       className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
//                     />
//                     <label htmlFor="cod" className="ml-2 block font-medium">
//                       Cash on Delivery
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="stripe"
//                       type="radio"
//                       defaultValue="stripe"
//                       name="paymentMethod"
//                       className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
//                     />
//                     <label htmlFor="stripe" className="ml-2 block font-medium">
//                       Stripe
//                     </label>
//                   </div>
//                 </div>
//               </div>
              
//               <button
//                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
//                 type="submit"
//               >
//                 Place Order
//               </button>
//             </form>
//           </div>
//           <div className="bg-muted p-6 rounded-md shadow-md">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>$99.99</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>$5.00</span>
//               </div>
//               <div className="flex justify-between font-bold">
//                 <span>Total</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//   );
// };

// export default Checkout;
