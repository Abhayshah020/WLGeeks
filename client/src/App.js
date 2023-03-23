import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/userDashboard/home'
import AboutUs from './containers/userDashboard/aboutUs';
import Demo from './containers/userDashboard/demo';
import Preview from './containers/userDashboard/preview';
import PricePage from './containers/userDashboard/pricePage';
import Features from './containers/userDashboard/features';
import Register from './containers/userDashboard/auth/register';
import Login from './containers/userDashboard/auth/login';
import Code from './containers/userDashboard/auth/code';
import AdminDashboard from './containers/adminDashboard/adminDashboard';
import { useSelector } from "react-redux";
import NavBar from './components/navBar';

const App = () => {
  const { email } = useSelector(state => state.user)
  if (email === "abhayshah013@gmail.com") {
    return <><AdminScreens /></>
  } else {
    return <><NavBar/><UserScreens /></>
  }
}

const UserScreens = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/pricePage" element={<PricePage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/singUp" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verification" element={<Code />} />
    </Routes>
  )
}

const AdminScreens = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
    </Routes>
  )
}

export default App;
