import { useLocation } from "react-router-dom";

function Payment() {
  const { state } = useLocation();
  console.log(state);
  return <h1 className="text-center font-bold text-2xl mt-20">ORDER PAGE</h1>;
}

export default Payment;
