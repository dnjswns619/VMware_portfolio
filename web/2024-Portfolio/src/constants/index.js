export const introText = {
  top: [
    {
      id: 1,
      class: "desc__item--text",
      text: "Tranquil"
    },
    {
      id: 2,
      class: "desc__item--text kor",
      text: "차분한"
    },
    {
      id: 3,
      class: "desc__item--text",
      text: "Growing"
    },
    {
      id: 4,
      class: "desc__item--text kor",
      text: "성장하는"
    },
    {
      id: 5,
      class: "desc__item--text",
      text: "Responsible"
    },
    {
      id: 6,
      class: "desc__item--text kor",
      text: "책임감 있는"
    }
  ],
  middle: [
    {
      id: 7,
      class: "desc__item--text",
      text: "Flexible"
    },
    {
      id: 8,
      class: "desc__item--text kor",
      text: "유연한"
    },
    {
      id: 9,
      class: "desc__item--text",
      text: "Positive"
    },
    {
      id: 10,
      class: "desc__item--text kor",
      text: "긍정적인"
    },
    {
      id: 11,
      class: "desc__item--text",
      text: "Faithful"
    },
    {
      id: 12,
      class: "desc__item--text kor",
      text: "성실한"
    }
  ],
  bottom: [
    {
      id: 13,
      class: "desc__item--text",
      text: "Scrupulous"
    },
    {
      id: 14,
      class: "desc__item--text kor",
      text: "꼼꼼한"
    },
    {
      id: 15,
      class: "desc__item--text",
      text: "Enthusiastic"
    },
    {
      id: 16,
      class: "desc__item--text kor",
      text: "열정적인"
    },
    {
      id: 17,
      class: "desc__item--text",
      text: "Scrupulous"
    },
    {
      id:18,
      class: "desc__item--text kor",
      text: "꼼꼼한"
    }
  ]
}

