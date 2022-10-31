import styled from 'styled-components'
import colors from '../../utils/style/colors';

export const ModalBackground = styled.div`
    width: 50%;
    height: auto;
    background-color: ${colors.backgroundLight}; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0%;
    // margin-top: -100px; /* Negative half of height. */
    // margin-left: -250px; /* Negative half of width. */
    @media (max-width: 900px) {
        width: 100%
    }
`
export const ModalContainer = styled.div`
    width: 80%;
    margin: 5px auto;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    background: #fff;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #cornflowerblue;
    }
`
export const ModalContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    // background: green;
`
export const ModalContainerTitle = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    color: ${colors.modals};
    font-style: italic;
`
export const ModalContainerBody = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fnt-size: 1.7rem;
    text-align: center;
`
export const StyledImg = styled.img`
    margin: 5px 0;
    @media (max-width: 390px) {
        width: 105px;
    }
`
export const RowModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 3px auto;
    color: ${colors.modals};
    font-weight: 600;
    font-style: italic;
    @media (max-width: 375px) {
        width: 150px;
    }
`
export const ModalContainerFooter = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TitleCloseBtn = styled.button`
    display: flex;
    justify-content: flex-end;
`
export const TitleCloseBtnButton = styled.span`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
`
export const StatsBtnButton = styled.button`
    background-color: cornflowerblue;
    border-radius: 8px;
    color: white;
    width: 150px;
    height: 45px;
    border: none;
    font-size: 25px;
    cursor: pointer;
`
export const ModalContainerFooterButton = styled.button`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: ${colors.modals};
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`
