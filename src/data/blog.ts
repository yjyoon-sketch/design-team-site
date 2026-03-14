export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  thumbnail: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Framer로 개발 없이 뚝딱 랜딩페이지 배포하기",
    excerpt:
      "팀스파르타의 잠재 고객을 전환으로 이끄는 가장 중요한 접점은 바로 랜딩 페이지예요. 하지만 다수의 랜딩 페이지가 스쿼드 내에서 기획-개발-퍼블리싱 협업을 통해 제작되었기 때문에, 마케팅 인사이트에 기반한 빠른 실험과 반복이 어려웠어요.",
    date: "2025.12.17",
    url: "https://brunch.co.kr/@8a0100de7ca0488/12",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/zAvWRYUW2yasImiAhFbXxhqHHso.png",
  },
  {
    title: "스디책 #3. 다크패턴의 비밀",
    excerpt:
      "사용자를 속이는 온라인 디자인 패턴과 그것이 사용자의 선택을 어떻게 조작하는지. 디지털 인터페이스에 사용되는 다크패턴의 정의, 사례, 규제 대응을 탐구하며, 프로덕트 디자이너의 윤리적 책임을 논합니다.",
    date: "2025.11.26",
    url: "https://brunch.co.kr/@8a0100de7ca0488/11",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/FQvwy7SvZYIvXcV7MqkvShJiy3Y.png",
  },
  {
    title: "5개 브랜드가 함께 쓰는 시스템",
    excerpt:
      "작은 간과가 만든 큰 비효율. 처음 디자인 시스템을 만들었을 때, Foundation부터 차근차근 정리하고 버튼 같은 기본 컴포넌트들을 하나씩 만들어갔어요.",
    date: "2025.11.13",
    url: "https://brunch.co.kr/@8a0100de7ca0488/10",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/W_w6Okl8nsfrwPc7H9vr-m64mfA.png",
  },
  {
    title: "디자이너는 매일 아침 무슨 이야기를 하는가",
    excerpt:
      "팀스파르타 디자인팀은 총 6명의 프로덕트 디자이너로 구성되어 있어요. 지금은 사업 단위 + 퍼널/UX 유형에 따라 좀 더 넓은 관점에서 업무를 분담하고 있지만, 3년 전까지만 하더라도 한 명의 디자이너가 하나의 사업부를 오로지 전담하고 있는 형태였어요.",
    date: "2025.05.21",
    url: "https://brunch.co.kr/@8a0100de7ca0488/8",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/APU7rygCc9D3jAL8uIW1iGb-dVA.png",
  },
  {
    title: "스디책 #2. 고작 다섯 명이 한 말을 어떻게 믿어요?",
    excerpt:
      "정성 연구에 신뢰를 더하는 UX 리서치 전략. 소규모 사용자 인터뷰에서도 신뢰할 수 있는 인사이트를 도출하는 방법론, 참가자 모집, JTBD 프레임워크를 활용한 인터뷰 기법, 데이터 분석 접근법을 다룹니다.",
    date: "2025.04.28",
    url: "https://brunch.co.kr/@8a0100de7ca0488/7",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/hAaO1h1y8ViThgsE8L4laS705xc.png",
  },
  {
    title: "랜딩 바꾸고 전환율 2.5배 개선하기",
    excerpt:
      "랜딩 페이지란 사용자가 광고나 검색 결과를 통해 처음으로 도착하게 되는 웹페이지를 의미한다. 잘 만들어진 랜딩 페이지는 사용자의 질문에 적절한 해답을 제공해 설득할 수 있게 만든다.",
    date: "2025.04.15",
    url: "https://brunch.co.kr/@8a0100de7ca0488/6",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/ooqooU8KK5vtYqReAWz7rovouR8.png",
  },
  {
    title: "스디책 #1. 그렇게 쓰면 아무도 안 읽습니다",
    excerpt:
      "스파르타 디자인팀의 북스터디 시리즈. UX 라이팅 원칙에 초점을 맞추어, 사용자와 제품 사이의 지극히 구체적인 대화를 디자인하는 행위를 탐구합니다.",
    date: "2025.03.24",
    url: "https://brunch.co.kr/@8a0100de7ca0488/5",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/hmf_v4GmClr1Vf0KkfeFuwGPufc.png",
  },
  {
    title: "반년 동안 회사의 백오피스를 뒤집어엎었습니다.",
    excerpt:
      "팀스파르타의 백오피스는 회사 초기부터 모든 운영 시스템을 담당했으나, 3년 이상 누적된 버그와 레거시로 인해 기능 장애가 빈번했습니다. 2024년 대규모 개편 프로젝트를 통해 시스템을 재설계한 경험을 공유합니다.",
    date: "2025.03.04",
    url: "https://brunch.co.kr/@8a0100de7ca0488/3",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/MxAoJBW6Je_oNHmOcfSWPJL4s30.png",
  },
  {
    title: "피그마 파일, 지금 정리하지 않으면 늦어요",
    excerpt:
      "피그마 파일, 언제 마지막으로 정리하셨나요? 디자이너라면 요즘 피그마(Figma) 안 쓰시는 분이 거의 없죠. 특히 협업의 툴로 사용할 때 그 진가가 드러나는 피그마.",
    date: "2025.02.07",
    url: "https://brunch.co.kr/@8a0100de7ca0488/1",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/lU2VfKjoYbA2523hAIohdh2KEO0.png",
  },
  {
    title: "우리가 디자인시스템을 처음부터 다시 만드는 이유",
    excerpt:
      "팀스파르타 디자인팀 6명이 각각 다른 제품의 UI를 따로 관리하면서 겪은 비효율. 중복 컴포넌트 개발, 비효율적인 디자이너-개발자 협업, 통일된 기준 부재를 해결하기 위해 디자인 시스템 TF를 구성했습니다.",
    date: "2024.12.20",
    url: "https://brunch.co.kr/@8a0100de7ca0488/4",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/gLD7qOAkDwW-7GqVjwpajUk2QQQ.png",
  },
  {
    title: "바쁘지만 책은 읽고 싶다면, 사내 북스터디 운영기",
    excerpt:
      "스타트업 디자인팀에서 바쁜 일상 속에서도 꾸준히 책을 읽기 위해 사내 북스터디를 시작한 이야기. 4개월간 3권의 디자인 관련 서적을 완독했습니다.",
    date: "2025.01.16",
    url: "https://brunch.co.kr/@8a0100de7ca0488/2",
    thumbnail:
      "http://t1.daumcdn.net/brunch/service/user/hqZS/image/ijxZFS1lILFLWf8f983gkQ950fs.png",
  },
];
