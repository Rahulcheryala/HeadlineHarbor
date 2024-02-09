import React, { Component } from "react";
import { NewsItem } from "./components";
import { defaultNewsImage } from "../assets/assets";

export class newsComponent extends Component {
  articles = [];

  constructor() {
    // This constructor function gets executed whenever there is a object that is being created from the parent class
    // We can use the constructor to set the state of the objects
    super();
    this.state = {
      articles: this.articles,
      remainingResults: 0,
      totalResults: 0,
      pageSize: 6,
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e721c7ca7eec485090d6da9937628401&pageSize=${this.state.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f8e92875254409caf92bd62903e67c2&pageSize=${this.state.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      remainingResults: parsedData.totalResults,
    });
  }
  prevButtonHandler = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e721c7ca7eec485090d6da9937628401&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page - 1}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f8e92875254409caf92bd62903e67c2&pageSize=${
      this.state.pageSize
    }&page=${this.state.page - 1}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      remainingResults: this.state.remainingResults + this.state.pageSize,
    });
    if (this.state.page <= 1) {
    }
  };

  nextButtonHandler = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e721c7ca7eec485090d6da9937628401&pageSize=${
    //   this.state.pageSize
    // }&page=${this.state.page + 1}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f8e92875254409caf92bd62903e67c2&pageSize=${
      this.state.pageSize
    }&page=${this.state.page + 1}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      remainingResults: this.state.remainingResults - this.state.pageSize,
    });
    if (this.state.remainingResults - this.state.pageSize <= 0) {
    }
  };

  render() {
    return (
      <section className="">
        <div className="container px-5 py-5 mx-auto">
          <div className="my-7">
            <h1 className=" text-[40px] font-bold font-serif tracking-normal">
              Headline Harbor - Top Headlines
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={
                    element.title === null
                      ? "Latest Updates"
                      : element.title.slice(0, 50) + " ..."
                  }
                  description={
                    element.description === null
                      ? "Explore in-depth coverage of local and global news, with analysis and insights to keep you up-to-date."
                      : element.description.slice(0, 100) + " ..."
                  }
                  imageURL={
                    element.urlToImage === null
                      ? defaultNewsImage
                      : element.urlToImage
                  }
                  newsURL={element.url}
                />
              );
            })}
          </div>
          {/* <div>
            {console.log(
              "condition " + (this.state.remainingResults < this.state.pageSize)
            )}
            {console.log("remaining " + this.state.remainingResults)}
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
