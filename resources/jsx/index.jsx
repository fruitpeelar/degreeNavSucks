var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <NavBar />
        <MainFrame />
      </div>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

var MainFrame = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <MajorSelector />
            <MajorTable />
          </div>
          <div className="col-md-6">
            <CourseSelector />
          </div>
        </div>
      </div>
    );
  }
});

var MajorSelector = React.createClass({
  render: function() {
    return (
      <div>
        <select className="form-control">
          <option>Science</option>
          <option>Art</option>
          <option>Commerce</option>
        </select>
        <br />
        <select className="form-control">
          <option>Computer Science</option>
        </select>
        <br />
        <select className="form-control">
          <option>Computer Science</option>
          <option>Combined Major with Computer Science</option>
        </select>
        <br />
      </div>
    );
  }
});

var MajorTable = React.createClass({
  render: function() {
    return (
      <ul className="list-group">
        <li className="list-group-item active">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    );
  }
});

var CourseSelector = React.createClass({
  render: function() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-4 control-label">Subject Area</label>
          <div className="col-sm-8">
            <input type="email" className="form-control" id="inputEmail3" placeholder="CPSC" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword3" className="col-sm-4 control-label">Course Number</label>
          <div className="col-sm-8">
            <input type="password" className="form-control" id="inputPassword3" placeholder="110" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox"> Remember me </input>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
    );
  }
});

React.render(
  <App />,
  document.getElementById('content')
);
