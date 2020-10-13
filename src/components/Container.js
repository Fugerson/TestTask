import React from 'react'
import { connect } from 'react-redux'
import Content from './content/Content'
import Header from './header/Header';
import {setImg, setName, setPrice, setText} from './../store/item/action'
import {setPapap} from './../store/Showpopup/action'

 function doWrapper (store){




     return(
        <div className="containerWrapper" >
        <Header store={store} />
        <Content props={store} ></Content>
        </div>
     )
 }

 const mapStateToProps = state => {
     return{
         img: state.item.img,
         name: state.item.name,
         price: state.item.price,
         text: state.item.text,
         statePopup: state.popup.statePopup,
        }
 }
 const mapDispatchToProps = {
    setImg: setImg,
    setName: setName,
    setPrice: setPrice,
    setText: setText,
    setPapap: setPapap
 };


 export default connect(mapStateToProps, mapDispatchToProps)(doWrapper)