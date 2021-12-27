import styled from '@emotion/styled';
import Link from 'next/link';
import { ROUTES } from '../../contants';

interface ROUTE {
	ID: number;
	PATH: string;
	LABEL: string;
	SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
	return (
		<header>
			<HomeTitle>
				Welcome to
				<Link href="/">
					<a>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/250px-Futurama_1999_logo.svg.png"
							alt="Futurama"
						/>
					</a>
				</Link>
			</HomeTitle>
			<nav>
				<MenuList>
					{ROUTES.map((routeObject: ROUTE) => {
						return (
							<li key={`main-menu-${routeObject.ID}`}>
								<Link href={routeObject.PATH}>
									<a>{routeObject.LABEL}</a>
								</Link>
							</li>
						);
					})}
				</MenuList>
			</nav>
		</header>
	);
};

const HomeTitle = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	padding: 30px 0;
	color: #fff;
	font-size: 20px;
	letter-spacing: 1px;
	text-align: center;
`;

const MenuList = styled.ul`
	display: flex;
`;
