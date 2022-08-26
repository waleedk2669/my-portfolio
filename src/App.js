import logo from './logo.svg';
import './App.css';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar';
import { Header } from './components/header';
import { AboutUs } from './components/aboutus';
import { Services } from './components/services';
import { Blog } from './components/blog';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { NewsLetter } from './components/newsletter';
import { Portfolio } from './components/portfolio';
import { Review } from './components/review';

function App() {
  return (
    <Stack gap={0} className = "fluid" style={{background:'#02092D', color:'white'}}>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <NewsLetter />
      <Portfolio />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </Stack>
  );
}

export default App;
