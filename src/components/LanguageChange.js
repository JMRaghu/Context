import React from 'react';
import LanguageContext from '../contexts/LanguageContext'
class LanguageChange extends React.Component{
    static contextType = LanguageContext;
    render(){
        console.log(this.context);
        return(
            <div>
                    select a Language:
                    <i className='flag us' onClick={() => this.context.onLanguageChangeSelect('english')}/>
                    <i className='flag de' onClick={() => this.context.onLanguageChangeSelect('german')}/>
                </div>
        )
    }
}

export default LanguageChange