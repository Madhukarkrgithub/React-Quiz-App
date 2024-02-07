
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage: "url(./ques1.png)" }} >
    <Header/>

    <Routes>
      <Route path="/" exact element={<Home/>}>
      </Route>
      <Route path="/quiz" exact element={<Quiz/>}>
      </Route>
      <Route path="/result" exact element={<Result/>}>
      </Route>
    </Routes>


    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
