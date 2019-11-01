import React from "react";
import "./listHome.css";
import MediaQuery from "react-responsive";
import Truncate from "react-truncate";
import { Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import {
  getCustomLists
} from "../../services/listServiceHelper";
@inject("ListsStore")
@observer
class ListHome extends React.Component {
  componentDidMount() {
    // console.log("this.props from ListHome", this.props);
  }

  render() {
    let customLists = getCustomLists(this.props.ListsStore.defaultListIds, this.props.ListsStore.lists);
    return (
      <div>
        <div className="c-listHome__list">
          {Object.values(customLists).map(customList => {
            return (
              <Link
                key={customList.id}
                to={{
                  pathname: "/list/" + [customList.id]
                }}
              >
                <div className="c-tile">
                  <MediaQuery maxWidth={767}>
                    <Truncate lines={2} ellipsis={"..."}>
                      <p className="c-tile__text">{customList.nameList}</p>
                    </Truncate>
                  </MediaQuery>
                  <MediaQuery minWidth={767}>
                    <Truncate lines={4} ellipsis={"..."}>
                      <p className="c-tile__text">{customList.nameList}</p>
                    </Truncate>
                  </MediaQuery>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListHome);
