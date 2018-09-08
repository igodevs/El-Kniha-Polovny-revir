import React from 'react';


class TableData extends React.Component {


  
  render(){
    return(
      <div >

      { this.props.function && 
        this.props.function_pz === 'Hospodár' ?

          <div className="table__tbody" >
            <p className="table__tbody-p">{this.props.book.insert_time} </p>
            <p className="table__tbody-p">{this.props.book.date} </p>
            <p className="table__tbody-p">{this.props.book.time} </p>
            <p className="table__tbody-p">{this.props.book.name} </p>
            <p className="table__tbody-p">{this.props.book.location}</p>
            <p className="table__tbody-p">{this.props.book.hunting_method}</p>

            {
             
             this.props.book.time.includes('-') ?
             <p className="table__tbody-p" onClick = {() => {
              this.props.onAnotherBookDataChange(this.props.book)
              this.props.onAnotherBookInfoOpen(true)

              }} style= {{cursor: 'pointer'}} >Ďalšie údaje</p>
            
           
           : <p className="table__tbody-p" >Žiadne</p>

           }

          </div>
          :

          <div className = 'table__row'>
            <div className="table__tbody" >
            <p className="table__tbody-p">{this.props.book.date} </p>
            <p className="table__tbody-p">{this.props.book.time} </p>
            <p className="table__tbody-p">{this.props.book.name} </p>
            <p className="table__tbody-p">{this.props.book.location}</p>
            <p className="table__tbody-p">{this.props.book.hunting_method}</p>
            {
             
             this.props.book.time.includes('-') ?

              <p className="table__tbody-p" onClick = {() => {
                this.props.onAnotherBookDataChange(this.props.book)
                this.props.onAnotherBookInfoOpen(true)

                }} style= {{cursor: 'pointer'}} >Ďalšie údaje</p>
              
             
             : <p className="table__tbody-p" >Žiadne</p>

           }

            </div>

            
          </div>
          
          
          }


      </div>
      
      );
    
	


    }
}

export default TableData;