export const portContent = [
  {
    id: 1,
    title: "MCST",
    cardText : "MCST",
    skill: ["html", "css", "javascript"],
    desc: `문화체육관광부의 메인 페이지를, 접근성을 고려하며 반응형으로 클론 코딩을 진행하였습니다.<br>
    모든 컨텐츠를 tab 키로 이동할 수 있도록 했으며 img 태그의 alt 작성, skip 메뉴 제작 등
    어떠한 사용자이든 모든 컨텐츠를 이해할 수 있도록 제작했습니다.`,
    gitLink: `https://github.com/dnjswns619/MCST_2024`,
    imgSrc: "MCST.png",
    pageLink: "https://dnjswns619.github.io/MCST_2024/"
  },
  {
    id: 2,
    title: "Enterprise blockchain",
    skill: ["html", "scss", "javascript", "gsap"],
    desc: `gsap 플러그인을 사용하여 사용자의 스크롤에 따라 변화하는 엔터프라이즈블록체인을 제작했습니다.<br>
    observer API를 같이 사용해 사용자가 특정 섹션에 들어왔을 때 header 메뉴가 변화하도록 제작하였으며,
    반응형에서도 컨텐츠들의 위치들이 무너지지 않고 서로 다른 애니메이션 효과 등을 사용하도록 제작하였습니다.`,
    gitLink: `https://github.com/dnjswns619/enterpriseblockchain`,
    imgSrc: "enterpriseblockchain.png",
    pageLink: "https://dnjswns619.github.io/enterpriseblockchain/"
  },
  {
    id: 3,
    title: "Kream",
    skill: ["react", "scss", "javascript"],
    desc: `react를 사용해 kream 메인 페이지 pc버전을 제작했습니다.<br>
    슬라이더는 swiper slide를 사용하였고 컴포넌트를 나누고 useState를 통해 상태를 관리하고 그 상태에 따라 여러 데이터를 전달하고 그 데이터를 이용해 html 코드를 만들면서 react를 이해하며 사용할 수 있었습니다.
    `,
    gitLink: `https://github.com/dnjswns619/Kream`,
    imgSrc: "kream.png",
    pageLink: "https://dnjswns619.github.io/Kream/"
  },
  {
    id: 4,
    title: "Portfolio",
    skill: ["react", "scss", "javascript", "gsap", "lenis"],
    desc: `react와 gsap를 사용해 포트폴리오 홈페이지를 제작했습니다.<br>
    lenis 라이브러리를 사용해 사용자의 스크롤 시 부드럽게 이동하도록 하였으며 반응형에서도 모든 컨텐츠들이 잘 나오게
    제작했습니다. useState를 사용해 모바일 헤더를 관리했으며 useEffect를 통해 컴포넌트가 렌더링 된 후 gsap 애니메이션을 실행하도록 했습니다.
    또한 header에서 useEffect의 정리 함수를 이용해 스크롤 버그를 방지할 수 있었습니다.
    `,
    gitLink: `https://github.com/dnjswns619/2024-Portfolio`,
    imgSrc: "portfolio.png"
  },
  {
    id: 5,
    title: "Galleria Dermatory",
    cardText : "Galleria",
    skill: ["PHP", "css", "javascript"],
    desc: `갤러리아피부과 강동송파점의 모든 페이지를 담당했습니다.<br>
    gsap와 lenis를 이용해 스크롤에 따라 부드럽게 이동하며 여려 효과들이 나타나도록 제작했습니다.<br>
    php 기능을 이용해 관리자 페이지에서 팝업과 공지, 이벤트 게시물을 게시하고 삭제할 수 있도록 제작했으며 mysql에 저장되어있는 데이터들을 관리자 페이지에서 추가, 삭제, 변경할 수 있도록 제작했습니다.<br>
    또한, 고객사와 소통을 통해 cafe24를 이용해 도메인, 호스팅 구매 및 ssl 인증서 적용 작업까지 담담해 해당 홈페이가 사용자들에게 보여지기 까지의 모든 과정을 맡아서 제작했습니다.
    `,
    imgSrc: "galleria.png",
    pageLink: "https://galleriaskings.com/"
  },
  {
    id: 6,
    title: "Lasium Dermatory",
    cardText : "Lasium",
    skill: ["PHP", "css", "javascript"],
    desc: `레지움피부과의 모든 페이지를 담당했습니다.<br>
    gsap와 lenis를 이용해 스크롤에 따라 부드럽게 이동하며 여려 효과들이 나타나도록 제작했습니다.<br>
    php 기능을 이용해 관리자 페이지에서 팝업과 공지, 이벤트 게시물을 게시하고 삭제할 수 있도록 제작했으며 mysql에 저장되어있는 데이터들을 관리자 페이지에서 추가, 삭제, 변경할 수 있도록 제작했습니다.<br>
    해당 고객사는 따로 유튜브를 이용하고 있었기때문에 해당 유튜브를 홈페이지에 노출시키고싶다는 요청을 받아 고객사에서 직접 관리하기 편하도록 유튜브 주소를 이용해 iframe 영상이 자동으로 적용되도록 php 기능을 이용해 mysql 데이터와 게시물을 직접 관리하실 수 있도록 제작했습니다.
    또한, 고객사와 소통을 통해 cafe24를 이용해 도메인, 호스팅 구매 및 ssl 인증서 적용 작업까지 담담해 해당 홈페이가 사용자들에게 보여지기 까지의 모든 과정을 맡아서 제작했습니다.
    `,
    imgSrc: "lasium.png",
    pageLink: "https://lasium.co.kr/"
  },
  {
    id: 7,
    title: "Chamjoeun Dental Hospital",
    cardText : "Chamjoeun",
    skill: ["PHP", "css", "javascript"],
    desc: `참조은치과의 모든 페이지를 담당했습니다.<br>
    gsap와 lenis를 이용해 스크롤에 따라 부드럽게 이동하며 여려 효과들이 나타나도록 제작했습니다.<br>
    php 기능을 이용해 관리자 페이지에서 팝업과 공지, 이벤트 게시물을 게시하고 삭제할 수 있도록 제작했으며 mysql에 저장되어있는 데이터들을 관리자 페이지에서 추가, 삭제, 변경할 수 있도록 제작했습니다.<br>
    해당 고객사는 청주점과 천안점 두 지점을 동시에 한 홈페이지에서 보여주길 원하신다는 요청을 받아 모든 게시판에서 똑같은 게시물 작성페이지 이지만 전체 혹은 각 지점을 선택해 게시물의 데이터를 등록하고 mysql의 데이터를 받아와 선택하신 지점에 따라 사용자에 보는 입장에서는 자동으로 구분되어 보이도록 제작했습니다.<br>
    또한, 고객사와 소통을 통해 cafe24를 이용해 도메인, 호스팅 구매 및 ssl 인증서 적용 작업까지 담담해 해당 홈페이가 사용자들에게 보여지기 까지의 모든 과정을 맡아서 제작했습니다.
    `,
    imgSrc: "chamjoeun.png",
    pageLink: "https://www.cjdental.co.kr/"
  }
]

