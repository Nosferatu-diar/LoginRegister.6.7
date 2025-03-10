import { Button, Form, Input } from 'antd';
import React from 'react';
import { useChangePasswordMutation } from '../../../hooks/useQueryHandler/useQueryAction';
import { LoadingOutlined } from '@ant-design/icons';

const ChangePassword = () => {
	const { isLoading, mutate } = useChangePasswordMutation();
	const email = localStorage.getItem('email');

	const onSubmit = values => {
		mutate({ ...values, email });
	};

	return (
		<section className='h-screen w-[50%] m-auto flex items-center justify-center flex-col'>
			<h1 className='text-2xl py-2'>Change Password</h1>
			<Form onFinish={onSubmit} className='w-full'>
				<Form.Item name='email' initialValue={email}>
					<Input className='h-[40px]' disabled />
				</Form.Item>
				<Form.Item
					name='new_password'
					rules={[{ required: true, message: 'Yangi parolni kiriting...!' }]}
				>
					<Input.Password className='h-[40px]' placeholder='Yangi parol...' />
				</Form.Item>
				<Form.Item
					name='confirm_password'
					rules={[{ required: true, message: 'Parolni tasdiqlang...!' }]}
				>
					<Input.Password
						className='h-[40px]'
						placeholder='Parolni tasdiqlang...'
					/>
				</Form.Item>
				<Button
					disabled={isLoading}
					className='w-full !h-[40px]'
					type='primary'
					htmlType='submit'
				>
					{isLoading ? <LoadingOutlined /> : 'Change Password'}
				</Button>
			</Form>
		</section>
	);
};

export default ChangePassword;
