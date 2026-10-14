import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import PagePlaceholder from "./pages/PagePlaceholder";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<Stories />} />
            <Route path="/stories" element={<PagePlaceholder />} />
            <Route path="/categories" element={<PagePlaceholder />} />
            <Route path="/ranking" element={<PagePlaceholder />} />
            <Route path="/forum" element={<PagePlaceholder />} />
            <Route path="/vip" element={<PagePlaceholder />} />
            <Route path="/history" element={<PagePlaceholder />} />
            <Route path="/login" element={<PagePlaceholder />} />
            <Route path="/profile" element={<PagePlaceholder />} />
            <Route path="*" element={<PagePlaceholder />} />
        </Routes>
    );
}

export default App;