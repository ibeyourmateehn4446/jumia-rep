import { useState } from "react";
import { useFormik } from "formik";
import { FaCheckCircle } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";

import Input from "./Input";
import Select from "./Select";
import CheckoutSummary from "./CheckoutSummary";
import { validationSchema } from "./schema";
import { setCustomer } from "../Store/Features/CustomerDetails";
import AddressFilled from "./AddressFilled";
import Payment from "./Payment";
import Delivery from "./Delivery";

const Form = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details.customerDetails);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [addNumber, setAddNumber] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");

  //THIS HANDLES THE VALIDATION OF CUSTOMER DETAILS FORM
  const [validationAttempt, setValidationAttempt] = useState(false);
  //THIS HANDLES THE VALIDATION OF DELIVERY SECTION FORM
  const [deliveryAttempt, setDeliveryAttempt] = useState(false);
  //THIS HANDLES THE VALIDATION OF PAYMENT METHOD SECTION FORM
  const [paymentMethod, setPaymentMethod] = useState(false);

  const deliveryAttemptHandler = () => {
    setDeliveryAttempt(true);
  };

  const paymentMethodHandler = () => {
    setPaymentMethod(true);
  };

  const formValues = {
    firstName: "",
    lastName: "",
    number: "",
    addNumber: "",
    address: "",
    info: "",
  };

  const editHandler = () => {
    setValidationAttempt(false);
    // console.log('editing')
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setValidationAttempt(true);
    dispatch(setCustomer({ ...details, ...values }));
    console.log({ ...details, ...values });
    // actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formValues,
      validateOnBlur: true,
      validateOnChange: validationAttempt,
      validationSchema,
      onSubmit,
    });

  const cancelHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setNumber("");
    setAddNumber("");
    setAddress("");
    setInfo("");
  };

  return (
    <div className="px-[20px] lg:px-[50px] mt-[60px] md:mt-[84px] flex flex-col lg:flex-row gap-0 lg:gap-3">
      <form onSubmit={handleSubmit} className=" rounded-md mb-1 lg:mb-8 flex-1">
        {/* IF VALIDATION ATTEMPT IS TRUE DON'T SHOW THE FIRST FORM FORM AGAIN, INSTEAD SHOW THE FORM FILLED COMPONENT */}
        {validationAttempt ? (
          <AddressFilled edit={editHandler} />
        ) : (
          <div className="bg-white">
            <div className="flex items-center px-4 py-3 gap-2 border-b">
              <FaCheckCircle className="text-[#7A7A7F]" />
              <p className="text-[13px] md:text-sm font-medium">
                1. DELIVERY ADDRESS
              </p>
            </div>

            <div className="bg-white px-4 py-2  font-medium text-[13px] md:text-sm border-b-2">
              <h3>ADD NEW ADDRESS</h3>

              <div className="flex flex-col lg:flex-row lg:gap-10 w-full">
                <Input
                  id="firstName"
                  label="First Name"
                  placeholder="Enter your First Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  errorMessage={errors.firstName}
                  touched={touched.firstName}
                  className={
                    errors.firstName && touched.firstName
                      ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                      : ""
                  }
                />

                <Input
                  id="lastName"
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  errorMessage={errors.lastName}
                  touched={touched.lastName}
                  className={
                    errors.lastName && touched.lastName
                      ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                      : ""
                  }
                />
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:gap-10 w-full">
                <div className="w-full flex gap-3 md:gap-10 items-start justify-start">
                  <div className="flex flex-col gap-[9px] mt-2 ml-3 md:ml-5">
                    <h4 className="text-[#A3A3A3] text-xs">Prefix</h4>
                    <p>+234</p>
                  </div>
                  <Input
                    id="number"
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    type="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                    errorMessage={errors.number}
                    touched={touched.number}
                    className={
                      errors.number && touched.number
                        ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                        : ""
                    }
                  />
                </div>

                <div className="w-full flex gap-3 md:gap-10 items-start justify-start">
                  <div className="flex flex-col gap-[9px] mt-2 ml-3 md:ml-5">
                    <h4 className="text-[#A3A3A3] text-xs">Prefix</h4>
                    <p>+234</p>
                  </div>
                  <Input
                    id="addNumber"
                    label="Additional Phone Number"
                    placeholder="Enter your Additional Phone Number"
                    type="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.addNumber}
                    errorMessage={errors.addNumber}
                    touched={touched.addNumber}
                    className={
                      errors.addNumber && touched.addNumber
                        ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                        : ""
                    }
                  />
                </div>
              </div>

              <div className="mb-8">
                <Input
                  id="address"
                  label="Delivery Address"
                  placeholder="Enter your Address"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  errorMessage={errors.address}
                  touched={touched.address}
                  className={
                    errors.address && touched.address
                      ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                      : ""
                  }
                />
              </div>

              <div>
                <Input
                  id="info"
                  label="Additional Information"
                  placeholder="Enter Additional Information"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.info}
                />
              </div>

              <div className="">
                <Select />
              </div>
            </div>

            <div className="flex justify-end gap-3 px-4 py-2 md:p-5 ">
              <button
                type="button"
                className="rounded-md text-xs md:text-sm text-[#ff9900] font-semibold p-3 md:p-4 hover:bg-[#FCDBB9]"
                onClick={cancelHandler}
              >
                CANCEL
              </button>
              <button
                type="sumit"
                className="bg-[#ff9900] text-xs md:text-sm text-white font-semibold p-3 md:p-4 rounded-md hover:bg-[#E07E1B]"
              >
                SAVE
              </button>
            </div>
          </div>
        )}
        <>
          {validationAttempt ? (
            <Delivery onDeliveryAttempt={deliveryAttemptHandler} />
          ) : (
            <div className="bg-white mt-4">
              <div className="flex items-center px-4 py-3 gap-2 border-b">
                <FaCheckCircle className="text-[#7A7A7F]" />
                <p className="text-[13px] md:text-sm font-medium">
                  2. DELIVERY
                </p>
              </div>
            </div>
          )}
        </>

        <Payment
          onPayment={paymentMethodHandler}
          deliveryAttempt={deliveryAttempt}
        />
      </form>
      <div>
        <CheckoutSummary paymentValid={paymentMethod} />
      </div>
    </div>
  );
};

export default Form;