export const workImg = [
  {
    imgSrc: "poster(1)"
  },
  {
    imgSrc: "poster(2)"
  },
  {
    imgSrc: "poster(3)"
  },
  {
    imgSrc: "poster(4)"
  },
  {
    imgSrc: "poster(5)"
  },
  {
    imgSrc: "poster(6)"
  },
  {
    imgSrc: "poster(7)"
  },
  {
    imgSrc: "poster(8)"
  },
  {
    imgSrc: "poster(9)"
  },
  {
    imgSrc: "poster(10)"
  },
  {
    imgSrc: "poster(11)"
  }
]

export const workContent = [
  {
    id: 1,
    title: "초등학교 3,4학년 과학 전자저작물",
    skill: ["html", "css", "javascript"],
    desc: `천재교육에서 진행하는 초등학교 3, 4학년 전자 저작물 제작에 참여했습니다.<br>
    입사 후 처음으로 진행한 프로젝트이며 디자인팀과 소통하고 개발이 필요할 때는 개발팀과 소통하며 업무를 진행해 나갔고 680 페이지가량의 쪽수를 제작했습니다.<br>
    html과 css를 이용해 작업하였으며 개발팀에서 제작해 놓았던 템플릿과 개발된 코드 등을 수정해 다른 페이지에도 적용해 가며 촉박한 기한에도 불구하고 완성해 제출할 수 있었습니다.`,
    imgSrc1: "sci_code2",
    imgSrc2: "sci_code1"
  },
  {
    id: 2,
    title: "고등학교 공통 영어 AIDT",
    skill: ["html", "css", "javascript"],
    desc: `천재교육에서 진행하는 고등학교 공통 영어 AIDT와 qr 코드로 들어가는 학습페이지 제작에 선임 퍼블리셔로 참여했습니다.<br>프로토를 제작하며 공통으로 쓰이는 css를 만들었고 개발팀 템플릿을 활용한 페이지 개발을 끌어 나갔습니다.<br>
    회사에서 처음 시도하는 API를 연결 과정에서 개발자와 퍼블리셔 사이의 소통이 많은 작업을 서로의 의견 교환과 원활한 소통으로 프로젝트를 문제없이 제작할 수 있었습니다.<br>
    또한 이 프로젝트에서는 웹 표준과 웹 접근성을 상당히 중요시해 이미지의 alt, button에 aria-label 혹은 IR 기법 등을 사용하며 어떠한 사용자도 이 컨텐츠를 사용하면서 제약사항이 없도록 제작했습니다.`,
    imgSrc1: "aidt_code2",
    imgSrc2: "aidt_code1"
  },
]