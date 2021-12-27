import { Episodes } from '../types/Episodes';

interface EpisodesProps {
	episodesData: Episodes;
}

export const EpisodeCard = ({ episodesData }: EpisodesProps) => {
	const { number, title, desc } = episodesData;
	return (
		<div>
			<span>{number}</span>
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);
};
