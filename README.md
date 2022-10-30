<div align="center">
<h1>sgtmarket</h1>
<img width="750" alt="banner7" src="https://user-images.githubusercontent.com/48630055/196905445-6fad9662-acbe-44fd-ab7f-c92ac69630b4.png">
</div>

## SGT Market
- KDT - 2차 프로젝트
- 220919~ 221003
- Use: HTML, CSS, JavaScript, Git, Node.js, Express, Sequelize

## 프로젝트 소개
- SGT Market 서비스란?
- 중고 거래 사이트

- 다양한 물품 교환
- 실시간 채팅을 이용한 중고 거래 서비스

## 구현 기능
### Front end
메인 페이지
- 서버에서 데이터를 받아와서 상품 컨텐츠 render
- css와 javascript로 햄버거 토글 메뉴 제작
- 자동으로 넘어가는 배너 → slick library 사용
- nav 상단의 login / logout 바는 로그인 세션에 따라 반응
- 백엔드에서 axios 요청을 받아와서 최근 업로드 순 / 찜 많은 순으로 레이아웃 정리 (result값 각 7개씩)
- 찜(heart) 기능 로그인 세션과 연동하여 로그인시 활성화
- 페이지 자체 반응형 (nav, footer, 레이아웃 등) 

제품 상세 페이지
- 메인화면 또는 카테고리에서 상품을 클릭했을 때 상세페이지가 render 되도록 처리
- 업로드한 유저의 정보, 주소지, 상품 제목, 카테고리, 내용, 가격, 상품의 사진을 백엔드에서 받아옴
- 찜하기 버튼 클릭 시 axios 요청을 통해 찜 목록에 추가되도록 함.
- 페이지 내 ‘이 카테고리의 다른 상품’에서는 같은 카테고리의 상품을 최대 2개까지 랜덤으로 render
- 이미지가 여러 장 있는 상품일 경우 Array 값을 받아와 carousel로 보일 수 있도록 처리 / 이미지 크기는 고정비로 최대값 넘지않게 처리
- 페이지 자체 반응형

카테고리 페이지 
- nav바에서 카테고리 별 클릭시 DB에서 등록 물건 가져오기 (물건 목록은 Bootstrap 사용)
- 가격, 등록 순 정렬 (카테고리 별 연동) sort 함수 사용
- 4개, 8개 배열 (카테고리 별 구현가능)
- 페이지네이션 기능 (Pagination.js jQuery Plugin 사용)
- 찜(heart) 기능 로그인시 활성화

채팅 페이지
- 미디어쿼리 및 기타 CSS작업

### Back end
- 데이터 설계
![SGT](https://user-images.githubusercontent.com/48630055/196906650-17f52c48-e632-4875-8d4a-2a42c7b027d8.png)
- JWT를 이용한 로그인 구현
