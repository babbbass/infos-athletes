import styled from "styled-components"
import { colors, sizesFont } from "utils/style/GlobalStyle"

export const TableGameStatistics = styled.table`
  width: 90%;
  margin: 30px auto;
  border: 2px solid ${colors.backgroundHover};
  box-shadow: 0 5px 50px ${colors.backgroundHover};
  border-collapse: collapse;
  cursor: pointer;
`
export const TableGameStatisticsHead = styled.thead``
export const TableGameStatisticsBody = styled.tbody`
  height: 400px;
`
export const TableGameStatisticsTr = styled.tr`
  border: 1px solid ${colors.backgroundHover};
  &:nth-child(even) {
    background-color: ${colors.backgroundHover};
  }
`
export const TableGameStatisticsTh = styled.th`
  padding: 10px 10px;
`
export const TableGameStatisticsTd = styled.td`
  text-align: center;
  padding: 5px 20px;
  font-size: ${sizesFont.textSmartPhone};
`
export const TableGameStatisticsTdStatName = styled(TableGameStatisticsTd)`
  font-weight: 600;
  text-align: left;
  color: #000;
  font-size: ${sizesFont.normal};
`
