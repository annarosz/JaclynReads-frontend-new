import React from "react";
import IntroSection from "../components/IntroSection";
import SubheadSection from "../components/SubheadSection";
import CardDisplay from "../components/CardDisplay";
import Card from "../components/Card";
import Footer from "../components/Footer";

class HomePage extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null
  };

  async componentDidMount() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/reviews`);
      const data = await response.json();
      this.setState({
        data: data
      });
    } catch (err) {
      console.log(err);
    }
  }

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

  render() {
    const { reviews } = this.state.data;
    if (!reviews) {
      return <h2>Loading.......</h2>;
    }
    const result = this.renderReviews(reviews);

    return (
      <div>
        <IntroSection
          headingOne="Hi, I’m Jaclyn and I love to read... a lot."
          headingTwo="My friends joke that I can read two books at the same time, one with each eye!  I promise I can’t. Join me here to something something, call to action."
        />
        <SubheadSection heading="My most recent reviews..." />
        <CardDisplay result={result} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
