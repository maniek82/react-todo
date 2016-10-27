var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          
          {props.children}
           
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
