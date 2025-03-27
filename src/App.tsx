import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Startup from './pages/Startup';
import Projects from './pages/Projects';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;