import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../contants';
import { Inventory } from '../types/Inventory';

interface InventoryProps {
	inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
	const { title, category, description, price, stock } = inventoryData;

	return (
		<Container>
			<Category>{category}</Category>
			<ProductTitle>{title}</ProductTitle>
			<ProductDesc>{description}</ProductDesc>
			<ProductStock>stock : {stock}</ProductStock>
			<ProductPrice>&#36; {price}</ProductPrice>
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

const Category = styled.span`
	position: absolute;
	top: 10px;
	left: 0;
	padding: 3px 12px;
	border-radius: 0 20px 20px 0;
	background-color: #333;
	color: #fff;
	font-size: 12px;
`;

const ProductTitle = styled.p`
	margin: 10px 0;
	padding-top: 15px;
	font-size: 18px;
`;

const ProductDesc = styled.p`
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	padding-bottom: 3px;
	margin: 5px 0 40px;
	font-size: 14px;
`;

const ProductStock = styled.span`
	position: absolute;
	left: 20px;
	bottom: 15px;
	font-size: 14px;
`;

const ProductPrice = styled.span`
	position: absolute;
	right: 0;
	bottom: 15px;
	padding: 3px 10px 3px 20px;
	border-radius: 20px 0 0 20px;
	background-color: #c84b31;
	color: #fff;
`;
