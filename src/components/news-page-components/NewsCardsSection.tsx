import { useMemo, useState } from "react";
import { IAppleNews } from "../../hooks/useNews";
import NewsHeadLines from "./NewsHeadLines";
import moment from "moment";
import SmallMainNewsComponent from "./SmallMainNewsComponent";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";

const NewsCardsSection = ({
  category,
  searchedText,
}: {
  category: {
    title: string;
    data: IAppleNews[];
  };
  searchedText: string;
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const searchedData = useMemo(() => {
    return category.data.filter((news) => {
      return (
        news.author?.toLocaleLowerCase().includes(searchedText.toLowerCase()) ||
        news.content
          ?.toLocaleLowerCase()
          .includes(searchedText.toLowerCase()) ||
        news.description
          ?.toLocaleLowerCase()
          .includes(searchedText.toLowerCase()) ||
        moment(news.publishedAt)
          .fromNow()
          ?.toLocaleLowerCase()
          .includes(searchedText.toLowerCase()) ||
        news.source.id
          ?.toLocaleLowerCase()
          .includes(searchedText.toLowerCase()) ||
        news.source.name
          ?.toLocaleLowerCase()
          .includes(searchedText.toLowerCase()) ||
        news.title?.toLocaleLowerCase().includes(searchedText.toLowerCase())
      );
    });
  }, [searchedText, category.data, itemOffset]);
  const pageCount = useMemo(() => {
    return Math.ceil(searchedData.length / 5);
  }, [searchedData, searchedText]);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % searchedData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="news-section">
      <NewsHeadLines title={category.title} />
      <div className="cards-container">
        {searchedData.slice(itemOffset, itemOffset + 5).map((news, index) => {
          return (
            <SmallMainNewsComponent key={index} news={news} index={index} />
          );
        })}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="crypto-pagination"
          pageLinkClassName="crypto-pagination-links"
          activeLinkClassName="activeClassName"
          onPageActive={() => {
            window.scroll({ top: 3000 });
            toast.warn("you are already at this page");
          }}
          nextClassName="crypto-pagination-nav"
          previousClassName="crypto-pagination-nav"
          breakClassName="crypto-pagination-breaks"
        />
      </div>
    </div>
  );
};

export default NewsCardsSection;
