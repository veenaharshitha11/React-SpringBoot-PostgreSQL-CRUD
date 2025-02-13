import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"
import ListCustomerComponent from "./components/ListCustomerComponent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import CustomerComponent from "./components/CustomerComponent"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element = {<ListCustomerComponent />} />
          {/* http://localhost:3000/customers */}
          <Route path="/customers" element = {<ListCustomerComponent />}/>
          {/* http://localhost:3000/add-customer */}
          <Route path="/add-customer" element = {<CustomerComponent />}/>
          {/* http://localhost:3000/edit-customer/{id} */}
          <Route path="/edit-customer/:id" element = {<CustomerComponent />}/>
        </Routes>
        
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
