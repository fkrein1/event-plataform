import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';
import { MenuContextProvider } from './context/MenuContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<MenuContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</MenuContextProvider>
		</ApolloProvider>
	</React.StrictMode>
);
