import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component{
    static contextType = LanguageContext
    render(){
        //var text = this.context === 'english' ? 'Name' : 'Naam' // it was containg only value
        //now it contains object
        var text = this.context.language === 'english' ? 'Name' : 'Naam'
        return(
            <div className="ui field">
                <lable>{text}</lable>
                <input/>
            </div>
        )
    }
}
export default Field;