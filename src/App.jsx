import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";

const Shop = () => {
  return <h1>I am a Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* index is attribute which says index="true" when we match parent / it should render home as initail */}
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes> //this Routes and Route are able to connect to the url and render the appropriate page becaus eit is nested inside BrowserRouter
  );
};

export default App;
