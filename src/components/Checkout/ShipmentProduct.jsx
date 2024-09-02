const ShipmentProduct = ({ item }) => {
  return (
    <div className="px-2 mt-2 flex items-center gap-2">
      <img src={item.imageURL} alt="product" className="h-16 w-16" />
      <div className="flex flex-col">
        <p className="text-xs">{item.title}</p>
        <p className="text-xs">QTY: {item.quantity}</p>
      </div>
    </div>
  );
};

export default ShipmentProduct;
