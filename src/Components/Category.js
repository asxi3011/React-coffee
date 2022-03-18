
import { Link } from "react-router-dom";
import { React,useState, useLayoutEffect,memo } from "react"
import axios from 'axios'

function Category() {
    const [posts, setPost] = useState([])
    useLayoutEffect(() => {
        axios.get('https://sever-coffeehouse.herokuapp.com/getCategories')
            .then((response) => {
                console.log("Lấy dữ liệu cateogry");
                setPost(response.data.dataCategories);
            });
    }, [])
    if (!posts) return null;
    return (
        <>
            {posts.map(post => (
                <Link to={`/${post.slug}`} key={post._id} className="item-category a-none test12">
                    <div className="">
                        <div className="image-cateogry rounded-circle m-auto">
                            <img
                                className="h-100"
                                src={`https://sever-coffeehouse.herokuapp.com/uploads/${post.imageCategory}`}
                                alt="posts"
                            />
                        </div>
                        <div className="fs-6 text-center text-disable text-coffe my-2">
                            {post.nameCategory}
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default memo(Category)