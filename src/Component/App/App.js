import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
import {
  fetchCrawl, 
  fetchData
} from '../../helper/apiCaller';

class App extends Component {
  constructor() {
    super()

    this.state = {
      crawlData: {},
      data: []
    }
  }

  async componentDidMount() {
    const crawlData = await fetchCrawl()
    this.setState({crawlData})
  }

  getData = async (button) => {
    const data = await fetchData(button)
    this.setState({
      crawlData: {},
      data
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ButtonContainer 
          getData={this.getData}
        />
        <CardContainer
          crawlData={this.state.crawlData}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
