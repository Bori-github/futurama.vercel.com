import styled from '@emotion/styled';
import { NextPage } from 'next';
import { EpisodesContainer } from '../components/EpisodesContainer';

const EpisodesPage: NextPage = () => {
	const name = 'episodes';

	return (
		<Container>
			<Title>Episodes</Title>
			<EpisodesContainer name={name} />
		</Container>
	);
};

export default EpisodesPage;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 30px;
`;

const Title = styled.h3`
	position: relative;
	padding: 5px;
	border-bottom: 1px solid #000;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: -5px;
		left: 0;
		border-bottom: 1px solid #000;
	}
`;
