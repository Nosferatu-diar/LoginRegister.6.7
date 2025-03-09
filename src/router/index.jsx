import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/auth/register';
import Dashboard from '../pages/dashboard';
import Login from '../pages/auth/login';
import Verify from '../pages/auth/verify';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/verify',
		element: <Verify />,
	},
]);
