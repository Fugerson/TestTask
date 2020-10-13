import React from 'react'
import { connect } from 'react-redux'
import Content from './content/Content';

import {setImg, setName, setPrice, setText} from './../store/item/action'

 function doWrapper (store){

     return(
         <Content props={store} ></Content>
     )
 }

 const mapStateToProps = state => {
     return{
         img: state.item.img,
         name: state.item.name,
         price: state.item.price,
         text: state.item.text,
        }
 }
 const mapDispatchToProps = {
    setImg: setImg,
    setName: setName,
    setPrice: setPrice,
    setText: setText
 };


 export default connect(mapStateToProps, mapDispatchToProps)(doWrapper)