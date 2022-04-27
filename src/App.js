import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Header from './components/Header';
import ContactPage from './components/Pages/ContactPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import Footer from './components/Footer';
import data from './data/data.json';

const App = () => {
  const { header, pages, footer } = data;
  const { projects } = pages;

  return (
    <BrowserRouter>
      <Header {...header} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage {...projects} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer {...footer} />
    </BrowserRouter>
  );
};

export default App;
