import React, { useState, useEffect } from "react";
import { NewsData } from "../../../Data/News";
import { newsService } from "../../../../service/News";
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
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await newsService.getListNews();
      const data = response.data;
      setNewsData(data);
    };
    fetchData();
  });

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
  if (newsData.length === 0) return null;
  console.log(newsData);
  return (
    <>
      <NewsContent>
        {newsData.map((data) => {
          return (
            <NewsBox>
              <BoxWrapper>
                <NewsContainerPart>
                  <NewsImage src={data.news_img.url} />
                </NewsContainerPart>
                <NewsContainerPart wrt>
                  <BoxContainer titlee>{data.title_en}</BoxContainer>
                  <BoxContainer>{data.news_en}</BoxContainer>
                </NewsContainerPart>
                <NewsContainerPart btn>
                  <Newsbtn to={`/News/${data._id}`}>Continue Reading</Newsbtn>
                </NewsContainerPart>
              </BoxWrapper>
            </NewsBox>
          );
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
