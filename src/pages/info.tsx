import styled from '@emotion/styled';
import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/Info';

interface CREATOR {
	name: string;
	url: string;
}

const InfoPage: NextPage = () => {
	const { data, error } = useFuturamaData('info');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<InfoContainer>
			<h3>Futurama info</h3>
			<main>
				{data.map((infoData: Info) => {
					const { id, synopsis, yearsAired, creators } = infoData;
					return (
						<div key={`info-${id}`}>
							<img
								src="https://w.namu.la/s/c30d9b068104918e6beb1cb3454b655659ac7fc28c959939f9d008f7d460821797714195fb71dfd3e3c378b14fc0a0c3f8fb89bfe48c77ca0f0d7d181245d1dd006f12c188f0b3da872b6138f4be4a3860ec0ea0ec99a8f2172b73f3422f84d9e802e2bc94ece8d7ffe0b04b0ba7b9cb"
								alt=""
							/>
							<dl>
								<dt>Year-aired</dt>
								<dd>{yearsAired}</dd>
								<dt>Creators</dt>
								{data[0].creators.map((creator: CREATOR) => {
									console.log(creator);
									return <span key={`name${creator.name}`}>{creator.name}</span>;
								})}
							</dl>
							<p>{synopsis}</p>
						</div>
					);
				})}
			</main>
		</InfoContainer>
	);
};

export default InfoPage;

const InfoContainer = styled.section``;
