import { NextPage } from 'next';
import { EpisodesContainer } from '../components/EpisodesContainer';

const EpisodesPage: NextPage = () => {
	const name = 'episodes';

	return (
		<div>
			<h1>Episodes</h1>
			<EpisodesContainer name={name} />
		</div>
	);
};

export default EpisodesPage;
