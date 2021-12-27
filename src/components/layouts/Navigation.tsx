import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../contants';
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
			<Title>
				Welcome to
				<Link href="/">
					<a>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/250px-Futurama_1999_logo.svg.png"
							alt="Futurama"
							className="TitleImg"
						/>
					</a>
				</Link>
			</Title>

			<nav>
				<MenuList>
					{ROUTES.map((routeObject: ROUTE) => {
						return (
							<MenuItem key={`menu-${routeObject.ID}`}>
								<Link href={routeObject.PATH}>
									<a className="MenuLink">{routeObject.LABEL}</a>
								</Link>
							</MenuItem>
						);
					})}
				</MenuList>
			</nav>
		</header>
	);
};

const Title = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 0;
	color: #fff;
	font-size: 20px;
	letter-spacing: 1px;
	text-align: center;

	@media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		padding: 10px 0 0 0;
		font-size: 16px;

		.TitleImg {
			width: 70%;
		}
	}
`;

const MenuList = styled.ul`
	display: flex;
	justify-content: center;

	@media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		justify-content: space-around;
		padding: 0;
		border-top: 2px solid #ecdbba;
		border-bottom: 2px solid #ecdbba;
		background: rgba(0, 0, 0, 0.8);
	}
`;

const MenuItem = styled.li`
	margin: 0 5px;
	padding: 4px;
	border-radius: 20px;
	background-color: #ecdbba;

	.MenuLink {
		padding: 0 12px;
		border-radius: 20px;
		background: linear-gradient(to right, transparent 50%, #006599 50%);
	}

	@media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		margin: 0;
		padding: 0;
		border-radius: 0;
		background: none;

		.MenuLink {
			display: block;
			border-radius: 0;
			background: none;
			color: #fff;
			font-size: 13px;
		}
	}
`;
