import './App.css';
import { Component } from 'react';
import Subject from './components/subject';
import SideBar from './components/sideBar';
import Content from './components/content';

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
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web!"></Subject>
        <Subject title="React" sub="For UI"></Subject> 
        <SideBar></SideBar>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        <Content title="리엑트 공부" desc="다음 프로젝트 때 필요할지도..."></Content>
      </div>
    );
  }
}
export default App;
