import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ContactPage from './components/Pages/ContactPage';
import HomePage from './components/Pages/HomePage';
import ProjectsPage from './components/Pages/ProjectsPage';
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
        return (
          <div>Page with url &quot;{item.path}&quot; is not created yet!</div>
        );
    }
  };

  return (
    <HashRouter>
      <Header {...header} />
      <div className="page-wrapper">
        <Routes>
          {pages.map(item => (
            <Route
              key={item.path}
              path={item.path}
              element={renderComponent(item)}
            />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer {...footer} />
    </HashRouter>
  );
};

export default App;
