import React from 'react';
import {connect} from  'react-redux'

import styled from 'styled-components';

function CardList({game_data}) {
    return (
        <div>
        </div>
    )
}
const mapStateToProps =  state=>{
    return {
        game_data: state.data
    }
}
export default connect(mapStateToProps, {})(CardList)
