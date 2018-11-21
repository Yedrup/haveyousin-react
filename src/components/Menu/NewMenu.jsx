import React from "react";
import "./menu.css";
import IconService from "../../services/IconService";
import { NavLink, withRouter } from "react-router-dom";
import { getCustomLists, getOneList } from "../../services/listServiceHelper";
import { inject, observer } from "mobx-react";
import MediaQuery from "react-responsive";
import { slide as YeahMenu } from 'react-burger-menu';

@inject("ListsStore")
@observer
class NewMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const { ListsStore } = this.props;

    const menuItems = [
      {
        title: "home",
        link: "/"
      },
      {
        title: "calendar",
        link: "/calendar"
      },
      {
        title: "toWatchList",
        link: "/list/1"
      },
      {
        title: "archives",
        link: "/list/2"
      },
      {
        title: "favorites",
        link: "/list/3"
      },
      {
        title: "customLists",
        link: "/listHome",
        state: {
          list: this.props.lists
        }
      },
      {
        title: "user",
        link: "/settings"
      },
      {
        title: "about",
        link: "/about"
      }
    ];
    let currentPath = this.props.location.pathname;
    return (
      <YeahMenu  role="navigation"
      menuClassName={ "c-menu" }  isOpen={ true } width={ '30%' } >
           {/* <div className="c-menu"> */}
            <NavLink exact strict to={"/"}>
              <h1 className="c-logo c-logo--menu"> HaveYouSin </h1>
            </NavLink>
            <ul className="c-menu__items">
              {menuItems.map(function(menuItem, index) {
                let iconName = menuItem.title;
                return (
                  <li key={index}>
                    <NavLink
                      exact
                      strict
                      to={{
                        pathname: menuItem.link,
                        state: {
                          list:
                            menuItem.state && menuItem.state.list
                              ? menuItem.state.list
                              : "",
                          customLists:
                            menuItem.state && menuItem.state.customLists
                              ? menuItem.state.customLists
                              : ""
                          // itemsInList : itemsInList
                        }
                      }}
                      activeStyle={{
                        color: "var(--color-active)"
                      }}
                      className={"c-menu__item__link__text c-menu__item"}
                    >
                      <IconService
                        nameIcon={iconName}
                        iconStyleContext={{
                          color:
                            currentPath === menuItem.link
                              ? "var(--color-active)"
                              : "var(--iconNavColor)"
                        }}
                      />
                      <span className="c-menu__item__title">
                        {menuItem.title}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            {/* <IconService
              nameIcon="close"
              iconStyleContext={{
                className: "c-menu__button",
                color: "var(--button-close-color)"
              }}
            /> */}
          {/* </div> */}
        {/* <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </YeahMenu>
    );
  }
}

export default withRouter(NewMenu);
