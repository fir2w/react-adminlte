React.createClass({
  render: function() {
    return (

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Simple Tables
            <small>preview of simple tables</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li className="active">Simple</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Bordered Table</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody><tr>
                        <th style={{width: 10}}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{width: 40}}>Label</th>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-yellow" style={{width: '70%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-yellow">70%</span></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-primary" style={{width: '30%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-success" style={{width: '90%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-green">90%</span></td>
                      </tr>
                    </tbody></table>
                </div>
                {/* /.box-body */}
                <div className="box-footer clearfix">
                  <ul className="pagination pagination-sm no-margin pull-right">
                    <li><a href="#">«</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">»</a></li>
                  </ul>
                </div>
              </div>
              {/* /.box */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Condensed Full Width Table</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <table className="table table-condensed">
                    <tbody><tr>
                        <th style={{width: 10}}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{width: 40}}>Label</th>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-yellow" style={{width: '70%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-yellow">70%</span></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-primary" style={{width: '30%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-success" style={{width: '90%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-green">90%</span></td>
                      </tr>
                    </tbody></table>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Simple Full Width Table</h3>
                  <div className="box-tools">
                    <ul className="pagination pagination-sm no-margin pull-right">
                      <li><a href="#">«</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <table className="table">
                    <tbody><tr>
                        <th style={{width: 10}}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{width: 40}}>Label</th>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-yellow" style={{width: '70%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-yellow">70%</span></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-primary" style={{width: '30%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-success" style={{width: '90%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-green">90%</span></td>
                      </tr>
                    </tbody></table>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Striped Full Width Table</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <table className="table table-striped">
                    <tbody><tr>
                        <th style={{width: 10}}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{width: 40}}>Label</th>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-yellow" style={{width: '70%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-yellow">70%</span></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-primary" style={{width: '30%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-success" style={{width: '90%'}} />
                          </div>
                        </td>
                        <td><span className="badge bg-green">90%</span></td>
                      </tr>
                    </tbody></table>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
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
                        <th>User</th>
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
        {/* /.content */}
      </div>
    );
  }
});