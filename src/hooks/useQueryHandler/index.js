import { useQuery } from '@tanstack/react-query';

import { useAxios } from '../../useAxios';

export const useQueryHandler = ({ pathname, url, paras }) => {
	const axios = useAxios();
	return useQuery([pathname], () =>
		axios({ url, paras }).then(data => data.data)
	);
};
