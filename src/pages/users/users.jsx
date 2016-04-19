import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            用户查询
            <small>所有用户都在这里</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> 投融资平台</a></li>
            <li><a href="#">页面</a></li>
            <li className="active">用户查询</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Responsive Hover Table</h3>
                  <div className="box-tools">
                    <div className="input-group input-group-sm" style={{width: 150}}>
                      <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody><tr>
                      <th>ID</th>
                      <th>姓名</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                    </tr>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-success">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>219</td>
                      <td>Alexander Pierce</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-warning">Pending</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>657</td>
                      <td>Bob Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-primary">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    <tr>
                      <td>175</td>
                      <td>Mike Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="label label-danger">Denied</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    </tbody></table>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
          </div>
        </section>
      </div>
    )
  }
});