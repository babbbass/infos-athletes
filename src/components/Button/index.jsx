import React from "react"
import { ButtonSiteContainer, ButtonSite } from "utils/style/GlobalStyle"
import { LinkButton } from "./style"

export default function Button({ linkButton }) {
  let link1 = `Palmarès`
  let link2 = `Statistiques`
  if (
    linkButton.openPalmaresPlayer === true &&
    linkButton.openModalStatistic === false
  ) {
    link1 = `Joueur`
    link2 = `Statistiques`
  }

  if (
    linkButton.openPalmaresPlayer === false &&
    linkButton.openModalStatistic === true
  ) {
    link1 = `Joueur`
    link2 = `Palmarès`
  }

  return (
    <div>
      <ButtonSiteContainer>
        <LinkButton
          onClick={() => {
            if (link1 === "Joueur") {
              linkButton.setOpenPalmaresPlayer(false)
              linkButton.setOpenModalStatistic(false)
            } else {
              linkButton.setOpenPalmaresPlayer(!linkButton.openPalmaresPlayer)
            }
          }}
        >
          <ButtonSite>{link1}</ButtonSite>
        </LinkButton>

        <LinkButton
          onClick={() => {
            linkButton.setOpenModalStatistic(!linkButton.openModalStatistic)
            if (
              linkButton.openPalmaresPlayer !== linkButton.openModalStatistic
            ) {
              linkButton.setOpenPalmaresPlayer(!linkButton.openPalmaresPlayer)
            }
          }}
        >
          <ButtonSite>{link2}</ButtonSite>
        </LinkButton>
      </ButtonSiteContainer>
    </div>
  )
}
