import React from 'react';
import styled from 'styled-components';
const MissionStatementStyle = styled.div`
.missionstmnt{
    height: 30%;
} 
p{ 
    margin-top: 3rem;
    color: white;
    text-align: center;
}
h1{ 
    margin-top: 2rem;
    color: white;
    text-align: center;
}
.center{
    align-item: center;
    justify-content: center;
    text-align: center;

}
`;

export default function MissionStatement() {
    return (
        <MissionStatementStyle>
            <div className='missionstmnt ' align="center">
                <div id="comp-ig6d4o5j" className="_2UdPt"></div>
                <div className='text-center text-white'>
                    <h1>Our Mission</h1>
                </div>
                <div className='text-center text-white col-sm-8 offset-col4'>
                    <p>TaxOnTracks’ mission is to assist our valued clients and people in achieving success and desired
                        results through timely,<br/> relevant advice and services based on contemporary knowledge.  We will be fair
                        minded in dealing with clients <br/> and staff and strive to build synergies that make us more effective and
                        efficient and enhance the perception that WebsterRogers is <br/>
                        “a firm you can count on.”</p><br/>
                </div>
            </div>
        </MissionStatementStyle>
    );
}
