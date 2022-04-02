import React, { Component } from 'react'
import {connect} from 'react-redux';


class Player extends Component {
  render() {
    console.log("props",this.props.mangDatCuoc);
    return (
      <div className='text-center playerGame'>
          <div className='theThink'>
              <img className='mt-3' width={40} height={40} src='./img/bao.png' alt='./img/bao.png'/>
          </div>
          <div className='speech-bubble'></div>
          <img style={{ width:200, height:200 }} src='./img/player.png' alt='./img/player.png' />

          <div className='row'>
            {this.props.mangDatCuoc.map((item,index)=>{
              return <div className='col-4'>
              <button className='btnItem'>
                  <img width={40} height={40} src={item.hinhAnh} alt='./img/bao.png' />
              </button>
          
          </div>
            })}
                
                
          </div>
      </div>     

            )
  }
}


const mapStatetoProps = state => {
    return {
      mangDatCuoc: state.GameOanTuXiReducer.mangDatCuoc
    }
  }
  
  export default connect(mapStatetoProps)(Player)