import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

import "./styles/App.scss";
import "./styles/mediaquery.scss"



function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="*" element={<div>Page not found 404</div>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/> 
      {/* /link/:id can extract the id from link */}
    </Routes>
    <Footer/>
  </Router>
}

export default App;
