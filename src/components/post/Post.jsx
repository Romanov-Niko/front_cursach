import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://www.treehugger.com/thmb/jGuyduPEEg2tCftwu_KH0Z0fFek=/3307x2480/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__02__red-panda-rests-branch-cfad0171b52b43908a2b0f6c56078862.jpg" alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa odit veritatis laboriosam corrupti. Nulla, aliquam in 
                itaque sapiente corporis libero aliquid explicabo, quam nisi 
                corrupti placeat dolore eum quos praesentium?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa odit veritatis laboriosam corrupti. Nulla, aliquam in 
                itaque sapiente corporis libero aliquid explicabo, quam nisi 
                corrupti placeat dolore eum quos praesentium?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa odit veritatis laboriosam corrupti. Nulla, aliquam in 
                itaque sapiente corporis libero aliquid explicabo, quam nisi 
                corrupti placeat dolore eum quos praesentium?
            </p>
        </div>
    )
}