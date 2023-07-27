import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>

            <Route path='user'>
                <Route path=":login" element={<User/>}/>
            </Route>

            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>

    );
}

export default App;
