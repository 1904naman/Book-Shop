import { Routes , Route} from "react-router-dom";

//components
import MyNavbar from "./components/Navbar";

//Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Display";
import OrdersPage from "./pages/Orders";
import ViewOrderDetails from "./pages/ViewOrderPade";
import HelpPage from "./pages/Help";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <div>
      <MyNavbar/>
    <Routes>
      <Route path ="/home" element={<HomePage/>}/>
      <Route path ="/login" element={<LoginPage/>}/>
      <Route path ="/help" element={<HelpPage/>}/>
      <Route path ="/register" element={<RegisterPage/>}/>
      <Route path ="/book/list" element={<ListingPage/>}/>
      <Route path ="/book/view/:bookId" element={<BookDetailPage/>}/>
      <Route path ="/book/orders" element={<OrdersPage/>}/>
      <Route path ="/books/orders/:bookId" element={<ViewOrderDetails/>}/>
    </Routes>
    </div>

  );
}

export default App;
