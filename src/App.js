import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
import Students from "./Components/Students/Students";
import Employers from "./Components/Employers/Employers";
import Events from "./Components/Events/Events";
import Form from "./Components/Contacts/Form";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />}/>
        <Route path="/employers" element={<Employers />}/>
        <Route path="contact-us" element={<Form />} />
        <Route path="/events" element={<Events />}/>
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms and conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
