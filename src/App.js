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

  const renderComponent = item => {
    switch (item.path) {
      case '/':
        return <HomePage {...item} />;
      case '/projects':
        return <ProjectsPage {...item} />;
      case '/contact':
        return <ContactPage {...item} />;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <Header {...header} />
      <Routes>
        {pages.map(item => (
          <Route
            key={item.path}
            path={item.path}
            element={renderComponent(item)}
          />
        ))}
      </Routes>
      <Footer {...footer} />
    </BrowserRouter>
  );
};

export default App;
