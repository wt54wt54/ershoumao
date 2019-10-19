import React,{Component} from 'react'
import CustomNav from  '../customNav'
import  TokenModal from '../modal'
import  {connect} from 'react-redux'
import  {bindActionCreators}from 'redux'
import ActionCreator from '../../store/actionCreator'
import './index.less'
class Admin extends Component{
 componentDidMount(){
  //  this.props.changeTokenModal()
  // 调用异步action
  this.props.changeTokenModalAsync()
  // setTimeout(()=>{
      //  调用同步action
  //   this.props.changeTokenModal(true)
  // },1000)
 }
  render(){
    console.log(this,'admin')
    return(
    <div className='admin'>
        <TokenModal></TokenModal>
        <div className='admin-nav'>
        <CustomNav></CustomNav> 
        </div>
        <div className='admin-content'>
          <div>
            头部信息
          </div>
          <div>
              {this.props.children}
          </div>
          <div>
            底部信息
          </div>
        </div>
    </div>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreator,dispath)
})(Admin)