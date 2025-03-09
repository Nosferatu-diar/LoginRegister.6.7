import { Button, Form, Input } from 'antd';
import React from 'react';
import { useRegisterMutation } from '../../../hooks/useQueryHandler/useQueryAction';
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const { isLoading, mutate } = useRegisterMutation();
	const signIn = values => {
		mutate(values);
		localStorage.setItem('email', values.email);
	};
	return (
		<section className='h-screen w-[50%] m-auto  flex items-center justify-center flex-col'>
			<h1 className='text-2xl py-2 '>Register</h1>
			<Form onFinish={signIn} className='w-full'>
				<Form.Item
					name='first_name'
					rules={[{ required: true, message: 'Ismingizni kiriting...!' }]}
				>
					<Input className='h-[40px]' placeholder='Ismingizni kiriting...' />
				</Form.Item>
				<Form.Item
					name='last_name'
					rules={[{ required: true, message: 'Familyangizni kiriting...!' }]}
				>
					<Input className='h-[40px]' placeholder='Familyangizni kiriting...' />
				</Form.Item>
				<Form.Item
					name='email'
					rules={[{ required: true, message: 'Emailingizni kiriting...!' }]}
				>
					<Input className='h-[40px]' placeholder='Emailingizni kiriting...' />
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: 'Parolingizni kiriting...!' }]}
				>
					<Input.Password
						className='h-[40px]'
						placeholder='Parolingizni kiriting...'
					/>
				</Form.Item>
				<Button onClick={() => navigate('/login')} type='link'>
					already have an account
				</Button>
				<Button
					disabled={isLoading}
					className='w-full !h-[40px]'
					type='primary'
					htmlType='submit'
				>
					{isLoading ? <LoadingOutlined /> : 'Register'}
				</Button>
			</Form>
		</section>
	);
};

export default Register;
