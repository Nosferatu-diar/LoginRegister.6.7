import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { router } from './router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@ant-design/v5-patch-for-react-19';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
