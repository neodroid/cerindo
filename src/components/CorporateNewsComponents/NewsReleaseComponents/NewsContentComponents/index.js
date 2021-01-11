import React from "react";
import {NewsData} from "../../../Data/News";
import {
    NewsContent,
    NewsBox,
    BoxContainer,
    NewsImage,
    Newsbtn,
    BoxWrapper,
    NewsContainerPart,
    Pagination,
} from "./NewsContentElements";

/* const Pagination = ({ postPerPage, totalPost }) =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    <li key={number}>
                        <a href="!#">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
} */

const NewsContentComponents = () => {
    /* const [post, setPost] = useState([]);
    const [currentPage,setCurrentPage] = useState();
    const [postPerPage, setPostPerPage] = useState();
    setCurrentPage(1);
    setPostPerPage(10)
    setPost(NewsData);
            <NewsMap page to="/News-Release">News Release</NewsMap>
            <NewsMap to="/Internal-News">Internal News</NewsMap>
            <NewsMap to="/Ceria in Media">Ceria In Media</NewsMap>
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = post.slice(indexOfFirstPost) */
    return(
        <>
        <NewsContent>
            {NewsData.map((data)=>{
                return(
                <NewsBox>
                    <BoxWrapper>
                        <NewsContainerPart><NewsImage src={data.image} /></NewsContainerPart>
                        <NewsContainerPart wrt>
                            <BoxContainer titlee >{data.title}</BoxContainer>
                            <BoxContainer>{data.description}</BoxContainer>
                        </NewsContainerPart>
                        <NewsContainerPart btn><Newsbtn to = {`/News/${data.title}`}>Continue Reading</Newsbtn></NewsContainerPart>
                    </BoxWrapper>
                </NewsBox>
            )
            })}
        </NewsContent>
        <Pagination>
            <a>&laquo;</a>
            <a>1</a>
            <a>2</a>
            <a>3</a>
            <a>&raquo;</a>
        </Pagination>
        </>
    );
};

export default NewsContentComponents;