import React from "react";
import { IconContext } from "react-icons";
import {
  FaTimesCircle,
  FaCalendar,
  FaHome,
  FaSearch,
  FaHeart,
  FaBookmark,
  FaFilm,
  FaTv,
  FaList,
  FaBars,
  FaUserCircle,
  FaUser,
  FaQuestionCircle,
  FaCheck
} from "react-icons/fa";
// {} from "react-icons/io";

class IconService extends React.Component {
  render() {
    const Icons = [
      { title: "close", nameIcon: FaTimesCircle },
      { title: "home", nameIcon: FaHome },
      { title: "menu", nameIcon: FaBars },
      { title: "search", nameIcon: FaSearch },
      { title: "calendar", nameIcon: FaCalendar },
      { title: "toWatchList", nameIcon: FaBookmark },
      { title: "tv", nameIcon: FaTv },
      { title: "movie", nameIcon: FaFilm },
      { title: "favorites", nameIcon: FaHeart },
      { title: "archives", nameIcon: FaCheck },
      { title: "customLists", nameIcon: FaList },
      { title: "user", nameIcon: FaUserCircle },
      { title: "people", nameIcon: FaUser },
      { title: "about", nameIcon: FaQuestionCircle }
    ];
    let iconToFind = this.props.nameIcon;
    let iconStyleContext = this.props.iconStyleContext;
    function getIconComponent(icon) {
      return icon.title === iconToFind;
    }
    let IconName = Icons.find(getIconComponent);
    IconName = IconName.nameIcon;

    return (
      <span>
      <IconContext.Provider value={iconStyleContext}>
        <IconName />
      </IconContext.Provider>
      </span>
    );
  }
}

export default IconService;
