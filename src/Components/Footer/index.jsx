import React from 'react';
import styled from 'styled-components';
import colors from '../../Utils/style/colors';

const Wrapper = styled.section`
  padding: 1rem;
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: center;
  background: #99CBFF;
  height: 80px;
`;
const Footer = () => {
    return (
        <Wrapper>
            2022
        </Wrapper>
    );
};

export default Footer;