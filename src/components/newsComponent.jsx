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
    this.props.setProgress(10);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIkey}&pageSize=${this.state.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIkey}&pageSize=${this.state.pageSize}`;
    this.props.setProgress(30);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json();
    this.props.setProgress(90);

    // console.log(parsedData);
    // let parsedData = Data;

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      remainingResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  nextButtonHandler = async () => {
    this.props.setProgress(10);
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=${this.props.APIkey}&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page + 1}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.APIkey}&pageSize=${
      this.state.pageSize
    }&page=${this.state.page + 1}`;
    this.props.setProgress(30);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      remainingResults: this.state.remainingResults - this.state.pageSize,
      loading: false,
    });
    this.props.setProgress(100);
  };
  prevButtonHandler = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=${this.props.APIkey}&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page - 1}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.APIkey}&pageSize=${
      this.state.pageSize
    }&page=${this.state.page - 1}`;
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
      <section className="py-20">
        <div className="max-[450px]:px-12 px-24 py-5 mx-auto">
          <div className="my-7 max-md:flex">
            <div className="lg:text-[40px] max-lg:text-[30px] max-[786px]:text-[27px] max-md:text-[25px] max-[690px]:text-[22px] max-sm:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[23px] font-bold font-serif tracking-normal sm:flex">
              <h1 className=" max-sm:w-full me-2">Headline Harbor - </h1>
              <h1 className=" max-sm:w-full">
                {this.capitalizeFirstLetter(this.props.category)} Headlines
              </h1>
            </div>
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
