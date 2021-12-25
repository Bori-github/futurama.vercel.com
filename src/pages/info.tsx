import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/Info';

const InfoPage: NextPage = () => {
	const { data, error } = useFuturamaData('info');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Info</h1>
			<main>
				{data.map((infoData: Info) => {
					const { id, synopsis, yearsAired, creators } = infoData;
					return (
						<div key={`info-${id}`}>
							<p>이미지 주소 가져와서 넣는 방법?</p>
							<strong>방영 기간 : {yearsAired}</strong>
							<ul>
								<li>이거 어떻게 작성했더라..</li>
								<li>creators</li>
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
