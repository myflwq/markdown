import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import marked from 'marked';
import hljs from 'highlight.js';
import './styles/hljs.css';
import MarkSearch from './MarkSearch';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let xx = '```js\n console.log("hellow word")\n ```';
    return(

      <div>
        <div
              dangerouslySetInnerHTML={{
            __html: marked(xx)
          }}
        />
      <MarkSearch />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
