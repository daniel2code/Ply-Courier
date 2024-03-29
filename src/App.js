import "./App.css";
import Home from "./pages/home/home";
import Hero from "./pages/home/hero/hero";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/services";
import Tracker from "./pages/tracker/tracker";
import Shipment from "./pages/shipment/shipment";
import AdminHome from "./pages/admin/home/ahome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./pages/admin/orders/orders";
import Transaction from "./pages/admin/transaction/transaction";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/transactions" element={<Transaction />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
