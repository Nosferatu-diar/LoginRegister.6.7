import { Button, Form, Input } from 'antd';
import React from 'react';
import { useForgotPasswordMutation } from '../../../hooks/useQueryHandler/useQueryAction';
import { LoadingOutlined } from '@ant-design/icons';

const ForgotPassword = () => {
	const { isLoading, mutate } = useForgotPasswordMutation();

	const onSubmit = values => {
		mutate(values);
	};

	return (
		<section className='h-screen w-[50%] m-auto flex items-center justify-center flex-col'>
			<h1 className='text-2xl py-2'>Forgot Password</h1>
			<Form onFinish={onSubmit} className='w-full'>
				<Form.Item
					name='email'
					rules={[{ required: true, message: 'Emailingizni kiriting...!' }]}
				>
					<Input className='h-[40px]' placeholder='Emailingizni kiriting...' />
				</Form.Item>
				<Button
					disabled={isLoading}
					className='w-full !h-[40px]'
					type='primary'
					htmlType='submit'
				>
					{isLoading ? <LoadingOutlined /> : 'wait'}
				</Button>
			</Form>
		</section>
	);
};

export default ForgotPassword;
