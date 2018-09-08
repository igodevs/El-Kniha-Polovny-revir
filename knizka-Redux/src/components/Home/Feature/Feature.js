import React from 'react';
import pencil from '../../../img/pencil.svg';
import eye from '../../../img/eye.svg';
import notification from '../../../img/notification.svg'
import FeatureBlock from './FeatureBlock';

class Feature extends React.Component {

    render () {
        return (
            <section className="section_feature"> 
                <FeatureBlock 
                svg = {pencil}
                header = {'Zápis a odpis'}
                text = {'Zapís a odpis z knihy návštev poľovného revíru kdekoľvek a kedykoľvek.'}
                />
                <FeatureBlock 
                svg = {eye}
                header = {'Kontrola'}
                text = {'Kontrola pohybu členov združenia v revívi kdekoľvek a kedykoľvek.'}
                />
                <FeatureBlock 
                svg = {notification}
                header = {'Oznámenia'}
                text = {'Pridanie oznámení s prílohami.'}
                />
                
            </section>
        );
    }

        

}

export default Feature;
