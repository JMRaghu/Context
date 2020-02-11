import React, { Component } from 'react';
import UserCreate from './UserCreate';
//import LanguageContext from '../contexts/LanguageContext'
import {LanguageStore} from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageChange from '../components/LanguageChange'

class App extends Component{
    //commenting bcoz we crearted languageStore in contect folder
    /* state={language:'english'};

    onLanguageChange = lang => {
        this.setState({language:lang})
    } */
    /* render(){
        return(
            <div className="ui container">
                <LanguageChange />
                <ColorContext.Provider value='red'>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
            
        )
    } */
        render(){
            return(
                <div className="ui container">
                    <LanguageStore>
                        <LanguageChange />
                        <ColorContext.Provider value='red'>
                                <UserCreate/>
                        </ColorContext.Provider>
                    </LanguageStore>
                </div>
                
            )
    }
}
export default App;