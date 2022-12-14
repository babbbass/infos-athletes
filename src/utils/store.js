import { createStore } from "redux"

// state
const initialState = {
  countryCode: "",
  competitionId: "",
  competitionName: "",
  activeMenu: false,
}

// actions creators

const competitionId = ({ countryCode, competitionId, competitionName }) => ({
  type: "setCompetitionId",
  payload: {
    competitionId: competitionId,
    countryCode: countryCode,
    competitionName: competitionName,
  },
})

const isActiveMenu = () => ({ type: "isActive" })

const competitionName = () => ({ type: "setCompetitionName" })

const countryName = (country) => ({
  type: "setCountryName",
  payload: country.name,
})

function reducer(state = initialState, action) {
  if (action.type === "setCompetitionId") {
    console.log(action)
    return {
      ...state,
      competitionId: action.payload.competitionId,
      countryCode: action.payload.countryCode,
      competitionName: action.payload.competitionName,
    }
  }

  return state
}

export const store = createStore(reducer)
