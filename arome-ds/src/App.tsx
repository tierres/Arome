import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home/Home'
import { BecomeAMember } from './screens/BecomeAMember/BecomeAMember';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path='/becomeamember' element={(<BecomeAMember />)} />
          <Route path='/*' element={<Home />} />
        </Routes>
       </Router>
    </div>
  );
};


