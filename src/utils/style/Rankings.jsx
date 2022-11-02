import styled from "styled-components"
import Select from 'react-select'
import {Link} from 'react-router-dom'
import colors from "./colors"

export const StyledSelect = styled(Select)`
  width: 50%;
  margin: 20px auto;
`
export const RankingWrapper = styled.div`
  text-align:center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
export const StyledLinkCard = styled(Link)`
    text-decoration: none;
    width: 100%;
    color: #000;
    font-style: italic;
`

export const RankingContainer = styled.div`
  width:80%;
  display: flex;
  flex-flow: row wrap;
  margin: 2rem 5px;
  @media (max-width: 573px) {
    width:100%;
  }
`
export const RankingContainerTitles = styled.div`
  flex-basis:100%;
  // background: blue;
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
  //margin: 5px 10px;
  width: 15%;
`
export const RankingRowPlayerStats = styled.div`
  padding: 5px 0;
  width: 100%;
  display: flex;
  height: auto;
  flex-flow: row wrap;
  justify-content: center;
  border-bottom: solid 1px #d9d9d9;
  border-top: solid 1px #d9d9d9;
  
`
export const RankingRow = styled.div`
  // background: green;
  margin: 5px 10px;
  // width: 15%;
  align-self: top;
  @media (max-width: 424px) {
    // width: 13%;
  }
`
export const RankingNameTeam = styled.div`
  color: #000;
  font-size: 0.8rem;
  font-style: italic;
`
export const RankingNamePlayer = styled.span`
  color: #3873b8;
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  font-style: italic;
`
export const SpanColor = styled.span`
  color: #bbb;
`
export const HeaderBody = styled.nav`
    display: flex;
    text-align: center;
    padding: 12px 0 0 0;
`
export const ArrowNavigation = styled.span`
  color: ${colors.blueLightColor};
`

export const RankingPosition = styled.span`
  font-weight: 500;
`
export const RankingTab = styled.table`
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 5px 50px rgba(153,203,255,0.35);
`
export const RankingTabHead = styled.thead`
  font-style: italic;
  border-bottom: 1px solid #bbb;
`
export const RankingTabHeadRow = styled.tr`
  // border-bottom: 1px solid #bbb;
`
export const RankingTabHeadTitle = styled.th`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${colors.primary};
`

export const RankingTabBody = styled.tbody``
export const RankingTabBodyRow = styled.tr`
  padding: 5px auto;
`
export const RankingTabBodyData = styled.td``

export const LeaguePagesLink = styled(StyledLinkCard)`
  color: #000;
  &:hover{
      color: #bbb
  }
`