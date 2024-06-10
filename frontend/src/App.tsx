import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './screens/Home/Home'
import { BecomeAMember } from './screens/BecomeAMember/BecomeAMember';
import { BuildYour } from './screens/BuildYour/BuildYour';
import { Cart } from './screens/Cart/Cart';
import { ProductDetails } from './screens/ProductDetails/ProductDetails';
import { Teas } from './screens/Teas/Teas';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const App = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router>
          <Routes>
            <Route path="/" element={(<Home />)} />
            <Route path='/become-a-member' element={(<BecomeAMember />)} />
            <Route path="/build-your" element={(<BuildYour />)} />
            <Route path="/cart" element={(<Cart />)} />
            <Route path="/teas" element={(<Teas />)} />
            <Route path="/teas/:slug" element={(<ProductDetails />)} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </Router>
       </SkeletonTheme>
    </div>
  );
};


