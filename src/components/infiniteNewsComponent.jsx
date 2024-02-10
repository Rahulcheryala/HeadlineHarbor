import React, { Component } from "react";
import { InfiniteLoader, NewsItem } from "./components";
import { Data } from "../data/constants";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";

export class newsComponent extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      remainingResults: 0,
      totalResults: 0,
      pageSize: 6,
      page: 1,
      loading: false,
      hasMore: true,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - HeadlineHarbor`;
  }

  async componentDidMount() {
    let parsedData = Data;
    let articles = Data.articles;

    this.setState({
      articles: articles.slice(0, this.state.pageSize),
      totalResults: parsedData.totalResults,
      remainingResults: parsedData.totalResults - this.state.pageSize,
      loading: false,
    });
  }

  fetchMoreData = () => {
    setTimeout(() => {
      const startIndex = this.state.articles.length;
      const endIndex = startIndex + this.state.pageSize;
      const loadedArticles = Data.articles.slice(startIndex, endIndex);

      if (this.state.remainingResults <= 0) {
        this.setState({ hasMore: false });
        console.log("All data loaded");
      } else {
        this.setState({
          articles: this.state.articles.concat(loadedArticles),
          remainingResults: this.state.remainingResults - loadedArticles.length,
        });
      }
    }, 3000);
  };

  render() {
    return (
      <section className="">
        <div className="container px-5 py-5 mx-auto">
          <div className="my-7">
            <h1 className=" text-[40px] font-bold font-serif tracking-normal">
              Infinite Scroll
            </h1>
          </div>
          <InfiniteScroll
            loadMore={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<InfiniteLoader />}
          >
            <div>
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  {
                    return (
                      <p
                        style={{
                          height: 30,
                          border: "1px solid green",
                          margin: 6,
                          padding: 8,
                        }}
                      >
                        Author : {element.author}{" "}
                      </p>
                    );
                  }
                  {
                    /* return (
                      <NewsItem
                        key={element.url}
                        title={element.title}
                        description={element.description}
                        imageURL={element.urlToImage}
                        newsURL={element.url}
                        author={element.author}
                        date={element.publishedAt}
                      />
                    ); */
                  }
                })}
            </div>
          </InfiniteScroll>
        </div>
      </section>
    );
  }
}

export default newsComponent;
