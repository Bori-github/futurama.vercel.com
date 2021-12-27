import styled from '@emotion/styled';
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
		<Container>
			{data.map((useFuturamaData: Episodes) => {
				return (
					<EpisodeCard key={`episode-list-${useFuturamaData.id}`} episodesData={useFuturamaData} />
				);
			})}
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
`;
