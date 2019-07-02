import React from "react";

import "./list.css";                
export class List extends React.Component {

    state = {
        selectedIndex: -1
    };

    onItemClick = (e) => {
        let selectedIndex = Number(e.currentTarget.dataset.index);
        this.setState({
            selectedIndex
        });
        this.props.onSelect && this.props.onSelect(this.props.items[selectedIndex], selectedIndex);
        
    }
    renderItem = (item, i) => {
        let cn = "list-item";
        if(i === this.state.selectedIndex) {
            cn += " selected";
        }
        return <li key={i
        } className={cn} data-index={i} onClick={this.onItemClick}>{item}</li>
    }

    render() {
        let {items}=this.props;

        return <ul className="list">
            {items.map(this.renderItem)}
        </ul>
    }
}