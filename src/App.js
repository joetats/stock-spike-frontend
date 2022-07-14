import NavBar from './components/layout/NavBar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';

const routes = [
  { url: '/puts', title: 'S&P 500 Puts' },
  { url: '/sectors', title: 'Sector ETF Momentum' },
];

function App() {
  return (
    <BrowserRouter>
      <NavBar links={routes} />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
