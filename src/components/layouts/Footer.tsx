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
	padding: 10px 0;
	background-color: #e0e0e0;
	text-align: center;
`;
