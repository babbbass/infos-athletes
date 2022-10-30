import styled from 'styled-components'
import colors from '../../../Utils/style/colors'
import Select  from 'react-select'

export const PlayerStatsModalBackground = styled.div`
    width: 70%;
    height: 93%;
    flex-wrap: wrap;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    z-index: 10;
    overflow: auto;
    // margin-top: -100px; /* Negative half of height. */
    // margin-left: -250px; /* Negative half of width. */
    @media (max-width: 768px) {
        width: 100%;
    }
`
  
export const PlayerStatsModalContainer = styled.div`
    width: 90%;
    height: auto;
    border-radius: 12px;
    background-color: ${colors.blueLightColor};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 1rem;
    color: #fff;
    font-style: italic
`
export const PlayerStatsModalContainerHeader = styled.div`
    width: 60%;
    background: cornflowerblue;
    margin: 20px auto;
    @media (max-width: 425px) {
        width: 93%;
    }
`
export const ModalContainerTitle = styled.div`
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    margin-top: 10px;
`
export const StyledSelect = styled(Select)`
  width: 50%;
  margin: 20px auto;
  color: #000;
  text-align: center;
`
export const PlayerStatsModalContainerBody = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    fnt-size: 1.7rem;
    text-align: center;
`
export const ModalContainerCard = styled.div`
    width: 33%;
    text-align: center;
    margin: 5px auto;
    @media (max-width: 425px) {
        width: 50%;
    }
`
export const ModalContainerCardHeader = styled.div`
//   background: blue;
  max-height: 250px;
`
export const ImgContainer = styled.img`
    width: 120px;
    @media (max-width: 330px) {
        width: 105px;
    }
`
export const H1Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 1rem;
    font-weight: bold;
    talign: center;
    height: 30px;
    margin-bottom: 8px;
`
export const RowStatsModalContainer = styled.div`
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 10px auto;
    text-align: -webkit-left;
    color: ${colors.primary};
    font-weight: 500;
    @media (max-width: 375px) {
        width: 150px;
    }
`
export const RowModalTitle = styled.div`
    color: #fff;
    font-size: 1rem;
    display: inline-block;
    width: 40%;
    font-weight: 500;
    font-style: italic;
    margin: 0 8px 0 35px;
    @media (max-width: 375px) {
        margin: 0 8px 0 30px;
    }
`
export const RowModalData = styled.div`
    display: inline-block;
    margin-right: 5px;
    width: 20%;
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
export const ModalContainerFooterButton = styled.button`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`
export const cancelBtn = styled.button`
    background-color: crimson;
`
