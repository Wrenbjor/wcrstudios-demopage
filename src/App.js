import React from 'react';
import Logo from './Components/Molocules/Logo'
import Masthead from './Components/Molocules/masthead'
import Card from './Components/Molocules/card'

function App() {
  return (
    <div className='container'>
      <div>
        <Logo />
      </div>
      <div>
        <Masthead />
      </div>
      <div>
        <div class="content">
          <div class="row">
            <div class="col-sm">
              <Card />
            </div>
            <div class="col-sm">
            <Card />
            </div>
            <div class="col-sm">
            <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
