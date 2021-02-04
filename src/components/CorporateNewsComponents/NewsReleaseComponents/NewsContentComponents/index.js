import React, { useState, useEffect, useContext } from "react";
import { NewsData, AnnouncementData } from "../../../Data/News";
import { Link } from "react-router-dom";
import {
  Aboutstyle,
  AboutMain,
} from "../../../AboutUsComponents/AboutUsElements";
import AboutSideBarComponents from "../../../AboutUsComponents/index";
import { newsService } from "../../../../service/News";
import {
  NewsContent,
  NewsBox,
  BoxContainer,
  NewsImage,
  Newsbtn,
  BoxWrapper,
  NewsContainerPart,
  AnnounContent,
  Pagination,
  NewsWrapped,
  AnnounWrapped,
  AnnounApart,
  ContentSearch,
  FlexDate,
  AnnounWrited,
  ChoisenDesc,
  FlexContent,
  Warned,
  Nulity,
  ChoisenNews,
  SearchBar,
  InputNews,
  SearchImage,
} from "./NewsContentElements";
import { langContext } from "../../../../langContext";
import {
  NewsLangContent,
  NewsLangContentSubstring,
  NewsLangTitle,
} from "./NewsContentLang";

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
  const { language } = useContext(langContext);
  const [selected, setSelected] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [searchDate, setSearchDate] = useState();

  function Clicked() {
    setSelected(!selected);
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await newsService.getListNews();
      const data = response.data;
      setNewsData(data);
      setFiltered(data);
    };
    Clicked();
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let newsShown = [];
    if (!searchTerm && !searchDate) {
      newsShown = newsData;
    }
    if (searchTerm && searchDate) {
      newsShown = newsData
        .filter((news) => {
          if (
            news.title_en.toLowerCase().startsWith(searchTerm.toLowerCase())
          ) {
            return news;
          }
        })
        .filter((news) => {
          if (news.news_date === searchDate) {
            return news;
          }
        });
    }
    if (searchTerm && !searchDate) {
      newsShown = newsData.filter((news) => {
        if (news.title_en.toLowerCase().startsWith(searchTerm.toLowerCase())) {
          return news;
        }
      });
    }
    if (!searchTerm && searchDate) {
      newsShown = newsData.filter((news) => {
        if (news.news_date === searchDate) {
          return news;
        }
      });
    }
    setFiltered(newsShown);
  };
  if (newsData.length === 0) return null;

  return (
    <Aboutstyle>
      <AboutSideBarComponents page8={true} />
      <AboutMain>
        <NewsWrapped>
          <h2>Announcement</h2>
          {AnnouncementData.map((data, idx) => {
            return (
              <>
                <AnnounWrapped key={idx}>
                  <AnnounContent>
                    <AnnounApart>
                      <AnnounWrited>{data.content}</AnnounWrited>
                    </AnnounApart>
                    {data.warning ? (
                      <AnnounApart warned>
                        <Warned alt="warned" />
                      </AnnounApart>
                    ) : (
                      <Nulity></Nulity>
                    )}
                  </AnnounContent>
                </AnnounWrapped>
              </>
            );
          })}
          {/*<ChoisenNews>
          <ChoisenDesc choose onClick={Clicked}>News</ChoisenDesc>
          <ChoisenDesc onClick={Clicked}>Ceria in Media</ChoisenDesc>
        </ChoisenNews>*/}
          <SearchBar>
            <ContentSearch>
              <FlexContent>
                <InputNews
                  type="search"
                  placeholder="Search..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </FlexContent>
              <FlexDate>
                <InputNews
                  date
                  type="date"
                  onChange={(e) => {
                    setSearchDate(e.target.value);
                  }}
                />
              </FlexDate>
              <FlexContent search>
                <SearchImage onClick={handleClick} />
              </FlexContent>
            </ContentSearch>
          </SearchBar>
          <div style={{ width: "100%" }}>
            {filtered.map((data, idx) => {
              return (
                <Link
                  to={`/News/${data._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <NewsBox key={idx}>
                    <BoxContainer>{data.news_date}</BoxContainer>
                    <BoxContainer titlee>
                      {NewsLangTitle(data, language)}
                    </BoxContainer>
                    <BoxContainer>
                      {NewsLangContentSubstring(data, language)}
                    </BoxContainer>
                  </NewsBox>
                </Link>
              );
            })}
          </div>
        </NewsWrapped>
      </AboutMain>
    </Aboutstyle>
  );
};

export default NewsContentComponents;
