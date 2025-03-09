import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	return (
		<section className='w-[70%] h-screen flex items-center justify-center flex-col m-auto'>
			<h1 className='text-2xl py-5'>What's up man</h1>
			<Button onClick={() => navigate('/register')} size='large' type='primary'>
				Click me and regist again
			</Button>
		</section>
	);
};

export default Dashboard;
