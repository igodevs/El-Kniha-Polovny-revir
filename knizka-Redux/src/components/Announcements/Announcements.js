import React from 'react';


class Announcements extends React.Component {

    constructor(){
        super();
        this.state = {
            data: [],
            selectedFile: '',
            download: null
        }
    }

    componentDidMount(){
        this.loadAnnouncements();
    }
    componentDidUpdate(){
        if(this.props.updateAnnouncements === true) {
            
            setTimeout(() => {
                this.loadAnnouncements();
                this.props.onUpdateAnnouncements(false);
            }, 20);
            
         } 
        //  else {
        //     console.log('false')
        // }
    }

    loadAnnouncements = () => {
        fetch(`http://localhost:3000/announcementsData/${this.props.user.name_pz}/${this.props.offsetDataAnnouncements}`, {
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                Authorization: window.sessionStorage.getItem('token')
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({data: data});
            console.log("data", this.state.data)
        })
        .catch(err => console.log('Err'));
        
        
    }

    // click = () => {
    //     console.log('click');
    //     console.log(this.state.selectedFile)
    //     const fd = new FormData();
    //     fd.append('selectedFile', this.state.selectedFile);
    //     console.log("fd",fd)

    //     fetch(`http://localhost:3000/announcementsD/${this.state.selectedFile}`, {
    //         method: 'get',
    //         headers: {  
    //             Authorization: window.sessionStorage.getItem('token')
    //         }
    //     })
    //     .then(resp => {
    //         this.setState({download: resp})
    //         console.log("download", this.state.download)
    //     })

    //     .catch(err => console.log(err))
    // }
    

    render(){
        
        return (
            <section className="section_announcements-data">
                    { this.state.data.map((user, i) => {
                        return( 
                            <div   key = {i} className = "announcements-card">
                                <div className="announcements-card__block--right">
                                    <div className="announcements-card__block--right-not-skew">
                                        <p className = "announcements-card__block--right-text">{this.state.data[i].name}</p>
                                        <p className = "announcements-card__block--right-text">{this.state.data[i].function_pz}</p>
                                    </div>
                                    
                                </div>
                                <div className="announcements-card__block--left">
                                    <p className = "announcements-card__block--left-text">{this.state.data[i].ann}</p>
                                    <p onClick = {() => {
                                        this.props.onDownloadFileNameChange(`${this.state.data[i].file}`)
                                        //  this.click();
                                        // console.log(this.props.selectedFile)
                                        setTimeout(() => {
                                            window.open(`http://localhost:3000/announcementsD/${this.props.selectedFile}`);
                                        }, 10);
                                          window.open(`http://localhost:3000/announcementsD/${this.props.selectedFile}`);
                                        }}
                                         className = "announcements-card__block--left-addition"   >{this.state.data[i].file}</p>
                                </div>
                            </div>
                        )
                       
                    })
                    }
                    
                    
            </section>
        )

        
        
    }
}
export default Announcements;