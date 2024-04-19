import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';
import PageNotFound from './components/PageNotFound';
import data from './data/data.json';

const App = () => {
  const { header, pages, footer } = data;

  return (
    <HashRouter>
      <Header {...header} />
      <div className="page-wrapper">
        <Routes>
          {pages.map(item => (
            <Route
              key={item.path}
              path={item.path}
              element={<Page {...item} />}
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
