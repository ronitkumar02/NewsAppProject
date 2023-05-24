import React, { Component } from "react";
import Sippner from "./Sippner";
import TopNews from "./topNews.js";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  /* The above code is defining default props and prop types for a React component. The component has
  props for country, pageSize, category, isDark, bcolor, and searchText. The defaultProps object
  sets default values for these props, while the propTypes object defines the expected data types
  for each prop. This helps ensure that the component receives the correct props and that they are
  of the expected data type. */
  
  static defaultProps = {
    country: "in",
    pageSize: 21,
    category: "general",
    isDark: false,
    searchText : ''
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    isDark: PropTypes.bool,
    bcolor: PropTypes.string,
    searchText : PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResults: 0,
      windowWidth: window.innerWidth
    };
  }
 /* The above code is defining a function called `capitalizeText` that takes in a parameter called
 `word`. The function capitalizes the first letter of the `word` parameter and returns the
 capitalized word. */
  capitlizeText = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  /**
   * This function updates the state of the component with news articles based on the search criteria
   * provided by the user.
   */
  async update() {
    let Url=''
    if(!this.props.searchText){
      Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=API_KEY&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    else{
      Url = `https://newsapi.org/v2/everything?q=${this.props.searchText}&apiKey=API_KEY&page=${this.state.page}&${this.props.pageSize}`;
    }
    this.setState({ loading: true });
    let data = await fetch(Url);
    let passData = await data.json();
    this.setState({
      article: passData.articles,
      totalResults: passData.totalResults,
      loading: false,
    });
    document.title = `Daily News${(this.props.category !== "general")? `-${this.capitlizeText(this.props.category)}`:(this.props.searchText?`${this.props.searchText}`:"")}`;
  }
  async componentDidMount() {
    this.update();
  }
  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.update();
  };
  previousPage = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.update();
  };
  
  /* The below code is a JavaScript function that fetches more news articles from the News API based on
  the current state of the component. It updates the page number in the state, constructs a URL
  based on the search text, country, category, and page size, fetches the data from the API using
  the constructed URL, and updates the state with the new articles, total results, and loading
  status. It also updates the document title based on the current category. */
  
  fetchMoreData = async () => {
    await this.setState({ page: this.state.page + 1 });
    let Url=''
    if(!this.props.searchText){
      Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=API_KEY&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    else{
      Url = `https://newsapi.org/v2/everything?q=${this.props.searchText}&apiKey=API_KEY&page=${this.state.page}&${this.props.pageSize}`;
    }
    let data = await fetch(Url);
    let passData = await data.json();
    this.setState({
        article: this.state.article.concat(passData.articles),
      totalResults: passData.totalResults,
      loading: false
    });
    document.title = `Daily News${this.props.category !== "general"? `-${this.capitlizeText(this.props.category)}`: ""}`;
  }

  render() {
    return (
      <>
      <div className={`bg-${this.props.isDark?"dark":"light"} `}>
      
      {/* The above code is a JSX code snippet written in React. It creates a container with a dynamic
      background color based on the value of the `isDark` prop passed to the component. It also
      creates a headline with a dynamic text color and background color based on the value of the
      `isDark` prop. The headline displays the text "Today's Top Headlines" and if the `category`
      prop passed to the component is not "general", it also displays the capitalized value of the
      `category` prop followed by a space. */}

      <div className={`container1 bg-${this.props.isDark?"dark":"light"} `}>

        <h1 className={`headlines text-${this.props.isDark?'light':'black'} bg-${this.props.isDark?"dark":"light"}`}>
          Today's Top {" "}
          {this.props.category !== "general"
            ? `${this.capitlizeText(this.props.category)} `
            : ""}
          HeadLines
        </h1>
      </div>
       
      {/* The above code is rendering a slideshow carousel with five slides, each containing a TopNews
      component with a title, description, image, and URL. The carousel has previous and next
      buttons for navigation. The code is written in JavaScript and uses Bootstrap classes for
      styling. */}

      <div className="row container1">
      <div id="carouselExampleCaptions" className="carousel slide col-lg-8 cols-md-12 cols-sm-12 sildeshow" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
      {this.state.article.slice(0,5).map((element,index) => {
        return (
          <TopNews
          index={index}
          key={element.url}
          title={element.title}
          description={element.description}
          urlToImage={element.urlToImage}
                      url={element.url}
                      />);
                    })}
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      
      {/* The above code is rendering a single NewsItem component with specific props based on the data
      in the `this.state.article` array. It is using the `slice()` method to select a specific
      element from the array, and then mapping over that element to render the NewsItem component
      with the appropriate props. The `isDark` prop is being passed down from a parent component. */}
      
      <div className="col-lg-4 my-1 mobile-hide">
      { this.state.article.slice(5,6).map((element) => {
        return (
          <div className="col fancy_card">
                    <NewsItem
                      key={element.url}
                      title={element.title.length>100?element.title.slice(1,100)+"...":element.title}
                      description={element.description}
                      urlToImage={element.urlToImage}
                      publishedAt={element.publishedAt}
                      url={element.url}
                      isDark={this.props.isDark}
                      />
                   </div> 
                );
              })}
            </div>
        </div>
        {/* The above code is checking if the `loading` property in the `state` object is true. If it is
        true, it will render a `Spinner` component. */}
        
        {this.state.loading && <Sippner/>}
        
        {/* The above code is implementing an infinite scroll feature for displaying news articles. It
        uses the InfiniteScroll component to load more articles as the user scrolls down the page.
        The dataLength prop is used to keep track of the number of articles currently displayed, and
        the next prop specifies the function to be called when more data needs to be loaded. The
        hasMore prop is used to determine whether there are more articles to be loaded. The loader
        prop specifies the component to be displayed while the new data is being fetched. The code
        also uses the slice method to display a subset of the articles based on the window width */}
        
        <InfiniteScroll style={{overflow:'hidden'}}
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length < this.state.totalResults}
          loader={<Sippner/>}
        >
          <div className="container1">
          <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 my-1">
            { this.state.article.slice(this.state.windowWidth<=991?5:6,this.state.article.length).map((element) => {
              return (
                <div className="col fancy_card">
                    <NewsItem
                      key={element.url}
                      title={element.title}
                      description={element.description}
                      urlToImage={element.urlToImage}
                      publishedAt={element.publishedAt}
                      url={element.url}
                      isDark={this.props.isDark}
                      />
                  </div> 
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
      </>
    );
  }
}