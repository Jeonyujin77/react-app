import React,{ Component } from 'react';

class SideBar extends Component {
  // 이전값과 현재값을 비교하여 변경된 경우에만 렌더링을 한다.
  shouldComponentUpdate(newProps, newState) {
    if(this.props.data === newProps.data) {
      return false;
    }
    return true
  }
  render() {
    var lists = []
    var data = this.props.data
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            // data-id={data[i].id}
            onClick={function(id, e) {
              e.preventDefault();
              // this.props.onChangePage(e.target.dataset.id);
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            > {data[i].title} </a>
        </li>)
      i++;
    }
    return (
      <nav>
        <ul>
            {lists}
        </ul>
    </nav>
    );
  }
}

export default SideBar;