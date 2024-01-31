import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home/Home'

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={(<Home />)} />
          
          <Route path='/*' element={<Home />} />
        </Routes>
       </Router>
    </div>
  );
};


