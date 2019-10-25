import React, { useEffect }from 'react';
import {connect} from  'react-redux'
import { getGameData } from './../actions.js/gameAction'
import styled from 'styled-components';

function CardList(props) {
    useEffect(() => {
       props.getGameData()
    }, [])
    return (
        <div>
        </div>
    )
}
const mapStateToProps =  state =>{
    return {
        game_data: state.data
    }
}
const mapDispatchToProps = {
    getGameData 
    
}
export default connect(mapStateToProps, mapDispatchToProps)(CardList)
