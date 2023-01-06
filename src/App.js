import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
import Students from "./Components/Students/Students";
import Form from "./Components/Contacts/Form";

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
