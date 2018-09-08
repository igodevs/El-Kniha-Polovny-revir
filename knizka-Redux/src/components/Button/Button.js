import React from 'react'

class Button extends React.Component {
    handleClick = () => this.props.onClick(this.props.index)
    
    render() {
      return <button
        type='button'
        className={
          this.props.isActive ? 'btn-array-clicked' : 'btn-array'
        }
        onClick={() => {
            this.props.clicked(this.props.index, this.props.component) 
            
              this.props.component === 'book' ?
              
              this.props.onOffsetData(this.props.index * 5) &&
              this.props.onUpdate(true)
              
              : this.props.component === 'announcements' ?
              this.props.onOffsetData(this.props.index * 5) &&
              this.props.onUpdate(true)

              : 
              this.props.onOffsetData(this.props.index * 5) &&
              this.props.onUpdate(true)
            
            
            // this.props.onUpdateDataBook(true);
            // console.log( this.props.index*2)
        }}
      >
        {this.props.index +1}
      </button>
    }
  }
  
export default Button;