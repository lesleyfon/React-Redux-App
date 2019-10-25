import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import {highLightAction } from './../actions.js/highLightAction'


function Card(props) {
    function hanleClick (e){
        e.preventDefault()
        const modal =document.getElementsByClassName('modal')[0]
        modal.setAttribute("style", "display:block;");
        props.highLightAction(props.game)

    }
    return (
        <CardStyles onClick={(e)=>{
            hanleClick(e);
            
        }} > 
            <div className ='header' >
                <img src={props.game.thumbnail} alt={props.game.competition.name}></img>
            </div>
            <div className='card-body'>
                <h3>{props.game.title}</h3>
                <h4>Competitioin:{props.game.competition.name}</h4>
                <p>Date: {new Date(props.game.date).toDateString()}</p>
                </div>
        </CardStyles>
    )
}


export default connect(null, {highLightAction})(Card)

const CardStyles = styled.div`
    width: 300px;
    height: 350px;
    background: lightslategrey;
    margin-bottom: 20px;
    .header{
        width: 100%;
        img{
            width: 100%;
        }
    }
`;