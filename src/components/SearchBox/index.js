import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBox = ({searchfield, searchChange})=>{

    return(
        <div className = 'pa2 '>

            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search for Robot friends'
            onChange = {searchChange}
            />
        </div>    
    )
}







export default SearchBox;