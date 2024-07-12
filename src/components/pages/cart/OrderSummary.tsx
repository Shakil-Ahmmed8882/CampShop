const OrderSummary = ({ products, totalPrice }): JSX.Element => {
  
  
  
  return (
    <>
      <div className=" border-none rounded-lg w-full">
        <div className="relative w-full ">
          <div className="relative w-full overflow-auto overflow-x-hidden bor">
            <table className="w-full caption-bottom text-sm">
              <thead className=" border-none !text-[white]">
                <tr className="border-none transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium  [&:has([role=checkbox])]:pr-0">
                    P
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium  [&:has([role=checkbox])]:pr-0">
                    P
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium  [&:has([role=checkbox])]:pr-0">
                    Q
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium  [&:has([role=checkbox])]:pr-0">
                    total
                  </th>
                </tr>
              </thead>
              <tbody  className=" border-none text-[#c6c6c6]">
                {products?.map((cart) => (
                  <TableRow key={cart?._id} product={cart} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="flex justify-end title-color p-3">Total:<span className=""> ${totalPrice}</span></p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;

const TableRow = ({ product }) => {
  return (
    <tr className=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
        {product?.product?.split(" ")[0]}
      </td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">${product.price}</td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{product.quantity}</td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{product.totalPrice}</td>
    </tr>
  );
};
