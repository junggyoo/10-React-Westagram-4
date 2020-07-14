import React from "react";
import CommentBox from "./CommentBox";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "hyeonji_",
      comments: [],
      inputCommentValue: "",
      num: 1,
      hideCommentState: false,
    };
  }

  handleCommentInput = (e) => {
    this.setState({ inputCommentValue: e.target.value });
    e.target.value = "";
  };

  //comments배열의 길이가 2 이상이면 댓글 숨기기 & 모두 보기 생성을 제어하는 hideCommentState를 true로 변경
  handleHideComment = () => {
    if (this.state.comments.length > 2) {
      this.setState({ hideCommentState: true });
    }
  };

  deleteComment = (num) => {
    const commentFilter = this.state.comments.filter((eachComment) => {
      return eachComment.num !== num;
    });
    this.setState({ comments: commentFilter });
  };

  // 1) concat 메소드로 input창에 입력된 새 댓글을 기존의 comments에 더한 새로운 comments를 만듬
  // 2) comments 배열의 구성은 num, comment 객체로 구성되어 있음 - num은 filter 메소드를 이용해 댓글 삭제 기능을 구현할 때 이용됨
  handleCreateNewArr = (e) => {
    e.preventDefault();
    const { comments, inputCommentValue, num } = this.state;
    const newComments = comments.concat({
      num: num,
      comment: inputCommentValue,
    });
    this.setState(
      {
        comments: newComments,
        inputCommentValue: "",
        num: num + 1,
      },
      () => this.handleHideComment()
    );
  };

  ShowAll = () => {
    this.setState({ hideCommentState: false });
  };

  render() {
    return (
      <div className="comment-box">
        <div className="comments">
          {this.state.comments.map((comment, i) => {
            return (
              <CommentBox
                key={i}
                id={this.state.id}
                comment={comment.comment}
                num={comment.num}
                index={i}
                hideComment={this.state.hideCommentState}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </div>
        <div className="show-all-comment">
          <div
            className={
              this.state.hideCommentState
                ? "show-comment-all"
                : "show-comment-all-none"
            }
          >
            <span>댓글{this.state.comments.length}개</span>{" "}
            <span onClick={this.ShowAll}>모두 보기</span>
          </div>
        </div>
        <div className="time-stamp">
          <span>11시간 전</span>
        </div>
        <div className="comment-input">
          <form id="submit-comment-container">
            <input
              id="submit"
              type="text"
              placeholder="댓글 달기..."
              value={this.state.inputCommentValue}
              onChange={this.handleCommentInput}
            />
            <input
              type="submit"
              value="게시"
              onClick={this.handleCreateNewArr}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentContainer;
