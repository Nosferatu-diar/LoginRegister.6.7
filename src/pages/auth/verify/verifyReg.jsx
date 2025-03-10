import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useVerifyMutation } from '../../../hooks/useQueryHandler/useQueryAction';
import { LoadingOutlined } from '@ant-design/icons';

const VerifyCode = () => {
	const [code, setCode] = useState('');
	const { mutate, isLoading } = useVerifyMutation();
	const onChange = text => {
		setCode(text);
	};
	const sharedProps = {
		onChange,
	};
	const verify = () => {
		let email = localStorage.getItem('email');
		mutate({ email, code });
	};

	return (
		<div className='w-[300px] h-screen flex items-center justify-center flex-col m-auto'>
			<h1 className='text-center text-2xl'>Kelgan code ni tering !</h1>
			<div className='flex items-center flex-col gap-3 mt-5'>
				<Input.OTP formatter={str => str.toUpperCase()} {...sharedProps} />
				<Button
					disabled={isLoading}
					onClick={verify}
					type='primary'
					className='w-full'
				>
					{isLoading ? <LoadingOutlined /> : 'Tasdiklash'}
				</Button>
			</div>
		</div>
	);
};

export default VerifyCode;
