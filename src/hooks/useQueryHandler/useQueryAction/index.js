import { useMutation } from '@tanstack/react-query';
import { useAxios } from '../../useAxios';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export const useRegisterMutation = () => {
	const navigate = useNavigate();
	const axios = useAxios();
	return useMutation({
		mutationKey: 'Auth',
		mutationFn: data =>
			axios({ url: 'api/auth/sign-up', method: 'POST', body: data }),
		onSuccess: data => {
			notification.success({ message: data.message });
			navigate('/verify');
		},
		onError: data => {
			notification.error({ message: data.message });
		},
	});
};

export const useLoginMutation = () => {
	const navigate = useNavigate();
	const axios = useAxios();

	return useMutation({
		mutationKey: 'Login',
		mutationFn: data =>
			axios({ url: 'api/auth/sign-in', method: 'POST', body: data }),
		onSuccess: data => {
			let token = data.data.token;
			localStorage.setItem('token', token);
			document.cookie = `user=${JSON.stringify(
				data.data
			)}; expires=Thu, 10 March 2025 17:00:00 UTC`;
			notification.success({ message: 'Tizimga muvaffaqiyatli kirdingiz!' });
			navigate('/');
		},
		onError: data => {
			notification.error({ message: data.message });
		},
	});
};

export const useVerifyMutation = () => {
	const navigate = useNavigate();
	const axios = useAxios();

	return useMutation({
		mutationKey: 'Verify',
		mutationFn: data =>
			axios({ url: 'api/auth/verify', method: 'POST', body: data }),
		onSuccess: data => {
			let token = data.data.token;
			localStorage.setItem('token', token);
			document.cookie = `user=${JSON.stringify(
				data.data
			)}; expires=Thu, 10 March 2025 17:00:00 UTC`;
			notification.success({ message: "Muvafaqqiyatli ro'yxatdan o'tdingiz" });
			navigate('/login'); // Change here to Login
		},

		onError: data => {
			notification.error({ message: data.message });
		},
	});
};
