import React from "react"
import {
  TableGameStatisticsTr,
  TableGameStatisticsTd,
  TableGameStatisticsTdStatName,
} from "./style"

export default function TeamStatistics({ statistics }) {
  console.log(statistics)
  return (
    <>
      <TableGameStatisticsTr>
        <TableGameStatisticsTdStatName>Passes D</TableGameStatisticsTdStatName>
        <TableGameStatisticsTd>
          {statistics[0].statistics[0].assists}
        </TableGameStatisticsTd>
        <TableGameStatisticsTd>
          {statistics[1].statistics[0].assists}
        </TableGameStatisticsTd>
      </TableGameStatisticsTr>
      <TableGameStatisticsTr>
        <TableGameStatisticsTdStatName>
          Tirs tentés
        </TableGameStatisticsTdStatName>
        <TableGameStatisticsTd>
          {statistics[0].statistics[0].fga}
        </TableGameStatisticsTd>
        <TableGameStatisticsTd>
          {statistics[1].statistics[0].fga}
        </TableGameStatisticsTd>
      </TableGameStatisticsTr>
      <TableGameStatisticsTr>
        <TableGameStatisticsTdStatName>
          Tirs Réussis
        </TableGameStatisticsTdStatName>
        <TableGameStatisticsTd>
          {statistics[0].statistics[0].fgm}
        </TableGameStatisticsTd>
        <TableGameStatisticsTd>
          {statistics[1].statistics[0].fgm}
        </TableGameStatisticsTd>
      </TableGameStatisticsTr>
      <TableGameStatisticsTr>
        <TableGameStatisticsTdStatName>
          Interceptions
        </TableGameStatisticsTdStatName>
        <TableGameStatisticsTd>
          {statistics[0].statistics[0].steals}
        </TableGameStatisticsTd>
        <TableGameStatisticsTd>
          {statistics[1].statistics[0].steals}
        </TableGameStatisticsTd>
      </TableGameStatisticsTr>
      <TableGameStatisticsTr>
        <TableGameStatisticsTdStatName>Rebonds</TableGameStatisticsTdStatName>
        <TableGameStatisticsTd>
          {statistics[0].statistics[0].totReb}
        </TableGameStatisticsTd>
        <TableGameStatisticsTd>
          {statistics[1].statistics[0].totReb}
        </TableGameStatisticsTd>
      </TableGameStatisticsTr>
      <TableGameStatisticsTr>
        <TableGameStatisticsTdStatName>Contres</TableGameStatisticsTdStatName>
        <TableGameStatisticsTd>
          {statistics[0].statistics[0].blocks}
        </TableGameStatisticsTd>
        <TableGameStatisticsTd>
          {statistics[1].statistics[0].blocks}
        </TableGameStatisticsTd>
      </TableGameStatisticsTr>
    </>
  )
}
