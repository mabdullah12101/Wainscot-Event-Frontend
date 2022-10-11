import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";

import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Counter from "./pages/Counter/functionalComponent";

import NotFound from "./pages/NotFound";

import PublicRoute from "./utils/routes/publicRoute";
import PrivateRoute from "./utils/routes/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* MAIN */}
        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}>
          <Route path="/detail/:eventId" element={<Detail />} />
          <Route path="/order/:eventId" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>{/* {...} */}</Route>

        {/* PUBLIC ROUTE */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
