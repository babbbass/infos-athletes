import { CardContainer } from "components/Card/globalStyleCard"
import styled from "styled-components"

export const CardContainerPlayer = styled(CardContainer)`
  transform: translateY(0px);
`
export const ModalContainerBody = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const StyledImg = styled.img`
  margin: 25px 0;
  @media (max-width: 390px) {
    width: 105px;
  }
`
