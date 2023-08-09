import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import MyHistory from './pages/Patient/MyHistory';
import HistoryDetail from './pages/Patient/HistoryDetail';
import DrugDetail from './pages/Patient/DrugDetail';
import CategoryPage from './pages/CategoryPage';
import SurgeryDetail from './pages/Patient/SurgeryDetail';
import NftRenewalPage from './pages/NftRenewalPage';


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/myhistory" element={<MyHistory/>}/>
                    <Route path="/historydetail" element={<HistoryDetail/>}/>
                    <Route path="/drugdetail" element={<DrugDetail/>}/>
                    <Route path="/category" element={<CategoryPage/>}/>
                    <Route path="/surgerydetail" element={<SurgeryDetail/>}/>
                    <Route path='/nftrenewal' element={<NftRenewalPage/>}/>

                </Routes>
            </Router>
        </>
    );
}

export default App;
