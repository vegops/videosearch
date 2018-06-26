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
                    placeholder="Search here..." />
                    <input className="action-btn" type="submit" value="Go" />
                </form>
                <div className="result-details col-xs-12">
                    <div>{this.getSearchTerm(this.state.term)}</div>
                    <div className="col-xs-12 col-sm-6"> ( {this.props.videos.length } results. )</div>
                </div>
            </div>
        )
    }

    formSubmit(term) {
        this.setState({term});
        term = term.startsWith('vegan') ? term : `vegan ${term}`;
        this.props.onSearchTermChange(term);
    }
    
    getSearchTerm(term) {
        console.log("term is: "+term+ "and it's length is => " + term.length);
        if ( term.length !== 0 ) {
            return (
            <div className="col-xs-12 col-sm-6">You are searching for <b>{this.state.term }</b>.</div>)
        } else {
            return (
            <div className="col-xs-12 col-sm-6">No search made.</div>)
        }
    }

}

export default SearchBar;