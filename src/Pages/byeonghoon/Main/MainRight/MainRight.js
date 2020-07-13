import React, { Component } from "react";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div className="wrap_main_right">
        <div className="main_right">
          <div className="right_profile">
            <div className="wrap_id_text">
              <a href="bhoon_roy">bhoon_roy</a>
              <p>이병훈</p>
            </div>
            <div className="wrap_img">
              <img
                alt="bhoon_roy님의 프로필 사진"
                className="_6q-tv"
                data-testid="user-avatar"
                draggable="false"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/91595049_661532651341166_2714152918545596416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=49D4GYdTRh8AX__2LrB&amp;oh=ec4ecdc54e04a62c88643779dc4826a8&amp;oe=5F320E08"
              />
            </div>
          </div>
          <div className="wrap_right_profile">
            <div className="wrap_follow_recommend">
              <div className="wrap_recommend">
                <div className="recommend">회원님을 위한 추천</div>
                <a href="모두 보기"> 모두 보기 </a>
              </div>
              <div className="wrap_follow">
                <div className="div_follow">
                  <div className="div_img">
                    <img
                      alt="dajunging님의 프로필 사진"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/90044554_233062154516257_8955379903084101632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UmvWrM5AycoAX-C3jUo&amp;oh=bf213faa9c23b89a6b7cf77ad8f7ab88&amp;oe=5F3248B5"
                    />
                  </div>

                  <div className="div_follow_text">
                    <a href="jjung">junge</a>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="div_follow">
                  <div className="div_img">
                    <img
                      alt="dajunging님의 프로필 사진"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/90044554_233062154516257_8955379903084101632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UmvWrM5AycoAX-C3jUo&amp;oh=bf213faa9c23b89a6b7cf77ad8f7ab88&amp;oe=5F3248B5"
                    />
                  </div>
                  <div className="div_follow_text">
                    <a href="jjung">junge</a>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="div_follow">
                  <div className="div_img">
                    <img
                      alt="dajunging님의 프로필 사진"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/90044554_233062154516257_8955379903084101632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UmvWrM5AycoAX-C3jUo&amp;oh=bf213faa9c23b89a6b7cf77ad8f7ab88&amp;oe=5F3248B5"
                    />
                  </div>

                  <div className="div_follow_text">
                    <a href="jjung">junge</a>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="div_follow">
                  <div className="div_img">
                    <img
                      alt="dajunging님의 프로필 사진"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/90044554_233062154516257_8955379903084101632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UmvWrM5AycoAX-C3jUo&amp;oh=bf213faa9c23b89a6b7cf77ad8f7ab88&amp;oe=5F3248B5"
                    />
                  </div>

                  <div className="div_follow_text">
                    <a href="jjung">junge</a>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <button>팔로우</button>
                </div>
                <div className="div_follow">
                  <div className="div_img">
                    <img
                      alt="dajunging님의 프로필 사진"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/90044554_233062154516257_8955379903084101632_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UmvWrM5AycoAX-C3jUo&amp;oh=bf213faa9c23b89a6b7cf77ad8f7ab88&amp;oe=5F3248B5"
                    />
                  </div>

                  <div className="div_follow_text">
                    <a href="jjung">junge</a>
                    <p>회원님을 팔로우합니다</p>
                  </div>
                  <button>팔로우</button>
                </div>
              </div>
              <div className="wrap_etc">
                <div className="div_etc">
                  <ul>
                    <li>
                      <a href="introduce">소개•</a>
                    </li>

                    <li>
                      <a href="help">도움말</a>
                    </li>
                    <li>
                      <a href="marketing">•홍보 센터</a>
                    </li>
                    <li>
                      <a href="API">•API</a>
                    </li>
                    <li>
                      <a href="hiring">•채용 정보</a>
                    </li>
                  </ul>
                </div>
                <span>© 2020 BYEONGSTAGRAM FROM BH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRight;
