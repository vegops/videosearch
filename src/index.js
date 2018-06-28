import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from '../components/video_list';
import SearchBar from '../components/search_bar';
import VideoDetail from '../components/video_detail';
import Footer from '../components/footer';

const API_KEY = 'AIzaSyBVvMgPNlPE3ju0MB24uNphnSfiWZUf4cM';

console.log('language => English');
// Create main app component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('vegan');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term,
            },
            videos => {
                this.setState({
                videos,
                selectedVideo: videos[0]
             });
            }
        );
    }

    render() {
        return (
        <div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)} videos= { this.state.videos } />  
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList
            onVideoSelect= { selectedVideo => this.setState({ selectedVideo }) }
            videos= { this.state.videos } /> 
            <Footer />
        </div>);
    }
}

// rendring the component
ReactDOM.render(<App />, document.querySelector('.container'));