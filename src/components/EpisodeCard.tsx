import styled from '@emotion/styled';
import { Episodes } from '../types/Episodes';

interface EpisodesProps {
	episodesData: Episodes;
}

export const EpisodeCard = ({ episodesData }: EpisodesProps) => {
	const { number, title, desc } = episodesData;
	return (
		<Container>
			<EpisodeNum>{number}</EpisodeNum>
			<EpisodeTitle>{title}</EpisodeTitle>
			<p>{desc}</p>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	margin-bottom: 20px;
	padding: 10px 20px;
	border-radius: 0 20px 20px 20px;
	background-color: #fff;
`;

const EpisodeNum = styled.span`
	position: absolute;
	top: 10px;
	left: 0;
	padding: 3px 12px;
	border-radius: 0 20px 20px 0;
	background-color: #333;
	color: #fff;
	font-size: 14px;
`;

const EpisodeTitle = styled.p`
	padding-top: 15px;
	color: #c84b31;
	font-size: 20px;
`;
