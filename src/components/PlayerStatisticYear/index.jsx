import { playerStatistics } from "utils/datas/PlayerStatistics";
import React, {useContext} from 'react'
import Select from 'react-select'
import { ThemeContext } from "utils/Context/Context";
import { useQuery } from 'react-query';

const options = [
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 }
]

function PlayerStatisticYear() {
    const {yearSelected, setYearSelected} = useContext(ThemeContext)
    const {playerStatistic, setPlayerStatistic} = useContext(ThemeContext)
    //console.log(yearSelected)
    return (  
        <div>
            <Select defaultValue={yearSelected} options={options} onChange={(option) => {
                setYearSelected(option.value)
            }} />
            {/* <Select defaultValue={yearSelected} options={options} onChange={refetch} /> */}
        </div>
    );
}

export default PlayerStatisticYear;