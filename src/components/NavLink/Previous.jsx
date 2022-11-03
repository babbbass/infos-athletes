import React from 'react'
import {NavigationLink, ArrowNavigation} from 'components/NavLink/style'

export default function PreviousLink({previousPageDatas}) {
  return (
    <div>
        <NavigationLink to={`/${previousPageDatas.link}/${previousPageDatas.teamId}`}>
            <ArrowNavigation>◄</ArrowNavigation> {previousPageDatas.teamName}
        </NavigationLink>
    </div>
  )
}
