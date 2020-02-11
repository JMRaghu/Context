import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
  /*class Button extends React.Component{
  method 1
    static contextType = LanguageContext;
    render(){
        console.log(this.context)
        var text = this.context === 'English' ? 'Submit' : 'Voorleggen'
        return(
                <button className="ui button primary">{text}</button>
        )
    }
} */
/* this should be written after class extends
static contextType = LanguageContext 
 OR
 this should be written outside at same place
 Button.contextType = LanguageContext  */

 class Button extends React.Component{
    /* renderLanguage(value){
        return value === "english"? "Submit" : "Voorleggen"   
    } */ // no much change but changing only parameter value


    renderLanguage(language){
        return language === "english"? "Submit" : "Voorleggen"   
    }
    renderButtonColor(color){
        return(
        <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer >
                        {/*{value=>this.renderLanguage(value)}*/}{/* it containls only value */}
                        {/* it contains object so destructuring language */}
                        {({language})=>this.renderLanguage(language)}
                    </LanguageContext.Consumer>
                </button>
        )}
 
    render(){
        return(
            <ColorContext.Consumer>
            {(color) =>this.renderButtonColor(color)}
            </ColorContext.Consumer>
        )
    }
    }
export default Button;