import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Cast } from '../types/Cast';

const CastPage: NextPage = () => {
	const { data, error } = useFuturamaData('cast');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Cast</h1>
			<main>
				{data.map((castData: Cast) => {
					const { id, name, born } = castData;

					return (
						<div key={`cast-${id}`}>
							<p>{name}</p>
							<p>{born}</p>
						</div>
					);
				})}
			</main>
		</div>
	);
};

export default CastPage;
