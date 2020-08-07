import React from 'react';
import { Header } from  './components/Header/Header';
import FirstPage from './containers/FirstPage/FirstPage'

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
		<GlobalProvider>
			<div className="App">
				<Header />
				<div className="page1">
					<FirstPage />
				</div>
			</div>
		</GlobalProvider>
	);
}

export default App;
