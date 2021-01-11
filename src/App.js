import './App.css';
import { Component, createContext } from 'react';
import Subject from './components/subject';
import SideBar from './components/sideBar';
import ReadContent from './components/readContent';
import CreateContent from './components/createContent';
import Control from './components/control';

// funtion type
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class type
class App extends Component {
  
  constructor(props) { 
    super(props);
    // 컴포넌트 초기화
    // props, state 값 변경 시 해당되는 컴포넌트의 render함수가 호출됨. 즉 화면이 다시 그려짐.
    this.state = { 
      mode: 'create',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>;
    }

    return (
      
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}
        >
        </Subject>
        <SideBar 
          onChangePage={function(id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            })
          }.bind(this)} 
          data={this.state.contents}
        ></SideBar>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Control>
        
        {_article}
      </div>
    );
  }
}
export default App;
