import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Inventory } from '../types/Inventory';

const InventoryPage: NextPage = () => {
	const { data, error } = useFuturamaData('inventory');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Inventory</h1>
			{data.map((inventoryData: Inventory) => {
				const { id, title, category, slogan, price, stock } = inventoryData;
				return (
					<div key={`inventory-${id}`}>
						<strong>{title}</strong>
						<p>
							<span>{price}</span>
							<span> {stock}</span>
						</p>
						<span>Category : {category}</span>
						<p>{slogan}</p>
					</div>
				);
			})}
		</div>
	);
};

export default InventoryPage;
