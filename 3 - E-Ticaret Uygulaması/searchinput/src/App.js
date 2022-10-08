import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {searhterm: "" }
 
  handleChange= (event) => {
    // inputdaki her değiştiğinde stetemiz update oluyor
    this.setState({searhterm: event.target.value});
    
  }
  postUsers =(e) => {
    // başka sayfaya yönledirme işlemi ulmasın diye preventDefault kullandık(submit durumu için)
    e.preventDefault(); 
    // State deki searhterm değerini bir değişkene atadık url ye this.state.searhterm yazmamamk için
    let term=this.state.searhterm
    // API end pointine get isteği bulunduk ve ordan gelen değeri consola yazdırdık f12 ile gelen değeri görebiliriz
    fetch(`http://localhost:8080/search/stream?term=${term}`)
    .then(response => response.json())
    .then(data =>console.log("response data:",data) );     
    // istek gittikden sonra searchstate "" boş yaptık
    this.setState({searhterm:""})
  }
  render() {
    return (
      <div className="v-container">        
        <div className="search">
          <input type="text"
            id="name"
            name="searhterm"
            value={this.state.searhterm}
            onChange={this.handleChange}
            className="searchTerm"
            placeholder="Search" />
          <button onClick={this.postUsers} className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
