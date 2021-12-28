import styled from '@emotion/styled';
import { NextPage } from 'next';
import { InventoryContainer } from '../components';

const InventoryPage: NextPage = () => {
	const name = 'inventory';

	return (
		<Container>
			<Title>Inventory</Title>
			<InventoryContainer name={name} />
		</Container>
	);
};

export default InventoryPage;

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
