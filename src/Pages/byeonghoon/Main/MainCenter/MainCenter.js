import React from "react";
import Comment from "../Comment/Comment";
import "./MainCenter.scss";

class MainCenter extends React.Component {
  constructor() {
    super();

    this.state = {
      reply: "",
      replyArr: [],
    };
  }
  inputReply = (e) => {
    this.setState({
      reply: e.target.value,
    });
  };

  posting = (e) => {
    e.preventDefault();
    this.setState({
      replyArr: [...this.state.replyArr, this.state.reply],
    });
  };

  //     // reply: "",
  //     // key: this.state.key + 1,
  //   });

  //   // const test = { id: this.state.key, comment: this.state.reply };
  //   // this.state.replyArr.push(test);
  // };

  render() {
    console.log(this.state.reply);
    return (
      <section className="MainCenter">
        <div className="wrap_story_feeds">
          <div className="wrap_story_border">
            <div className="wrap_story_images_box">
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
              <div className="story_icons">
                <ul>
                  <li>
                    <img
                      alt="bhoon_roy님의 프로필 사진"
                      className="_6q-tv"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/79602224_578058532952829_2364061333860646912_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=CY3wSBLgKFsAX_eiZJH&amp;oh=18f7eb1e43e4d8c6d0c61c547d56ba4c&amp;oe=5F28DE26"
                    />
                    <span>bhoon_Roy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <article>
            <header>
              <div className="header_img">
                <img
                  alt="bhoon_roy님의 프로필 사진"
                  viewBox="0 0 48 48"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/91595049_661532651341166_2714152918545596416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=szwoIUTsfU0AX_-_nLu&amp;oh=58b71ab27b93b792dff3f4d3184bef67&amp;oe=5F263088"
                />
              </div>
              <div className="id_place_button">
                <div className="id_place">
                  <a href="bhoon">bhoon_Roy</a>
                  <a href="where">집</a>
                </div>
                <svg aria-label="옵션 더 보기" viewBox="0 0 48 48" width="16">
                  <circle
                    clip-rule="evenodd"
                    cx="8"
                    cy="24"
                    fill-rule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clip-rule="evenodd"
                    cx="24"
                    cy="24"
                    fill-rule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clip-rule="evenodd"
                    cx="40"
                    cy="24"
                    fill-rule="evenodd"
                    r="4.5"
                  ></circle>
                </svg>
              </div>
            </header>
            <div className="feed_img">
              <img alt="Dagam" src="/images/byeonghoon/IMG_7916.jpeg" />
            </div>
            <div className="bottom_box">
              <section className="wrap_like_msg_icons">
                <span>
                  <button className="button_like">
                    <svg aria-label="좋아요" viewBox="0 0 48 48">
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </button>
                </span>
                <span>
                  <button className="button_msg">
                    <svg aria-label="댓글 달기" viewBox="0 0 48 48">
                      <path
                        clip-rule="evenodd"
                        d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                <span>
                  <button className="button_share">
                    <svg aria-label="게시물 공유" viewBox="0 0 48 48">
                      <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                    </svg>
                  </button>
                </span>
                <span className="span_flag">
                  <button className="button_flag">
                    <svg aria-label="저장" viewBox="0 0 48 48">
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                    </svg>
                  </button>
                </span>
              </section>
              <section className="section_like_count">
                <div className="div_like_count">
                  <span className="like_id">
                    <a href="bhoon">bhoon_Roy</a>
                  </span>
                  님<button className="like_others">여러 명</button>이
                  좋아합니다
                </div>
              </section>
              <div className="div_wrap_screen_comment">
                <div className="div_screen_comment">
                  <span className="span_comment_id">
                    <a href="others">wecode</a>
                  </span>
                  <span className="screen_comment">귀엽다..</span>
                  <span className="more_comment">...더 보기</span>
                </div>
              </div>

              {this.state.replyArr.map((text) => {
                return <Comment comment={text} />;
              })}
              <div className="div_time_ago">
                <time>7시간 전</time>
              </div>
            </div>
            <section className="section_comment">
              <div className="div_comment">
                <form className="form_comment">
                  <input
                    className="input_comment"
                    type="text"
                    onChange={this.inputReply}
                    placeholder="댓글 달기..."
                  ></input>
                  <button
                    className="button_upload_comment"
                    onClick={this.posting}
                  >
                    게시
                  </button>
                </form>
              </div>
            </section>
          </article>
        </div>
      </section>
    );
  }
}

export default MainCenter;
