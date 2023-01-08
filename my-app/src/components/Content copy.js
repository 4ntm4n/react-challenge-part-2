/* import React, { Component } from 'react'
import { savedPosts } from '../posts.json'
import css from './css/Content.module.css'
import Loader from './Loader'
import PostItem from './PostItem'

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange = (event) => {
        let inputText = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter( posts => posts.name.toLowerCase().includes(inputText));
        this.setState({
            posts: filteredPosts,
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label for="id-search">Search: </label>
                        <input
                            id="id-search"
                            placeholder="By Author"
                            onChange={this.handleChange}
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResult}>
                    {
                        this.state.isLoaded ? (
                            this.state.posts.map((post) => <PostItem key={post.title} post={post} />)
                        ) : (<Loader />)
                    }
                </div>
            </div>
        )
    }
}

export default Content */