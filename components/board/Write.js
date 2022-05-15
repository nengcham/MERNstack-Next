import style from "@/styles/Board.module.css"

export function Write({onSubmit, onChange}){

    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <form onSubmit={onSubmit}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="date">날짜</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="date" name="date" onChange={onChange} placeholder="YYYY-MM-DD"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">작성자</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={onChange} placeholder="작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="title">제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="title" name="title" onChange={onChange} placeholder="제목 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" style={{height:200 + "px"}} onChange={onChange}></input>
                </div>
            </div>
            <br/>
            
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"/>
            </div>
            </form>
        </div>
    </>)
}