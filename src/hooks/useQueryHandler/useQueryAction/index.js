/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAxios } from '../../useAxios';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

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
			const now = new Date();
			now.setHours(now.getHours() + 2);
			document.cookie = `user=${JSON.stringify(
				data.data
			)}; expires=${now.toUTCString()}`;
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
			const now = new Date();
			now.setHours(now.getHours() + 2);
			document.cookie = `user=${JSON.stringify(
				data.data
			)}; expires=${now.toUTCString()}`;
			notification.success({ message: "Muvafaqqiyatli ro'yxatdan o'tdingiz" });
			navigate('/login');
		},
		onError: data => {
			notification.error({ message: data.message });
		},
	});
};

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

const UseEditMutationCache = () => {
	const queryClient = useQueryClient();

	return ({ id, data }) => {
		queryClient.setQueryData('user', oldData => {
			if (oldData) {
				return oldData.map(value =>
					value.id === id ? { ...value, data } : value
				);
			} else {
				return [];
			}
		});
	};
};

export const useHandler = () => {
	const axios = useAxios();
	const editUser = UseEditMutationCache();
	const editHandler = async data => {
		try {
			editUser({ id: data.id, data });
			await axios({
				url: 'api/auth/edit',
				method: 'POST',
				body: data,
			}).then(response => {
				console.log(response);
				notification.success({ message: 'Chotki' });
			});
		} catch (error) {
			notification.error({ message: 'Nimadir xato ketti' });
		}
	};

	return { editHandler };
};

export const useForgotPasswordMutation = () => {
	const navigate = useNavigate();
	const axios = useAxios();

	return useMutation({
		mutationKey: 'ForgotPassword',
		mutationFn: data =>
			axios({ url: 'api/auth/verify-email', method: 'POST', body: data }),
		onSuccess: () => {
			notification.success({ message: 'Reset kodi yuborildi!' });
			navigate('/verify-sms');
		},
		onError: data => {
			notification.error({ message: data.message });
		},
	});
};

export const useVerifyEmailMutation = () => {
	const navigate = useNavigate();
	const axios = useAxios();

	return useMutation({
		mutationKey: 'Verify',
		mutationFn: data =>
			axios({ url: 'api/auth/verify-user', method: 'POST', body: data }),
		onSuccess: () => {
			notification.success({ message: 'Kod tasdiqlandi!' });
			navigate('/change-password');
		},
		onError: data => {
			notification.error({ message: data.message });
		},
	});
};

export const useChangePasswordMutation = () => {
	const navigate = useNavigate();
	const axios = useAxios();

	return useMutation({
		mutationKey: 'ChangePassword',
		mutationFn: data =>
			axios({
				url: 'api/auth/change-forgot-password',
				method: 'POST',
				body: data,
			}),
		onSuccess: () => {
			notification.success({ message: 'Parol muvaffaqiyatli o‘zgartirildi!' });
			navigate('/login');
		},
		onError: data => {
			notification.error({ message: data.message });
		},
	});
};
