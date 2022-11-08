import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Wrapper = styled.footer`
  padding: 1rem;
  font-size: 1.2rem;
  font-style: italic;
  color: ${colors.whitesmoke};
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: center;
  background: ${colors.DarkBackgroundSiteColor};
  height: 80px;
  align-items: center;
`;
const Footer = () => {
    return (
        <Wrapper>
            copyright 2022
        </Wrapper>
    );
};

export default Footer;