import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <form className="search-form" onSubmit = { event => {
                    event.preventDefault();
                    this.formSubmit( this.state.term ) }}>
                    <input 
                    className="search-input"
                    value = { this.state.term }
                    onClick = { event => event.target.value = "" }
                    onChange = { event => this.setState({term: event.target.value }) }
                    placeholder="חפשו כאן..." />
                    <input className="action-btn" type="submit" value="חפשו!" />
                </form>
                <div className="result-details col-xs-12">
                    <div>{this.getSearchTerm(this.state.term)}</div>
                    <div className="col-xs-12 col-sm-6"> ( {this.props.videos.length } תוצאות. )</div>
                </div>
            </div>
        )
    }

    formSubmit(term) {
        this.setState({term});
        if ( !term.endsWith('טבעוני') || !term.endsWith('טבעונית') ) {
            term = `${term} טבעוני`;
        }
        this.props.onSearchTermChange(term);
    }
    
    getSearchTerm(term) {
        if ( term.length !== 0 ) {
            return (
            <div className="col-xs-12 col-sm-6">אנחנו מחפשים <b>{this.state.term }</b>.</div>)
        } else {
            return (
            <div className="col-xs-12 col-sm-6">לא בוצע חיפוש.</div>)
        }
    }

}

export default SearchBar;