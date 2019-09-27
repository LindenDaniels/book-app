import React, { Component } from 'react';
import './filterSelector.css';

class FilterSelector extends Component {

changeSelection(value) {
    if(value==="None") {
        this.props.changeHandler(null);
    } else {
        const filter = this.props.filters.find(filter => filter.name === value);
        this.props.changeHandler(filter);
    }
}
render() {
    const options = this.props.filters.map((filter, i) => <option value={filter.name} key={i}>{filter.name}</option>  
    );
    return (
        <select onChange={e => this.changeSelection(e.target.value)}>
            {options}
        </select>
    )

} 

}
export default FilterSelector;