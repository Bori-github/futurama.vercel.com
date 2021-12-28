import styled from '@emotion/styled';
import { NextPage } from 'next';
import { CastContainer } from '../components/CastContainer';

const CastPage: NextPage = () => {
	const name = 'cast';

	return (
		<Container>
			<Title>Cast</Title>
			<CastContainer name={name} />
		</Container>
	);
};

export default CastPage;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
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
