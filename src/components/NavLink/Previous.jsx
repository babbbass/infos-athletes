import React from 'react'
import {NavigationLink, ArrowNavigation} from 'components/NavLink/style'

export default function PreviousLink({previousPageDatas}) {
  return (
    <div>
      {previousPageDatas.previousStep3 !== undefined ? 
        <NavigationLink to={`/${previousPageDatas.previousStep1}/${previousPageDatas.previousStep2}/${previousPageDatas.previousStep3}`}>
          <ArrowNavigation>◄</ArrowNavigation> {previousPageDatas.previousLinkName}
        </NavigationLink>
          : 
        <NavigationLink to={`/${previousPageDatas.step1}/${previousPageDatas.previousStep2}`}>
            <ArrowNavigation>◄</ArrowNavigation> {previousPageDatas.previousLinkName}
        </NavigationLink>
      }
    </div>
  )
}
