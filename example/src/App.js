import React from 'react';

import { Popup } from 'react-popup-tis';
import 'react-popup-tis/dist/index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Title'>
        Popup Tis
      </div>
      <Popup
        className='Popup'
        msg='Visit GitHub'
        darkMode={false}
      >
        <a href='http://github.com/'>
          GitHub
        </a>
      </Popup>
    </div>
  );
};

export default App;
