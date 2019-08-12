import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './exercises/HelloWorld';
import ToggleLike from './exercises/ToggleLike';
import Counter from './exercises/Counter';
import { continueStatement } from '@babel/types';

//import * as HelloWord..... > usar quando não tem default

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld 
          name="Logan" 
          company="Heroway"
          since="{2018}"
        /> */}
        {/* <ToggleLike defaultLiked={true} /> */}
        <Counter cont={0}/>
      </header>
    </div>
  );
}

export default App;
