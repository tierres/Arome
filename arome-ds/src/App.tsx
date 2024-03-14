import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home/Home'
import { BecomeAMember } from './screens/BecomeAMember/BecomeAMember';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const App = () => {
  return (
    <div>
      <Router>
        {/*colocar o HEADER aqui */}
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path='/becomeamember' element={(<BecomeAMember />)} />
          <Route path='/*' element={<Home />} />
        </Routes>
        {/* FOOTER */}
       </Router>
    </div>
  );
};


