import Form from "./Form";
import Header from "./Header";
import { useSelector } from "react-redux";
const Checkout = () => {
  const details = useSelector((state) => state.details.customerDetails);
  return (
    <>
      <Header />
      <Form />
    </>
  );
};

export default Checkout;
