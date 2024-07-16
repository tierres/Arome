import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './screens/Home/Home'
import { BecomeAMember } from './screens/BecomeAMember/BecomeAMember';
import { BuildYour } from './screens/BuildYour/BuildYour';
import { Cart } from './screens/Cart/Cart';
import { ProductPage } from './screens/ProductPage/ProductPage';
import { Teas } from './screens/Teas/Teas';
import { Utensils } from './screens/Utensils/Utensils';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path='/become-a-member' element={(<BecomeAMember />)} />
          <Route path="/build-your" element={(<BuildYour />)} />
          <Route path="/cart" element={(<Cart />)} />
          <Route path="/teas" element={(<Teas />)} />
          <Route path="/teas/:slug" element={(<ProductPage productType='teas' typeLabel='Chás' typeLink='/teas/' />)} />
          <Route path="/utensils" element={(<Utensils />)} />
          <Route path="/utensils/:slug" element={(<ProductPage 
            productType='utensils' 
            typeLabel='Utensílios' 
            typeLink='/utensils'/>)} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};


