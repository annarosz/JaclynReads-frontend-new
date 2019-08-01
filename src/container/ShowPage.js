import React from "react";
import axios from "axios";
import IntroSectionShow from "../components/IntroSectionShow";
import SubheadSection from "../components/SubheadSection";
import CardDisplay from "../components/CardDisplay";
import Card from "../components/Card";
import Footer from "../components/Footer";

class ShowPage extends React.Component {
  bookReviews = [];

  state = {
    allReviews: [],
    searchTerm: "",
    displayHeader: "",
    contentPage: <h2>Loading.......</h2>
  };

  // Books Grid
  renderReviews = reviewList => {
    return reviewList.map((review, index) => {
      return (
        <div className="reviewList" key={index}>
          <Card
            title={review.title}
            author={review.author.name}
            review={review.review}
            publisher={review.publisher.name}
            yearPublished={review.yearPublished}
            isbn={review.isbn}
            linkToBuy={review.linkToBuy}
            genre={review.genre.name}
            topPick={review.topPick}
            url={review.url}
          />
        </div>
      );
    });
  };

  async componentDidMount() {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
      this.bookReviews = res.data.reviews;
      this.setState({ allReviews: this.renderReviews(this.bookReviews) });
      this.getRevDisplay();
      this.getReviews();
    } catch (err) {
      console.log(err);
    }
  }

  replaceSpecialCharsInURL(str) {
    str = str.replace("%20", " ");
    return str;
  }

  getRevDisplay = () => {
    this.setState({
      contentPage: (
        <>
          <div>
            <SubheadSection heading="You might also like..." />
          </div>
          <div>
            <CardDisplay result={this.state.allReviews} />
          </div>
        </>
      )
    });
  };

  getReviews = async () => {
    let found = [];
    let searchTerm = window.location.href.split("/").pop();
    searchTerm = this.replaceSpecialCharsInURL(searchTerm);
    searchTerm = searchTerm.toLowerCase();
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      found = this.bookReviews.filter(function(item) {
        return item.title.toLowerCase().match(searchTerm);
      });
    }

    if (found.length > 0) {
      this.setState({
        displayHeader: (
          <IntroSectionShow
            headingTitle={found[0].title}
            headingAuthor={found[0].author.name}
            headingReview={found[0].review}
            bookImage={found[0].url}
            headingPublisher={found[0].publisher.name}
            headingTopPick={found[0].topPick}
            headingLinkToBuy={found[0].linkToBuy}
            value={found[0]}
          />
        )
      });
    } else
      this.setState({
        displayHeader: <IntroSectionShow headingOne="No matching books found" />
      });
  };

  render() {
    return (
      <>
        {this.state.displayHeader}
        {this.state.contentPage}
        <Footer />
      </>
    );
  }
}

export default ShowPage;
