import React from 'react';

import logo from '../../img/book.svg';
import logo1 from '../../img/book1.svg';




class Navgation  extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			activeClass: 'navigation',
			buttonClass: 'navigation__right-btn',
			svgClass: 'logo'
		}


	}

	componentDidMount () {
		console.log("Navigation",this.props)
		let className;
		let classButton;
		let classSvg;
		window.addEventListener('scroll', (event) => {
			if(document.documentElement.scrollTop > 10){
				className = 'navigation navigation-scroll';
				classButton = 'navigation__right-btn navigation__right-btn-scroll';
				classSvg = 'logo1'
			} else {
				className = 'navigation';
				classButton = 'navigation__right-btn';
				classSvg = 'logo'
			}
			this.setState({
				activeClass: className,
				buttonClass:classButton,
				svgClass: classSvg
			});
		});
	
	  }

	  removeToken(){
		  window.sessionStorage.removeItem('token');
		  
	  }

  

	render(){
		const {isSignIn, changeRoute} = this.props;
		return(
			
					<div className = 'section-navigation'>
						{isSignIn === false
					?
					<nav className={this.state.activeClass} >
						<div className="navigation__logo-box">
							
							{ this.state.svgClass === 'logo'
								? <img onClick = {() =>  {
									changeRoute('home')
									this.removeToken()
								}} className="navigation__logo" alt= "logo" src = {logo} />
								: <img onClick = {() => {
									changeRoute('home')
									this.removeToken()
								}} className="navigation__logo" alt= "logo" src = {logo1} />
							}
						</div>
						<div className="navigation__right">
							<div className={this.state.buttonClass} onClick = {() => changeRoute('signin-form')}>
								<p  className="navigation__right-signin-p"> Prihlásenie</p>
							</div>
							<div className={this.state.buttonClass} onClick = {() => changeRoute('register-form')}>
								<p  className="navigation__right-register-p"> Registrácia</p>
							</div>
						</div>	
					</nav>
					:
					<nav className={this.state.activeClass} >
						<div className="navigation__logo-box">
							
							{ this.state.svgClass === 'logo'
								? <img onClick = {() =>  {
									this.props.onUpdateInputForm(true)
									setTimeout(() => {
										changeRoute('book')
									}, 100);
									
								}} className="navigation__logo" alt= "logo" src = {logo} />
								: <img onClick = {() => {
									this.props.onUpdateInputForm(true)
									setTimeout(() => {
										changeRoute('book')
									}, 100);
									
									
								}} className="navigation__logo" alt= "logo" src = {logo1} />
							}
						</div>
						<div className="navigation__right">
							
							<div className={this.state.buttonClass} onClick = {() => {
									changeRoute('announcements');
								}}>
									<p className = ""> Oznamy </p>
							</div>
							<div className={this.state.buttonClass} onClick = {() => {
									this.props.onProfileOpen(true)
								}}>
									<p className = ""> Profil </p>
							</div>
							
							{
								this.props.user.function_pz === 'Hospodár' &&
								<div className={this.state.buttonClass} onClick = {() => {
									changeRoute('edit-users');
								}}>
									<p className = ""> Úprava členov </p>
							</div>
							}
							<div className={this.state.buttonClass} onClick = {() => {
									this.props.onChangePasswordOpen(true)
								}}>
									<p className = ""> Zmena hesla </p>
							</div>
							<div className={this.state.buttonClass} onClick = {() => {
								changeRoute('home')
								this.removeToken()
							}
							}>
								<p  className="navigation__right-signin-p">Odhlásenie</p>
							</div>
						
						
						</div>	
					</nav>
				}
					</div>
					
					
						
			// {/* </nav> */}
			
		);
	}
	
}

export default Navgation;