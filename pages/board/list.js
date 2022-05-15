import { List } from "@/components/board/List";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ListPage = () =>{
    const columns = ['입력날짜', '제목', '내용', '작성자', '']
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/board/list')
        .then(res=>{setData(res.data.boards)})
        .catch(err=>{})
    })

    return(
        <div>
        <h1>게시글 목록</h1>
        {count != 0 && <h3>게시글 수 : { count }개</h3>}
        <List columns={columns} data={data}/>
        </div>
        )
}
export default ListPage