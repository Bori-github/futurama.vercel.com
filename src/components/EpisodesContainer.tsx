import { Error, Loading, EpisodeCard } from '.';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Episodes } from '../types/Episodes';

interface EpisodeProps {
	name: string;
}

export const EpisodesContainer = ({ name }: EpisodeProps) => {
	const { data, error } = useFuturamaData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			{data.map((useFuturamaData: Episodes) => {
				return (
					<EpisodeCard key={`episode-list-${useFuturamaData.id}`} episodesData={useFuturamaData} />
				);
			})}
		</div>
	);
};
