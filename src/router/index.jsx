import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/auth/register';
import Dashboard from '../pages/dashboard';
import Login from '../pages/auth/login';
import Verify from '../pages/auth/verify/verifyReg';
import ForgotPassword from '../pages/auth/forgotPassword';
import PrivetRoutes from '../components/private-routes';
import VerifyCode from '../pages/auth/verify/verifyCode';
import ChangePassword from '../pages/auth/changePassword/changePassword';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PrivetRoutes>
				<Dashboard />
			</PrivetRoutes>
		),
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
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
	},
	{
		path: '/verify-sms',
		element: <VerifyCode />,
	},
	{
		path: '/change-password',
		element: <ChangePassword />,
	},
]);
