import React from "react"
import {
  TableGameStatistics,
  TableGameStatisticsBody,
  TableGameStatisticsHead,
  TableGameStatisticsTh,
  TableGameStatisticsTr,
} from "./style"
import TeamStatistics from "components/Games/TableStastistics/TeamStatistics"

export default function GameStatisticsTable({ statistics }) {
  return (
    <TableGameStatistics>
      <TableGameStatisticsHead>
        <TableGameStatisticsTr>
          <TableGameStatisticsTh></TableGameStatisticsTh>
          <TableGameStatisticsTh>
            {statistics[0].team.name}
          </TableGameStatisticsTh>
          <TableGameStatisticsTh>
            {statistics[1].team.name}
          </TableGameStatisticsTh>
        </TableGameStatisticsTr>
        <TableGameStatisticsTr></TableGameStatisticsTr>
      </TableGameStatisticsHead>
      <TableGameStatisticsBody>
        <TeamStatistics statistics={statistics} />
      </TableGameStatisticsBody>
    </TableGameStatistics>
  )
}
