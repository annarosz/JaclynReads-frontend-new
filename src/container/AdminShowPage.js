import React from "react";
import axios from "axios";
import IntroSectionFlexi from "../components/IntroSectionFlexi";
import CardAdmin from "../components/CardAdmin";
import FormAdd from "../container/FormAdd";

class AdminShowPage extends React.Component {
  state = {
    data: "",
    adding: false,
    selectedReview: null,
    id: ""
  };

  async componentDidMount() {
    try {
      const token = localStorage.getItem("token");
      const headers = { token: token };
      const response1 = await axios.get(
        `${process.env.REACT_APP_API_URL}/protected/reviews`,
        { headers }
      );
      const data1 = response1.data;

      this.setState({
        data: data1
      });
    } catch (err) {}
  }

  renderReviews = reviewList => {
    return reviewList.map((review, index) => {
      return (
        <div className="reviewList" key={index}>
          <CardAdmin
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
            handleDeleteClick={this.handleDeleteClick}
            handleEditClick={this.handleEditClick}
            reviewObject={review}
          />
        </div>
      );
    });
  };

  handleEditClick = review => {
    const id = review._id;
    this.setState({ adding: true, selectedReview: review, id: id });
  };

  refresh = reviewsData => {
    const reviews = reviewsData.data;
    this.setState({
      data: reviews,
      adding: false
    });
  };

  handleDeleteClick = async title => {
    const data = { data: { title } };
    const token = localStorage.getItem("token");
    const headers = { token: token };

    await axios
      .delete(`${process.env.REACT_APP_API_URL}/protected/deleteReview`, {
        data,
        headers
      })
      .then(res => {
        alert("Review Deleted");
        window.location.reload();
      })
      .catch(err => {});
  };

  render() {
    const { reviews } = this.state.data;
    if (!reviews) {
      return <h2>Loading.......</h2>;
    }
    const result = this.renderReviews(reviews);

    return (
      <>
        <div
          className="containerSecondary"
          style={{ backgroundColor: "#BFE9E1" }}
        >
          <IntroSectionFlexi
            headingOne="Hi Jaclyn!"
            headingTwo="Welcome to your dashboard, here are all of your reviews..."
          />

          <div className="showreviews">
            {this.state.adding ? (
              <FormAdd
                title={this.state.selectedReview.title}
                author={this.state.selectedReview.author.name}
                review={this.state.selectedReview.review}
                publisher={this.state.selectedReview.publisher.name}
                yearPublished={this.state.selectedReview.yearPublished}
                isbn={this.state.selectedReview.isbn}
                linkToBuy={this.state.selectedReview.linkToBuy}
                genre={this.state.selectedReview.genre.name}
                topPick={this.state.selectedReview.topPick}
                seoKeyword={this.state.selectedReview.seoKeyword}
                url={this.state.selectedReview.url}
                id={this.state.id}
                refresh={this.refresh}
                adding={this.state.adding}
                history={this.props.history}
              />
            ) : (
              <div>{result}</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default AdminShowPage;
