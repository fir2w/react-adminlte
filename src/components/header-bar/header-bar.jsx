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

              <li className="messages-menu ng-scope" has-any-authority="ROLE_ADMIN">
                <a href="./poss_files/poss.html" className="dropdown-toggle" ng-click="changeMenu(module.moduleKey);"
                   tabIndex={0}><span className="ng-binding">对账</span></a>
              </li>
              <li className="messages-menu ng-scope" has-any-authority="ROLE_ADMIN,ROLE_USER,ROLE_ISSUER,ROLE_FMALL">
                <a href="./poss_files/poss.html" className="dropdown-toggle" ng-click="changeMenu(module.moduleKey);"
                   tabIndex={0}><span className="ng-binding">系统通知</span></a>
              </li>
              <li className="messages-menu ng-scope" has-any-authority="ROLE_ADMIN,ROLE_USER,ROLE_ISSUER,ROLE_FMALL">
                <a href="./poss_files/poss.html" className="dropdown-toggle" ng-click="changeMenu(module.moduleKey);"
                   tabIndex={0}><span className="ng-binding">测试</span></a>
              </li>
              <li className="dropdown pointer" style={{}}>
                <a className="dropdown-toggle" data-toggle="dropdown" href aria-expanded="false">
            <span>
              <span className="glyphicon glyphicon-user"/>
              <span className="hidden-sm ng-scope ng-binding" translate="global.menu.account.main">账号</span>
              <b className="caret"/>
            </span>
                </a>
                <ul className="dropdown-menu">
                  <li ui-sref-active="active"><a ui-sref="settings" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in" href="#/settings"><span
                    className="glyphicon glyphicon-wrench"/>
                    &nbsp;<span translate="global.menu.account.settings">设置</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="password" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in" href="#/password"><span
                    className="glyphicon glyphicon-lock"/>
                    &nbsp;<span translate="global.menu.account.password">密码</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="sessions" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in" href="#/sessions"><span
                    className="glyphicon glyphicon-cloud"/>
                    &nbsp;<span translate="global.menu.account.sessions">会话</span></a></li>
                  <li ui-sref-active="active">
                    <a id="logout" href ng-click="logout()" data-toggle="collapse" data-target=".navbar-collapse.in"
                       tabIndex={0}>
                      <span className="glyphicon glyphicon-log-out"/>
                      &nbsp;<span translate="global.menu.account.logout">退出</span></a></li>
                </ul>
              </li>


              <li has-authority="ROLE_ADMIN" className="dropdown pointer ">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <span>
                      <span className="glyphicon glyphicon-tower"/>
                      <span className="hidden-sm " translate="global.menu.admin.main">管理</span>
                      <b className="caret"/>
                    </span>
                </a>
                <ul className="dropdown-menu">
                  <li ui-sref-active="active"><a ui-sref="user-management" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in"
                                                 href="#/user-management"><span
                    className="glyphicon glyphicon-user"/>
                    &nbsp;<span translate="global.menu.admin.user-management">User management</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="metrics" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in"
                                                 href="#/metrics"><span
                    className="glyphicon glyphicon-dashboard"/>
                    &nbsp;<span translate="global.menu.admin.metrics">资源监控</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="health" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in"
                                                 href="#/health"><span
                    className="glyphicon glyphicon-heart"/>
                    &nbsp;<span translate="global.menu.admin.health">服务状态</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="configuration" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in"
                                                 href="#/configuration"><span
                    className="glyphicon glyphicon-list-alt"/>
                    &nbsp;<span translate="global.menu.admin.configuration">配置</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="audits" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in"
                                                 href="#/audits"><span
                    className="glyphicon glyphicon-bell"/>
                    &nbsp;<span translate="global.menu.admin.audits">审核</span></a></li>
                  <li ui-sref-active="active"><a ui-sref="logs" data-toggle="collapse"
                                                 data-target=".navbar-collapse.in"
                                                 href="#/logs"><span
                    className="glyphicon glyphicon-tasks"/>
                    &nbsp;<span translate="global.menu.admin.logs">日志</span></a></li>
                  <li ui-sref-active="active" aria-hidden="false" className><a ui-sref="docs" data-toggle="collapse"
                                                                               data-target=".navbar-collapse.in"
                                                                               href="#/docs"><span
                    className="glyphicon glyphicon-book"/>
                    &nbsp;<span translate="global.menu.admin.apidocs">API</span></a></li>
                  <li aria-hidden="false" className><a href="http://func76admin.vfinance.cn/console" target="_tab"
                                                       data-toggle="collapse"
                                                       data-target=".navbar-collapse.in"><span
                    className="glyphicon glyphicon-hdd"/>
                    &nbsp;<span translate="global.menu.admin.database">数据库</span></a></li>
                </ul>
              </li>


            </ul>
          </div>
        </nav>
      </header>
    )
  }
});
