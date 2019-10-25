import React, { useEffect }from 'react';
import {connect} from  'react-redux'
import { getGameData } from './../actions.js/gameAction'
import styled from 'styled-components';
import loading from './loading.gif'
import Card from './Card';

function CardList(props) {
    useEffect(() => {
       props.getGameData()
    }, [])
    return (
        <CardListStyles>
            {
                (props.isLoading || props.game_data === null)
                ?
                (<img src={ loading } alt='fetch data'/> )
                :
                props.game_data.map((game, i) => <Card game = {game} key={i}/>  )
            }
        </CardListStyles>
    )
}
const mapStateToProps =  state =>{
    return {
        game_data: state.highlightsReducer.data,
        isLoading: state.highlightsReducer.isLoading 
    }
}
const mapDispatchToProps = {
    getGameData 
    
}
export default connect(mapStateToProps, mapDispatchToProps)(CardList)

const CardListStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
`;