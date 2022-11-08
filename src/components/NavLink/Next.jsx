import React from 'react'
import {NavigationLink, ArrowNavigation} from 'components/NavLink/style'

export default function NextLink({nextPageDatas}) {
  return (
    <div>
      {nextPageDatas.nextUrlStep3 !== undefined ? 
        <NavigationLink to={`/${nextPageDatas.nextUrlStep1}/${nextPageDatas.nextUrlStep2}/${nextPageDatas.nextUrlStep3}`}>
          {nextPageDatas.nextLinkName} <ArrowNavigation>►</ArrowNavigation>
        </NavigationLink>
          : 
        <NavigationLink to={`/${nextPageDatas.nextUrlStep1}/${nextPageDatas.nextUrlStep2}`}>
            {nextPageDatas.nextLinkName} <ArrowNavigation>►</ArrowNavigation>
        </NavigationLink>
      }
    </div>
  )
}
