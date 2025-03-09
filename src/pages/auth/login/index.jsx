import { Button, Form, Input } from 'antd';
import React from 'react';
import { useLoginMutation } from '../../../hooks/useQueryHandler/useQueryAction';
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { isLoading, mutate } = useLoginMutation();
	const navigate = useNavigate();
	const signIn = values => {
		mutate(values);
	};

	return (
		<section className='h-screen w-[50%] m-auto flex items-center justify-center flex-col'>
			<h1 className='text-2xl py-2 '>Login</h1>
			<Form onFinish={signIn} className='w-full'>
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
				<Button onClick={() => navigate('/register')} type='link'>
					Don't have an account
				</Button>
				<Button
					disabled={isLoading}
					className='w-full !h-[40px]'
					type='primary'
					htmlType='submit'
				>
					{isLoading ? <LoadingOutlined /> : 'Login'}
				</Button>
			</Form>
		</section>
	);
};

export default Login;
