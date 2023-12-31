import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* index is attribute which says index="true" when we match parent / it should render home as initail */}
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes> //this Routes and Route are able to connect to the url and render the appropriate page becaus eit is nested inside BrowserRouter
  );
};

export default App;
