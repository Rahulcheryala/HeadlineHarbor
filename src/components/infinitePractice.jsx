import React from "react";
import InfiniteScroll from "react-infinite-scroller";
// import { Articles } from "../data/constants";
import { Data } from "../data/constants";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

class InfinitePractice extends React.Component {
  state = {
    data: [],
    hasMore: true,
  };

  componentDidMount() {
    this.setState({ data: Data.articles.slice(0, 5) });
    console.log(Data.articles.slice(0, 5));
  }

  fetchMoreData = () => {
    console.log("trying to fetch");
    setTimeout(() => {
      const startIndex = this.state.data.length;
      console.log("start" + startIndex);
      const endIndex = startIndex + 5;
      const newArticles = Data.articles.slice(startIndex, endIndex);
      console.log(newArticles);

      if (newArticles.length === 0) {
        this.setState({ hasMore: false });
        console.log("All data loaded");
      } else {
        this.setState({
          data: this.state.data.concat(newArticles),
        });
      }
    }, 2000);
  };

  render() {
    return (
      <div id="scroll" className="mb-10">
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          loadMore={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={400}
        >
          {this.state.data.map((data, index) => (
            <div style={style} key={index + 1}>
              <p>
                {index + 1} & Source: {data.source.name}
              </p>{" "}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfinitePractice;
