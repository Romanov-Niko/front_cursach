import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://www.treehugger.com/thmb/jGuyduPEEg2tCftwu_KH0Z0fFek=/3307x2480/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__02__red-panda-rests-branch-cfad0171b52b43908a2b0f6c56078862.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Write description..." type="text"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}