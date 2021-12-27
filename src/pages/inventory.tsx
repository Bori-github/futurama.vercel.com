import { NextPage } from 'next';
import { InventoryContainer } from '../components';

const InventoryPage: NextPage = () => {
	const name = 'inventory';

	return (
		<div>
			<h3>Inventory</h3>
			<InventoryContainer name={name} />
		</div>
	);
};

export default InventoryPage;
