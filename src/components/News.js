import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFristLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }; 
    document.title = `${this.capitalizeFristLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3dc2ad0b720f4c1bb17d118f8da100c3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.UpdateNews();
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.UpdateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdateNews();
  };

  render() {
    return (
      <div className="">
        <h1 className="font-semibold mx-[54px] flex justify-center -mb-16 text-[180%]  max-[950px]:text-[155%] max-[650px]:text-[140%] max-[550px]:text-[105%] max-[450px]:text-[90%] max-[375px]:text-[65%]">
          NewsMonkey - Top headlines on{" "}
          {this.capitalizeFristLetter(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}
        <div className=" grid grid-cols-4 max-[1550px]:grid-cols-3 max-[950px]:grid-cols-2 max-[650px]:grid-cols-1  mx-8  ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <NewsItem
                    author={element.author ? element.author.slice(0, 40) : ""}
                    title={element.title ? element.title.slice(0, 60) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    Source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="flex justify-between mx-12 -my-16 mt-20">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded-md"
          >
            &#x21e0; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md"
          >
            Next &#x21e2;
          </button>
        </div>
      </div>
    );
  }
}

export default News;