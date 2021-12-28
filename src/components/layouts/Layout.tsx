import React from 'react';
import styled from '@emotion/styled';
import { Navigation, Footer } from '.';

export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Navigation />
			<ContentsContainer>{children}</ContentsContainer>
			<Footer />
		</>
	);
};

const ContentsContainer = styled.main`
	min-height: 100vh;
`;
