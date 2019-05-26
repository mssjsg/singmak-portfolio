import React from 'react';

import AppNavBar from './component/AppNavBar';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <div className="sticky-top">
        <AppNavBar />
      </div>
      <Main />
    </div>
  );
}

export default App;
