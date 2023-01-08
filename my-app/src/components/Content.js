import React, { useState, useEffect } from 'react'
import { savedPosts } from '../posts.json'
import css from './css/Content.module.css'
import Loader from './Loader'
import PostItem from './PostItem'


function Content() {
    const [loaded, setLoaded] = useState(false)
    const [fetchedPosts, setFetchedPosts] = useState([])
    
    const handleChange = (event) => {
        let inputText = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter( posts => posts.name.toLowerCase().includes(inputText));
        setFetchedPosts(filteredPosts)
    }

    useEffect( () => {
        setTimeout(() => {
            setLoaded(true)
            setFetchedPosts(savedPosts)
        }, 2000)

    }, [])

    return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="id-search">Search: </label>
                    <input
                        id="id-search"
                        placeholder="By Author"
                        onChange={handleChange}
                    />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResult}>
                {
                    loaded ? (
                        fetchedPosts.map((post) => <PostItem key={post.title} post={post} />)
                    ) : (<Loader />)
                }
            </div>
        </div>
    )
}

 export default Content
