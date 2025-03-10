import axios from 'axios';

export const useAxios = () => {
	const request = ({ url, method = 'GET', headers, body, params }) => {
		return axios({
			url: `${import.meta.env.VITE_BASE_URL}/${url}`,
			method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				...headers,
			},
			data: { ...body },
			params: {
				...params,
			},
		})
			.then(data => data.data)
			.catch(error => console.log(error));
	};

	return request;
};
