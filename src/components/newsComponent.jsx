import React, { Component } from "react";
import { Loader, NewsItem } from "./components";
import { Data } from "../data/constants";
import PropTypes from "prop-types";

export class newsComponent extends Component {
  articles = [];
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
    // This constructor function gets executed whenever there is a object that is being created from the parent class
    // We can use the constructor to set the state of the objects
    super(props);
    this.state = {
      articles: this.articles,
      remainingResults: 0,
      totalResults: 0,
      pageSize: 6,
      page: 1,
      loading: false,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - HeadlineHarbor`;
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e721c7ca7eec485090d6da9937628401&pageSize=${this.state.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f8e92875254409caf92bd62903e67c2&pageSize=${this.state.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // console.log(parsedData);

    let parsedData = Data;

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      remainingResults: parsedData.totalResults,
      loading: false,
    });
  }
  nextButtonHandler = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=e721c7ca7eec485090d6da9937628401&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page + 1}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=5f8e92875254409caf92bd62903e67c2&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      remainingResults: this.state.remainingResults - this.state.pageSize,
      loading: false,
    });
  };
  prevButtonHandler = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=e721c7ca7eec485090d6da9937628401&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page - 1}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=5f8e92875254409caf92bd62903e67c2&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      remainingResults: this.state.remainingResults + this.state.pageSize,
      loading: false,
    });
  };

  render() {
    return (
      <section className="">
        <div className="container px-5 py-5 mx-auto">
          <div className="my-7">
            <h1 className=" text-[40px] font-bold font-serif tracking-normal">
              Headline Harbor -{" "}
              {this.capitalizeFirstLetter(this.props.category)} Headlines
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {this.state.loading && <Loader />}
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <NewsItem
                    key={element.url}
                    title={element.title}
                    description={element.description}
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                );
              })}
          </div>
          {/* <div>
            {console.log(
              "condition " + (this.state.remainingResults < this.state.pageSize)
            )}
            {console.log("remaining " + this.state.remainingResults)}
            {console.log(Data.articles)}
          </div> */}
          <div className="flex w-full justify-between mt-10">
            <button
              type="button"
              className={`px-3 py-2 rounded-md border-2 border-gray-700 text-white mx-12 ${
                this.state.page <= 1 ? "invisible" : "bg-gray-700"
              } ${this.state.page > 1 && "hover:bg-gray-800"}`}
              disabled={this.state.page <= 1}
              onClick={this.prevButtonHandler}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className={`px-3 py-2 rounded-md border-2 border-gray-700 text-white mx-12 ${
                this.state.remainingResults - this.state.pageSize <= 0
                  ? "invisible"
                  : "bg-gray-700"
              } ${
                this.state.remainingResults - this.state.pageSize > 0 &&
                "hover:bg-gray-800"
              }`}
              disabled={this.state.remainingResults - this.state.pageSize <= 0}
              onClick={this.nextButtonHandler}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default newsComponent;
