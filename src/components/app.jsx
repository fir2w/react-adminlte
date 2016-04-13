import React from 'react';
import HeaderBar from './header-bar/header-bar';
import NavigationMenu from './navigation-menu';

export default React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <HeaderBar />
        <NavigationMenu />

        <div className="content-wrapper" style={{minHeight: 807}}>
          <div className="content body">
            {/* uiView: content */}
            <div id="ui-view" ui-view="content" style={{}}>
              <div className="row ">
                <div className="col-md-12">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed
            Studio</a>.</strong>
        </footer>

        {/*<ControlsMenu />*/}
      </div>
    )
  }
});

