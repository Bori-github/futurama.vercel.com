import styled from '@emotion/styled';

export const Footer = () => {
	return (
		<HomeFooter>
			<p>
				Powered by <span>BORI</span>
			</p>
		</HomeFooter>
	);
};

const HomeFooter = styled.footer`
	width: 100vw;
	padding: 20px 0;
	background-color: #eee;
	text-align: center;
`;
