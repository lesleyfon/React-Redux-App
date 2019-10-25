import React from 'react';
import {  connect } from 'react-redux';
import styled from 'styled-components'
function HeightLightModal(props) {
    console.log(props)
    function  handleClose (e){
        e.preventDefault()
        const modal =document.getElementsByClassName('modal')[0]
        modal.setAttribute("style", "display:none")


    }
    return (
        <Modal className='modal'>
            <div className='modal-box'>
            <div className='modal-body'>
                <span className='close-modal' onClick= { handleClose } >
                    x
                </span>
            </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = state =>{
    return {
        data: state.forHighlight.data
    }
}
export default connect(mapStateToProps, {})(HeightLightModal)










const Modal = styled.div`

display: none; 
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgb(0,0,0);
  background: rgba(0,0,0,.8);
  overflow: auto;

.modal,
.modal-box {
  z-index: 900;
}

.modal-sandbox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
}



.modal-box {
  position: relative;
  width: 80%;
  max-width: 920px;
  margin: 100px auto;
  animation-name: modalbox;
  animation-duration: .4s;
  animation-timing-function: cubic-bezier(0,0,.3,1.6);
}

.modal-header {
  padding: 20px 40px;
  background: #546E7A;
  color: #ffffff;
}

.modal-body {
  background: #ECEFF1;
  padding: 60px 40px;
}

/* Close Button */
.close-modal {
  text-align: right;
  cursor: pointer;
  float: right;
  font-size: 2rem;
  top: 0px; 
  top: 0;
    right: 0px;
    display: block;
}

/* Animation */
@-webkit-keyframes modalbox {
  0% {
    top: -250px; 
    opacity: 0;
  }
  100% {
    top: 0; 
    opacity: 1;
  }
}

@keyframes modalbox {
  0% {
    top: -250px; 
    opacity: 0;
  }
  100% {
    top: 0; 
    opacity: 1;
  }
}

/* Aditional Styles */
* {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}

p {
  line-height: 1.4em;
}

body {
  background: #B0BEC5;
}

.modal-trigger, button {
  top: 50%;
  left: 50%;
  padding: 20px 40px;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  text-decoration: none;
}

.modal-trigger {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: ease .2s;
}

button {
  border: 1px solid #333333;
  outline: none;
  color: #333333;
}

.modal-trigger:hover {
  padding: 20px 60px;
}`