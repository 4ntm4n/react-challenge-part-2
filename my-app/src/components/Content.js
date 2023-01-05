import React, { Component } from 'react'
import { savedPosts } from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'

class Content extends Component {
    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResult}>
                {
                    savedPosts.map((post) => <PostItem key={post.title} post={post} />)
                }
                </div>
            </div>
        )
    }
}

export default Content