import React from 'react'
import {LeaguePagesLink, ArrowNavigation } from "utils/style/Rankings";

export default function NavLink({competitionDatas}) {
  return (
    <>
        <LeaguePagesLink to={`/leagues/${competitionDatas.countryCode}/${competitionDatas.idCompetition}`}>
            <ArrowNavigation>◄</ArrowNavigation> {competitionDatas.competitionName}
        </LeaguePagesLink>
        <LeaguePagesLink to={`/meilleurs-${competitionDatas.theBestOfLeague}/${competitionDatas.countryCode}/${competitionDatas.idCompetition}`}>
        Top {competitionDatas.theBestOfLeague} <ArrowNavigation>►</ArrowNavigation>
        </LeaguePagesLink>
    </>
  )
}
