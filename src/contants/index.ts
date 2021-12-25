export const FUTURAMA_API_ENDPOINT = 'https://api.sampleapis.com/futurama/';

export const MEDIA_QUERY_END_POINT = {
	MOBILE: '640px',
	TABLET: '1280px',
	DESKTOP: '1920px',
	LARGE: '2560px',
};

export const ROUTES = [
	{
		ID: 0,
		PATH: '/futurama',
		LABEL: '퓨처라마',
		SUBS: [
			{
				ID: 0,
				PATH: '/info',
				LABEL: '기본정보',
				ORDER: 0,
			},
			{
				ID: 1,
				PATH: '/characters',
				LABEL: '등장인물',
				ORDER: 1,
			},
			{
				ID: 2,
				PATH: '/cast',
				LABEL: '출연',
				ORDER: 2,
			},
			{
				ID: 3,
				PATH: '/episodes',
				LABEL: '회차정보',
				ORDER: 3,
			},
			{
				ID: 4,
				PATH: '/questions',
				LABEL: '퓨처라마 퀴즈',
				ORDER: 4,
			},
			{
				ID: 5,
				PATH: '/inventory',
				LABEL: '퓨처라마 물품목록',
				ORDER: 5,
			},
		],
	},
];
