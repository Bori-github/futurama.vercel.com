import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../contants';
import { Error, Loading, CastCard } from '.';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Cast } from '../types/Cast';

interface CastProps {
	name: string;
}

export const CastContainer = ({ name }: CastProps) => {
	const { data, error } = useFuturamaData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			{data.map((useFuturamaData: Cast) => {
				return <CastCard key={`cast-list-${useFuturamaData.id}`} castData={useFuturamaData} />;
			})}
		</Container>
	);
};

const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	padding: 30px 0;

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
		grid-template-columns: repeat(5, 1fr);
	}
`;
