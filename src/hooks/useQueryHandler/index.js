import { useQuery } from '@tanstack/react-query';
import { useAxios } from '../useAxios';

export const useQueryHandler = ({ pathname, url, params }) => {
	const axios = useAxios();

	return useQuery({
		queryKey: [pathname, params ?? {}],
		queryFn: async () => {
			const data = await axios({ url, params });
			return data ?? {};
		},
	});
};
