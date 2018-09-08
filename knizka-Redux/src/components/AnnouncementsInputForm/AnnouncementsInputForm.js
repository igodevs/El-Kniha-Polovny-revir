import React from 'react';

import clip from '../../img/clip.svg';

class AnnouncementsInputForm extends React.Component {

    constructor(){
        super();
        this.state = {
            name: 'Igor',
            ann: '',
            selectedFile: null,
            selectedFileName: null
        }
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        setTimeout(() => {
            if(this.state.selectedFile !== null) {
                        this.setState({ 
                            selectedFileName: this.state.selectedFile.name
                        })
                    }
        }, 20);
        // console.log(this.state.selectedFile);
        // ,() => { 
        //     if(this.state.selectedFile !== null) {
        //         this.setState({ 
        //             selectedFileName: this.state.selectedFile.name
        //         })
        //     }
        // })


    }

    fileUploadHandler = () => {
        // const fd = new FormData();
        // fd.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);
        // fd.append('name', this.state.name)

        // console.log(fd.name);
        // fetch('http://localhost:3000/announcements', {
        //     method: 'post',
        //     headers: {
                
        //         Authorization: window.sessionStorage.getItem('token')
        //     },
        //     body: fd
        // })
        // .then(resp => {
        //     if(resp.status === 200){
        //         fetch('http://localhost:3000/announcementsData', {
        //             method: 'post',
        //             headers: {
        //                 'Content-type': 'application/json',
        //                 Authorization: window.sessionStorage.getItem('token')
        //             },
        //             body: JSON.stringify({
        //                 name: this.state.name,
        //                 oznam: this.state.oznam,
        //                 priloha: this.state.selectedFile.name
        //             })}
                    
        //         ).then(res => res.json("sucess"))
        //         // .then(data => console.log(data))
        //         .catch(err => console.log('fetch2'))
        //     }
        
        // })
        // this.setState({
        //     selectedFileName: this.state.selectedFile.name
        // })

        fetch('http://localhost:3000/announcementsData', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: window.sessionStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        id_user: this.props.user.id,
                        name_pz: this.props.user.name_pz,
                        name: this.props.user.name,
                        function_pz: this.props.user.function_pz,
                        ann: this.state.ann,
                        file: this.state.selectedFileName
                    })}
                    
                ).then(res => {
                    if(this.state.selectedFile !== null){
                        const fd = new FormData();
                        fd.append('selectedFile', this.state.selectedFile, this.state.selectedFile.name);
                        fd.append('name', this.state.name)

                        console.log(fd.name);
                        fetch('http://localhost:3000/announcements', {
                            method: 'post',
                            headers: {
                                
                                Authorization: window.sessionStorage.getItem('token')
                            },
                            body: fd
                        })
                        .then(resp => {
                            // resp.json("priloha")
                            this.props.onUpdateAnnouncements(true);
                            console.log("update: ", this.props.updateAnnouncements);
                        })
                        .catch(err => console.log(err))
                    } else {
                        res.json("oznam");
                        this.props.onUpdateAnnouncements(true);
                        console.log("update: ", this.props.updateAnnouncements);
                    }
                    
                })
                // .then(data => console.log(data))
                .catch(err => console.log('fetch2'))
        
        
        // .catch(console.log)

        // axios.post('http://localhost:3000/announcements', fd)
        // .then(resp=> resp.json())
        // .catch(err => console.log(err))
        
    }

    inputChange = (event) => {
        this.setState({ann: event.target.value});
    }

    render(){
        
        return (
            <section className="section_announcements-input">
                    
                    <div className= 'announcements-form'>
                        <div className= 'announcements-inputs'>
                            <textarea  onChange={this.inputChange} type="text" className="form__input announcements-inputs__input"/>
                            <input style= {{display: 'none'}} type="file" ref = {fileInput => this.fileInput = fileInput}  onChange = {this.fileSelectedHandler}/>
                            <img className="announcements-inputs__logo" alt= "logo" src = {clip} onClick = {() => this.fileInput.click()}/>
                            <p className = "announcements-inputs__addition">{this.state.selectedFileName}</p>
                        </div>
                        
                        <div className="announcements-btn">
                        <button onClick={this.fileUploadHandler} className="btn btn-brown ">Pridať oznam</button>
                        </div>
                        
                    </div>
                    
            </section>
        )

        
        
    }
}
export default AnnouncementsInputForm;