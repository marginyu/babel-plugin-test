import React,{Component} from 'react';
import { Button } from 'antd';

export default class ReactDemo extends Component{

  goback = ()=>{
    console.log('i want to go back');
  };

  test(){

  }

  render(){
    return (
      <div>
       <Button onClick={this.goback} onPress={()=>{console.log('ppress')}}>xiaomei</Button>
      </div>
    );
  }
}