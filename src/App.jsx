import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

import './style.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  selectMenu: 0,
                  styleHello:{}
                  };
    this.StylesSet = this.StylesSet.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
  }


  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>CSSで見た目を変える</div>
      </Toolbar>
    );
  }

  onClickMenu(num) {
    this.setState({selectMenu: num});
    if(num == 1){
      this.StylesSet("red");
    }else if(num == 2){
      this.StylesSet("blue", "inherit");
    }else if(num == 3){
      this.StylesSet("red", "inherit", "bolder");
    }else{
      this.StylesSet("blue", "MS Pゴシック", "bolder");
    }
  }

  StylesSet(color, font="normal", weight="normal"){
    let styleHello = {
        "color": color,
        "font-style": font,
        "font-weight": weight
    };
    this.setState({styleHello: styleHello});
  }

  render() {
    var menuItemClass_1 = "item";
    var menuItemClass_2 = "item";
    var menuItemClass_3 = "item";
    var menuItemClass_4 = "item";
    if(this.state.selectMenu == 1) {
      menuItemClass_1 = "item-selected_1";
    }
    else if(this.state.selectMenu == 2) {
      menuItemClass_2 = "item-selected_2";
    }
    else if(this.state.selectMenu == 3) {
      menuItemClass_3 = "item-selected_3";
    }
    else if(this.state.selectMenu == 4) {
      menuItemClass_4 = "item-selected_4";
    }

    return (
      <Page renderToolbar={this.renderToolbar}>
        <div className="midashi">見出しタイトル</div>
        <p style={this.state.styleHello}>はろー！</p>
        <ul className="menu">
          <li className={menuItemClass_1} onClick={() => this.onClickMenu(1)}>メニュー１</li>
          <li className={menuItemClass_2} onClick={() => this.onClickMenu(2)}>メニュー２</li>
          <li className={menuItemClass_3} onClick={() => this.onClickMenu(3)}>メニュー３</li>
          <li className={menuItemClass_4} onClick={() => this.onClickMenu(4)}>メニュー４</li>
        </ul>
      </Page>
    );
  }

}