var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", {className: "App"}, 
        React.createElement(NavBar, null), 
        React.createElement(MainFrame, null)
      )
    );
  }
});

var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    return (
      React.createElement("nav", {className: "navbar navbar-inverse"}, 
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
              React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"})
            ), 
            React.createElement("a", {className: "navbar-brand", href: "#"}, "Brand")
          ), 

          React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Link ", React.createElement("span", {className: "sr-only"}, "(current)"))), 
              React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
            ), 
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
              React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
              React.createElement("li", {className: "dropdown"}, 
                React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {className: "caret"})), 
                React.createElement("ul", {className: "dropdown-menu"}, 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                  React.createElement("li", {role: "separator", className: "divider"}), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
                )
              )
            )
          )
        )
      )
    );
  }
});

var MainFrame = React.createClass({displayName: "MainFrame",
  render: function() {
    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-6"}, 
            React.createElement(MajorSelector, null), 
            React.createElement(MajorTable, null)
          ), 
          React.createElement("div", {className: "col-md-6"}, 
            React.createElement(CourseSelector, null)
          )
        )
      )
    );
  }
});

var MajorSelector = React.createClass({displayName: "MajorSelector",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("select", {className: "form-control"}, 
          React.createElement("option", null, "Science"), 
          React.createElement("option", null, "Art"), 
          React.createElement("option", null, "Commerce")
        ), 
        React.createElement("br", null), 
        React.createElement("select", {className: "form-control"}, 
          React.createElement("option", null, "Computer Science")
        ), 
        React.createElement("br", null), 
        React.createElement("select", {className: "form-control"}, 
          React.createElement("option", null, "Computer Science"), 
          React.createElement("option", null, "Combined Major with Computer Science")
        ), 
        React.createElement("br", null)
      )
    );
  }
});

var MajorTable = React.createClass({displayName: "MajorTable",
  render: function() {
    return (
      React.createElement("ul", {className: "list-group"}, 
        React.createElement("li", {className: "list-group-item active"}, "Cras justo odio"), 
        React.createElement("li", {className: "list-group-item"}, "Dapibus ac facilisis in"), 
        React.createElement("li", {className: "list-group-item"}, "Morbi leo risus"), 
        React.createElement("li", {className: "list-group-item"}, "Porta ac consectetur ac"), 
        React.createElement("li", {className: "list-group-item"}, "Vestibulum at eros")
      )
    );
  }
});

var CourseSelector = React.createClass({displayName: "CourseSelector",
  render: function() {
    return (
      React.createElement("form", {className: "form-horizontal"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {for: "inputEmail3", className: "col-sm-4 control-label"}, "Subject Area"), 
          React.createElement("div", {className: "col-sm-8"}, 
            React.createElement("input", {type: "email", className: "form-control", id: "inputEmail3", placeholder: "CPSC"})
          )
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {for: "inputPassword3", className: "col-sm-4 control-label"}, "Course Number"), 
          React.createElement("div", {className: "col-sm-8"}, 
            React.createElement("input", {type: "password", className: "form-control", id: "inputPassword3", placeholder: "110"})
          )
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("div", {className: "col-sm-offset-2 col-sm-10"}, 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox"}, " Remember me ")
              )
            )
          )
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("div", {className: "col-sm-offset-2 col-sm-10"}, 
            React.createElement("button", {type: "submit", className: "btn btn-default"}, "Sign in")
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('content')
);
