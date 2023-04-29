import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'
import {Row, Col, Table} from 'react-bootstrap'


const LocalPage = () => {
        const [locals, setLocals] = useState([]);
        const getLocal = async() =>{
                const url= "https://dapi.kakao.com/v2/local/search/keyword.json";
                const config={
                    headers: {"Authorization": "KakaoAK 3beb16dd3384f2b3c83b406fc0ddc084"},
                    params: {query: '인하대학교', page:1, size:5}
                }
            const result= await axios.get (url, config);
            console.log(result);
            setLocals(result.data.documents);
    
        }

    useEffect(()=>{ //페이지가 랜더링 될때 호출
        getLocal();
    }, [])
    return (
        <Row>
            <Col >
            <h1 className='text-center my-5'>지역검색</h1>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <td>장소명</td>
                        <td>주소</td>
                        <td>전화번호</td>
                    </tr>
                </thead>
                <tbody>
                    {locals.map(local=>
                    <tr key={local.id}>
                        <td>{local.place_name}</td>
                        <td>{local.address_name}</td>
                        <td>{local.phone}</td>
                     </tr>
                    )}
                   
                </tbody>
            </Table>
            </Col>
            
        </Row>
    )
}

export default LocalPage