import React from 'react';
import { Button, Form, Input, Skeleton } from 'antd';
import { useQueryHandler } from '../../hooks/useQueryHandler';
import { useHandler } from '../../hooks/useQueryHandler/useQueryAction';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
	const { data, isLoading, isError } = useQueryHandler({
		url: 'api/auth/user',
		pathname: 'user',
	});
	const user = data?.data;

	const { editHandler } = useHandler();
	const editAddress = e => {
		editHandler(e);
	};
	const navigate = useNavigate();
	return (
		<div className='h-screen w-[500px] m-auto flex items-center justify-center'>
			<div>
				{isLoading || isError ? (
					<Skeleton />
				) : (
					<Form
						onFinish={editAddress}
						fields={[
							{ name: ['first_name'], value: user?.first_name },
							{ name: ['last_name'], value: user?.last_name },
							{ name: ['email'], value: user?.email },
							{ name: ['address'], value: user?.address },
						]}
						className='!w-[500px]'
					>
						<Form.Item
							name='first_name'
							rules={[{ required: true, message: 'Ismingizni kiriting...!' }]}
						>
							<Input
								className='h-[40px]'
								placeholder='Ismingizni kiriting...'
							/>
						</Form.Item>
						<Form.Item
							name='last_name'
							rules={[
								{ required: true, message: 'Familyangizni kiriting...!' },
							]}
						>
							<Input
								className='h-[40px]'
								placeholder='Familyangizni kiriting...'
							/>
						</Form.Item>
						<Form.Item
							name='email'
							rules={[{ required: true, message: 'Emailingizni kiriting...!' }]}
						>
							<Input
								className='h-[40px]'
								placeholder='Emailingizni kiriting...'
							/>
						</Form.Item>
						<Form.Item
							name='address'
							rules={[{ required: true, message: 'Address kiriting...!' }]}
						>
							<Input className='h-[40px]' placeholder='Address kiriting...' />
						</Form.Item>
						<Button
							className='w-full h-[40px]'
							type='primary'
							htmlType='submit'
						>
							Save
						</Button>
					</Form>
				)}
				<Button
					onClick={() => {
						navigate('/login');
						localStorage.removeItem('token');
					}}
					size='large'
					type='primary'
					danger
					className='!flex !mt-5 !items-center !justify-center'
				>
					LogOut
				</Button>
			</div>
		</div>
	);
};

export default Dashboard;
