import React, { useState } from 'react';
import { Text } from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

const TimelineAPI = ({

}) => {

    const [list, setList] = useState([
        {
            time: <Text> 07am </Text>,
            title: <Text> Today </Text>,
            description: <Text> 기상 </Text>
        },
        {
            time: <Text> 09am </Text>,
            title: <Text> Today </Text>,
            description: <Text> 출근 </Text>
        },
        {
            time: <Text> 07pm </Text>,
            title: <Text> Today </Text>,
            description: <Text> 퇴근 </Text>
        },
    ]);

    return (
        <Timeline
            data={list}
            circleSize={20}
            circleColor='rgb(45,156,219)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
            descriptionStyle={{ color: 'red' }}
            options={{
                style: { paddingTop: 5 }
            }}
        />
    )
}

export default TimelineAPI;