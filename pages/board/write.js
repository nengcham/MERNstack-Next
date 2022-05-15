import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Write } from "@/components/board/Write";
import { writeRequest } from "@/modules/board/write" 

const WritePage = ()=>{
    const [article, setArticle] = useState({
        date:'', name:'', title:'', subject:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const {name, value} = e.target
        setArticle({...article, [name]: value})
    }
    const onSubmit = e =>{
        e.preventDefault()
        alert('입력 정보: '+JSON.stringify(article))
        dispatch(writeRequest(article))
    }
    return(
        <Write onChange={onChange} onSubmit={onSubmit}/>
        )

}
const mapStateToProps = state => ({isWritten: state.write.isWritten})
const writeActions = {writeRequest}
export default connect(mapStateToProps, writeActions)(WritePage)