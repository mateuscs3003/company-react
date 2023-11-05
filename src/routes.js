import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company"
import Individual from "./pages/Individual";
import Update from "./pages/Update";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/new" element={  <Company/> }/>
                <Route path="/company/:cnpj" element={ <Individual/> } />
                <Route path="/:cnpj/update" element={ <Update/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;