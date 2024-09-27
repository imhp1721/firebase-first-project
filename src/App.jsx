import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";
import CreatePage from "./pages/CreatePage";

function App() {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<UpdatePage />} />
                    <Route path="/contact" element={<CreatePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
