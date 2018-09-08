import React from 'react';

class Footer extends React.Component {

    render () {
        return (
            <footer className="footer">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        {/* <li className="footer__item"><a href={null} className="footer__link">Company</a></li> */}
                        <li onClick = {() => {
									this.props.changeRoute('contact')
                                }}
                                    className="footer__item"><a href={null} className="footer__link">Kontaktujte nás</a></li>
                        <li className="footer__item"><a href={null} className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a href={null} className="footer__link">Privacy</a></li>
                        <li className="footer__item"><a href={null} className="footer__link">Terms</a></li>
                    </ul>
                </div>
                <p className="footer__copyright">
                   {`Built by`}<a  className="footer__link">{` Igor Savko`}</a>. Copyright &copy; by Igor Savko.
                </p>
                
            </footer>
        );
    }

        

}

export default Footer;
