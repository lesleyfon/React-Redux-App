import React from 'react';
import styled from 'styled-components';

function Card(props) {
    
    return (
        <CardStyles > 
            <div className ='header' >
                <img src={props.thumbnail} alt={props.competition.name}></img>
            </div>
            <div className='card-body'>
                <h3>{props.title}</h3>
                <h4>Competitioin:{props.competition.name}</h4>
                <p>Date: {new Date(props.date).toDateString()}</p>
                </div>
        </CardStyles>
    )
}

export default Card

const CardStyles = styled.div`
    width: 300px;
    height: 400px;
    background: lightslategrey;
    .header{
        width: 100%;
        img{
            width: 100%;
        }
    }
`;