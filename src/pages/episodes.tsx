import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Episodes } from '../types/Episodes';

const EpisodesPage: NextPage = () => {
	const { data, error } = useFuturamaData('episodes');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Episodes</h1>
			<main>
				{data.map((episodesData: Episodes) => {
					const { id, number, title, originalAirDate, desc } = episodesData;

					return (
						<div key={`episodes-${id}`}>
							<p>
								<span>{number}</span>
								<span>{title}</span>
							</p>
							<span>{originalAirDate}</span>
							<p>{desc}</p>
						</div>
					);
				})}
			</main>
		</div>
	);
};

export default EpisodesPage;
