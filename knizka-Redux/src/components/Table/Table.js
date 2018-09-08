import React from 'react';
import TableData from './TableData';


class Table extends React.Component {

  constructor(){
    super();
    this.state = {
      book: [],
      function: true
    }
  }

  componentDidMount() {
    
    console.log("PZZZ", this.props.user.name_pz)
    // this.getNumberOfRowsTable();
    
    
    this.loadData();
  }

  componentDidUpdate(){
    if(this.props.updateDataBook === true){
      setTimeout(() => {
        this.loadData();
        this.props.getLastInsertToBook();
        this.props.onUpdateDataBook(false);
      }, 20); 
    }else {
      return false;
    } 
  }

  

  
  

  loadData = () => {
    const token = window.sessionStorage.getItem('token');
    fetch(`http://localhost:3000/book/${this.props.user.name_pz}/${this.props.user.function_pz}/${this.props.numberOfVisualizeData}/${this.props.offsetDataTable}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({book:data})
      console.log(this.state.book)
    })
    .catch(console.log)
  }

  
  render(){
    return(

      <div className="section-table">

            {this.props.user.function_pz === 'Hospodár' ?

                <div className="table__thead">

                  <p className = "table__thead-p">Dátum a čas zápisu</p>

                  <p className = "table__thead-p">Dátum</p>
                  <p className = "table__thead-p">Čas príchodu/odchodu</p>
                  <p className = "table__thead-p">Meno a priezvisko poľovníka</p>
                  <p className = "table__thead-p">Lokalita</p>
                  <p className = "table__thead-p">Spôsob poľovania</p>
                  <p className = "table__thead-p">Ďalšie informácie</p>
                    
                </div>

                : <div className="table__thead">
                    <p className = "table__thead-p">Dátum</p>
                    <p className = "table__thead-p">Čas príchodu/odchodu</p>
                    <p className = "table__thead-p">Meno a priezvisko poľovníka</p>
                    <p className = "table__thead-p">Lokalita</p>
                    <p className = "table__thead-p">Spôsob poľovania</p>
                    <p className = "table__thead-p">Ďalšie informácie</p>
                      
                  </div>
                }
                
                  {this.props.user.function_pz === 'Hospodár' ?

                    this.state.book.map((user, i) => {
                      return (
                        <TableData 
                        function = {this.state.function}
                        function_pz = {this.props.user.function_pz} key = {i}
                        onAnotherBookDataChange = {this.props.onAnotherBookDataChange}
                        isAnotherBookInfoOpen = {this.props.isAnotherBookInfoOpen}
                        onAnotherBookInfoOpen = {this.props.onAnotherBookInfoOpen}
                        // insert_time = {this.state.book[i].insert_time}
                        // date = {this.state.book[i].date}
                        // time = {this.state.book[i].time}
                        // name = {this.state.book[i].name}
                        // guest_name = {this.state.book[i].guest_name}
                        // location = {this.state.book[i].location}
                        // hunting_method = {this.state.book[i].hunting_method}
                        // count = {this.state.book[i].count}
                        // species_gender = {this.state.book[i].species_gender}
                        book = {this.state.book[i]}
                        />
                      )
                    })
                    
  
                  : 
                  this.state.book.map((user, i) => {
                    return (
                      <TableData function_pz = {this.props.user.function_pz} key = {i}
                      // date = {this.state.book[i].date}
                      // time = {this.state.book[i].time}
                      // name = {this.state.book[i].name}
                      // guest_name = {this.state.book[i].guest_name}
                      // location = {this.state.book[i].location}
                      // hunting_method = {this.state.book[i].hunting_method}
                      onAnotherBookDataChange = {this.props.onAnotherBookDataChange}
                      isAnotherBookInfoOpen = {this.props.isAnotherBookInfoOpen}
                      onAnotherBookInfoOpen = {this.props.onAnotherBookInfoOpen}
                      book = {this.state.book[i]}
                      />
                    )
                  })
                  }


                    
                  


      </div>
      );
  }
	


}

export default Table;