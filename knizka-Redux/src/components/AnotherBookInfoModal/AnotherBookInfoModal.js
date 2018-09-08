import React from 'react';
class AnotherBookInfoModal extends React.Component {

   

	render(){

		return (
			<div className = "profile-modal">
           
                <div className="another_book_data">
                    <div className="another_book_data__content">
                        {/* <p>{this.props.anotherBookData.guest_name}</p>
                        <p>{this.props.anotherBookData.count}</p>
                        <p>{this.props.anotherBookData.species_gender}</p>
                        <p>{this.props.anotherBookData.time_location}</p>
                        <p>{this.props.anotherBookData.u_n}</p>
                        <p>{this.props.anotherBookData.tag_number}</p>
                        <p>{this.props.anotherBookData.other}</p> */}

                        <ul className="another_book_data__list">
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Hosť: </span>{this.props.anotherBookData.guest_name}</a></li>
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Druh/Pohlavie: </span>{this.props.anotherBookData.species_gender}</a></li>
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Počet: </span>{this.props.anotherBookData.count}</a></li>
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Čas - miesto lovu: </span>{this.props.anotherBookData.time_location}</a></li>
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Ulovená/Nájdený úhyn: </span>{this.props.anotherBookData.u_n}</a></li>
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Číslo použitej značky: </span>{this.props.anotherBookData.tag_number}</a></li>
                            <li className="another_book_data__item"><a href="" className="another_book_data__link"><span>Ostatné </span>{this.props.anotherBookData.other}</a></li>
                        </ul>
                    </div>
                    
                    <div className='profile__close' onClick={() => {

                        this.props.onAnotherBookInfoOpen(false);

                    }} >&times;</div>

                     
                </div>
                
			</div>
            
		);
	}
	
}

export default AnotherBookInfoModal;