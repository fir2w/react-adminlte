import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';

const ACTIVE = {color: 'red'};

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

          <li><Link to="/users" activeStyle={ACTIVE}>/users2</Link></li>
          <li><IndexLink to="/users" activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

          <li><Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          <li><Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                    activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

          <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Index!</h2>
      </div>
    );
  }
});

var Users = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    );
  }
});

var UsersIndex = React.createClass({
  render: function () {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    );
  }
});


var User = React.createClass({
  render: function () {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    );
  }
});

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Aboutxxxx</h2>
      </div>
    );
  }
});


const Bootstrapper = {
  start() {
    ReactDOM.render((
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="users" component={Users}>
            <IndexRoute component={UsersIndex}/>
            <Route path=":id" component={User}/>
          </Route>
        </Route>
      </Router>
    ), document.getElementById('example'))
  }
};

export default Bootstrapper;