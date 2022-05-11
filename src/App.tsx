import SignIn from "./components/SignIn"
import{ Header} from "./components/SignUp"
import Home from "./components/Home"

import { BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </h1>
  )
}