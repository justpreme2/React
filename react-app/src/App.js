import React from 'react';

import Navbar from './features/Navbar';
import Container  from './Container/Container';
import Home from './features/home';
 function App() {
  return (
          <div class="App">
            <Navbar />
            < Container><Home/></Container>
         
          </div>
  );
}

export default App;
