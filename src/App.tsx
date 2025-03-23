// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import BestFriends from './pages/BestFriends';
// import Footer from './components/Layout/Footer';
// import Header from './components/Layout/Header';
// import Home from './pages/Home';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/bestfriends" element={<BestFriends />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import BestFriends from './pages/BestFriends';
import FoodExpert from './pages/FoodExpert';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodexpert" element={<FoodExpert />} />
        <Route path="/bestfriends" element={<BestFriends />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
