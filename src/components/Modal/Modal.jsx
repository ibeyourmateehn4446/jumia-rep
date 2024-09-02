import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { setSaveRemove } from "../Store/Features/CartItemSlice";

const BackDrop = (props) => {
  const dispatch = useDispatch()

  return (
    <div
      className="fixed z-30 top-0 left-0 w-full h-[100vh] bg-backDrop"
      onClick={() => dispatch(setSaveRemove(false))}
    ></div>
  );
};

const ModalOverlay = (props) => {
  const { children } = props;
  return (
    <div
      className="fixed top-[35vh] left-[5%] md:left-[25%] w-[90%] md:w-max lg:w-[600px] bg-white p-[1rem] rounded-md shadow-lg z-30"
    >
      <div className="">{children}</div>
    </div>
  );
};

const portalTo = document.getElementById("overlays");

const Modal = (props) => {
  const { children } = props;
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalTo)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalTo)}
    </>
  );
};

export default Modal;
