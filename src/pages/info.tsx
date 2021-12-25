import { NextPage } from 'next';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/Info';

const InfoPage: NextPage = () => {
	const { data, error } = useFuturamaData('info');

	if (error) return <div>에러가 발생했습니다.</div>;
	if (!data) return <div>잠시만 기다려 주세요.</div>;

	return (
		<div>
			<h1>Info</h1>
			<main>
				{data.map((infoData: Info) => {
					const { id, synopsis, yearsAired, creators } = infoData;

					return (
						<div key={`info-${id}`}>
							<strong>방영 기간 : {yearsAired}</strong>
							<ul>
								<li>{creators[0].name}</li>
								<li>{creators[1].name}</li>
							</ul>
							<p>{synopsis}</p>
						</div>
					);
				})}
			</main>
		</div>
	);
};

export default InfoPage;
