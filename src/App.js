import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
<<<<<<< HEAD
import Students from "./Components/Students/Students";
import Form from "./Components/Contacts/Form";
=======
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";
>>>>>>> 9124b4b58b4f11c7fa8748f42afeaf4ede49ea2a

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />}/>
        <Route path="contact-us" element={<Form />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms and conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
