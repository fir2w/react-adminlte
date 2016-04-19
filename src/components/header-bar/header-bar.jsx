import React from 'react';
import {  Link, IndexLink } from 'react-router';
import HeaderMessages from './header-messages';

import HeaderNotifications from './header-notifications';
import HeaderTasks from './header-tasks';
import postal from 'postal';
import { message } from 'antd';
const channel = postal.channel("task");



const signAction = channel.subscribe("credit.saved", function(data, envelope) {
  message.success("评分已经修改" + data);
});

export default React.createClass({
  getInitialState: function () {
    return {
      messages: [],
      notifications: [],
      tasks: []
    }
  },
  pushMenu: function () {
    var body = document.body;
    if (body.clientWidth > 768) {
      if (body.className.indexOf('sidebar-collapse') === -1) {
        body.className += ' sidebar-collapse';
      } else {
        body.className = body.className.replace(' sidebar-collapse', '');
      }
    } else {
      if (body.className.indexOf('sidebar-open') === -1) {
        body.className += ' sidebar-open';
      } else {
        body.className = body.className.replace(' sidebar-open', '');
      }
    }
  },
  componentDidMount: function () {
    var messages = [{
      displayName: 'Support Team',
      displayPicture: 'dist/img/user2-160x160.jpg',
      messageSubject: 'Why not buy a new awesome theme?',
      messageTime: '5 mins',
    }, {
      displayName: 'AdminLTE Design Team',
      displayPicture: 'dist/img/user3-128x128.jpg',
      messageSubject: 'Why not buy a new awesome theme?',
      messageTime: '2 hours',
    }, {
      displayName: 'Developers',
      displayPicture: 'dist/img/user4-128x128.jpg',
      messageSubject: 'Why not buy a new awesome theme?',
      messageTime: 'Today',
    }, {
      displayName: 'Sales Department',
      displayPicture: 'dist/img/user3-128x128.jpg',
      messageSubject: 'Why not buy a new awesome theme?',
      messageTime: 'Yesterday',
    }, {
      displayName: 'Reviewers',
      displayPicture: 'dist/img/user4-128x128.jpg',
      messageSubject: 'Why not buy a new awesome theme?',
      messageTime: '2 days',
    }];

    var notifications = [{
      subject: '5 new members joined today',
      className: 'fa fa-users text-aqua'
    }, {
      subject: 'Very long description here that may not fit into the page and may cause design problems',
      className: 'fa fa-warning text-yellow'
    }, {
      subject: '5 new members joined',
      className: 'fa fa-users text-red'
    }, {
      subject: '25 sales made',
      className: 'fa fa-shopping-cart text-green'
    }, {
      subject: 'You changed your username',
      className: 'fa fa-user text-red'
    }];

    var tasks = [{
      subject: 'Design some buttons',
      percentage: 20
    }, {
      subject: 'Create a nice theme',
      percentage: 40
    }, {
      subject: 'Some task I need to do',
      percentage: 60
    }, {
      subject: 'Make beautiful transitions',
      percentage: 80
    }];

    this.setState({
      messages: messages,
      notifications: notifications,
      tasks: tasks
    });
  },
  render: function () {
    var that = this;
    return (
      <header className="main-header">
        {/* Logo */}
        <Link      to="/"   className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>A</b>LT</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </Link>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top" role="navigation">
          {/* Sidebar toggle button*/}
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Messages: style can be found in dropdown.less*/}
              <li className="dropdown messages-menu">
                {/* Menu toggle button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o" />
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    {/* inner menu: contains the messages */}
                    <ul className="menu">
                      <li>{/* start message */}
                        <a href="#">
                          <div className="pull-left">
                            {/* User Image */}
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                          </div>
                          {/* Message title and timestamp */}
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o" /> 5 mins</small>
                          </h4>
                          {/* The message */}
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      {/* end message */}
                    </ul>
                    {/* /.menu */}
                  </li>
                  <li className="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>
              {/* /.messages-menu */}
              {/* Notifications Menu */}
              <li className="dropdown notifications-menu">
                {/* Menu toggle button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o" />
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    {/* Inner Menu: contains the notifications */}
                    <ul className="menu">
                      <li>{/* start notification */}
                        <a href="#">
                          <i className="fa fa-users text-aqua" /> 5 new members joined today
                        </a>
                      </li>
                      {/* end notification */}
                    </ul>
                  </li>
                  <li className="footer"><a href="#">View all</a></li>
                </ul>
              </li>
              {/* Tasks Menu */}
              <li className="dropdown tasks-menu">
                {/* Menu Toggle Button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-flag-o" />
                  <span className="label label-danger">9</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 9 tasks</li>
                  <li>
                    {/* Inner menu: contains the tasks */}
                    <ul className="menu">
                      <li>{/* Task item */}
                        <a href="#">
                          {/* Task title and progress text */}
                          <h3>
                            Design some buttons
                            <small className="pull-right">20%</small>
                          </h3>
                          {/* The progress bar */}
                          <div className="progress xs">
                            {/* Change the css width attribute to simulate progress */}
                            <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                              <span className="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      {/* end task item */}
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
              {/* User Account Menu */}
              <li className="dropdown user user-menu">
                {/* Menu Toggle Button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {/* The user image in the navbar*/}
                  <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                  {/* hidden-xs hides the username on small devices so only the image appears. */}
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  {/* The user image in the menu */}
                  <li className="user-header">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  {/* Menu Body */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                    {/* /.row */}
                  </li>
                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
});
