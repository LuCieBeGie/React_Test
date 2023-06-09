import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Contacts from "../pages/Contacts/Contacts"
import Projects from "../pages/Projects/Projects"
import Skills from "../pages/Skills/Skills"
import Home from "../pages/Home/Home"

function Router() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/React_Test' element={<Header />}>
                    <Route path='/React_Test' element={<Home />} />
                    <Route path='/React_Test/contacts' element={<Contacts />} />
                    <Route path='/React_Test/projects' element={<Projects />} />
                    <Route path='/React_Test/skills' element={<Skills />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}
export default Router