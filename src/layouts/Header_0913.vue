<template>
  <header class="wideArea el">
    <div class="headerWrapper">
      <div class="util innerContent">
        <div class="accountArea">
          <ul>
            <li><a>로그인</a></li>
            <li><a>회원가입</a></li>
            <li><a>주문배송</a></li>
            <li><a>고객센터</a></li>
          </ul>
        </div>
      </div>
      <div class="main innerContent">
        <h1>
          <a href="">
            <img src="../assets/logo_png(2).png">
          </a>
        </h1>

        <div class="searchAreaWrap">
          <div class="searchArea el TXT">
            <label class="blind">검색어</label>
            <input title="검색어 입력" id="headerSearchId">
            <button type="button" class="btnSearchInner">
              <span class="blind">검색</span>
            </button>
          </div>
        </div>
        <div class="buttonArea">
          <ul>
            <li><button type="button" title="새창" class="chat"></button></li>
            <li><a href="" class="heart">나의 찜</a></li>
            <li><a href="" class="my">마이 롯데</a></li>
            <li><a href="" class="cart">장바구니</a></li>
          </ul>
        </div>
      </div>

      <div class="sub">
        <div class="innerContent">
          <div class="category el">
            <div class="moreViewWrap">
              <button type="button" class="moreView"></button>
            </div>
            <div class="menu spreadType">
              <div id="menuInner" class="menuInner">
                <ul>
                    <li class="active">
                        <a>홈</a>
                    </li>
                    <li><a>베스트</a></li>
                    <li><a>탑 브랜드</a></li>
                    <li><a>신상10%</a></li>
                    <li><a>브랜드</a></li>
                    <li><a>기획전</a></li>
                    <li><a>해외패션</a></li>
                    <li><a>뷰티</a></li>
                    <li><a>가방/패션ACC</a></li>
                    <li><a>슈즈</a></li>
                    <li><a>여성</a></li>
                    <li><a>남성</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }

</script>

<style>
  .headerWrapper {
    background-color: #000;
  }

  .util .accountArea ul {
    margin-top: 0px;
  }

  .util .accountArea ul li {
    display: inline-block;
    margin-left: 18px;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -.2px;
    color: #757575;
  }

  .util .accountArea {
    text-align: right;
  }

  .main {
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .main img {
    height: 27px;
  }

  .searchAreaWrap .searchArea {
    position: relative;
    width: 100%;
  }

  .blind {
    overflow: hidden;
    display: inline-block;
    border: 0;
    margin: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    position: absolute;
    top: 0 !important;
    left: 0 !important;
  }

  #mainLayout header .main .searchArea {
    width: 450px;
    height: 48px;
    padding: 8px 43px 8px 20px;
    border-radius: 25px;
    border-style: solid;
    border-width: 2px;
    border-color: inherit;
}

#mainLayout header .sub {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    text-align: left;
}

#mainLayout header .sub .innerContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
}

.sub .category {
    display: inline-block;
}

#mainLayout header .sub .category .moreViewWrap {
    float: left;
}

#mainLayout header .sub .category .menu {
    position: relative;
    display: inline-block;
    width: 738px;
    height: 50px;
    overflow: hidden;
}

#mainLayout header .sub .category .menu .menuInner ul {
    position: relative;
    display: block;
    width: 100%;
    font-size: 0;
    white-space: nowrap;
}

#mainLayout header .sub .category .menu .menuInner ul li {
    display: inline-block;
    margin-left: 30px;
    font-size: 20px;
    line-height: 50px;
    color: #333;
    vertical-align: bottom;
    font-size: 16px;
}

.sub .category li a{
    color:white;
}

  

</style>
