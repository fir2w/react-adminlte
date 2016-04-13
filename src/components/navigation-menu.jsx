import React from 'react';
import {  Link, IndexLink } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          <div ui-view="sidebar" className>
            <section className="sidebar " style={{height: 'auto'}}>
              <form action="./poss_files/poss.html" method="get" className="sidebar-form">
                <div className="input-group">
                  <input type="text" ng-model="search" name="q" className="form-control" placeholder="产品名称/用户名/订单号"
                         tabIndex={0} aria-invalid="false"/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                  className="fa fa-search"/>
                </button>
              </span>
                </div>
              </form>
              <ul className="sidebar-menu " ui-sref-active="active">
                <li className="treeview  active" style={{}}>
                  <Link      to="/creditratingMgt">信用评级管理 </Link>
                </li>
                <li className="treeview  active" style={{}}>
                  <Link      to="/orders"     >订单查询</Link>
                </li>
                <li className="treeview ">
                  <Link      to="/users" >用户查询</Link>
                </li>
              </ul>
            </section>
          </div>
        </section>
        {/* /.sidebar */}
      </aside>
    )
  }
});