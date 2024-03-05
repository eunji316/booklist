import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './component/Header';
import Mainpage from './component/Mainpage';
import Searchpage from './component/Searchpage';

import sun01 from './img/sun01.jfif';
import sun02 from './img/sun02.webp';
import sun03 from './img/sun03.jfif';
import sun04 from './img/sun04.jfif';
import sun05 from './img/sun05.jfif';
import sun06 from './img/sun06.webp';
import sun07 from './img/sun07.webp';
import sun08 from './img/sun08.webp';
import sun09 from './img/sun09.jfif';
import sun10 from './img/sun10.jfif';
import so01 from './img/so01.webp';
import so02 from './img/so02.webp';
import so03 from './img/so03.webp';
import so04 from './img/so04.jfif';
import so05 from './img/so05.jfif';
import ho01 from './img/ho01.jfif';
import ho02 from './img/ho02.webp';
import ho03 from './img/ho03.jfif';
import ho04 from './img/ho04.jfif';

const dummy = [
  {
    id : 0,
    title : '봄의 폭풍과 몬스터',
    director : '미츠바치 미유키',
    genre : '순정만화',
    publisher : '학산문화사',
    story : '너무 위험한 의붓동생이 생겼습니다. 하루노 란코는 가능한 타인과 엮이지 않고, 공기처럼 살아가고 싶은 평범한 고등학교 1학년이다. 그런 란코네 엄마의 재혼 상대가 데려온 아들・아마미네 카야는, 길거리에 사람을 냅다 던지는 타입의 몬스터 중학생이었다! 그러나 카야에게는 사정이 있는 모양으로…? 일상이 비일상으로 바뀌는, 좌충우돌 의붓남매 스토리 개막!',
    photo : sun01
  },
  {
    id : 1,
    title : '핑크와 하바네로',
    director : '사토나카 미카',
    genre : '순정만화',
    publisher : '대원씨아이',
    story : '"나도 남자친구를 사귀고 싶어!"연애 경험 제로에 남자와의 커뮤니케이션 능력 전무인 무기. 고등학교에 들어가서 만난 건 엄청난 미남인데도 여자들에게 무뚝뚝하기 그지없는 쿠로세 케이. 너무나 실례되는 태도에 화가 치미는 무기는 우연히 쿠로세가 비밀스럽게 아르바이트하는 곳을 알게 되는데?! 황홀함에 몸부림치는 러브 코미디, 개막!',
    photo : sun02
  },
  {
    id : 2,
    title : '주술회전',
    director : '아쿠타미 게게',
    genre : '소년만화',
    publisher : '서울문화사',
    story : '경이로운 신체 능력을 가진 고등학생 이타도리 유지는 병상에 누워 있는 할아버지의 병문안을 가는 것이 일과이다. 그러던 어느 날, 학교에 잠들어 있던 ‘주물(呪物)’의 봉인이 풀리면서 괴물이 나타나고 이타도리는 미처 도망치지 못한 선배를 구하기 위해 학교 건물로 뛰어드는데?!',
    photo : so01
  },
  {
    id : 3,
    title : '호리미야',
    director : '하기와라 다이스케',
    genre : '학원',
    publisher : '학산문화사',
    story : '청춘은 새콤달콤... 하지만 의외로 시큼할 뿐일지도!? 지금 청춘인 사람도, 청춘이 먼 과거가 된 사람도 무심코 웃으며 마음이 따뜻해지는, 대충 그런 느낌의 청춘 코미디!',
    photo : ho01
  },
  {
    id : 4,
    title : '손끝과 연연',
    director : '모리시타 수',
    genre : '순정만화',
    publisher : '학산문화사',
    story : '여대생 유키는 어느날 곤란에 처해있을 때 같은 대학 선배인 이츠오미의 도움을 받는다. 청각장애가 있어 귀가 들리지 않는 유키에게도 동요하지 않고 자연스럽게 대해주는 이츠오미. 자신에게 새로운 세계를 느끼게 해준 이츠오미를 유키는 점점 의식하기 시작하는데…?!',
    photo : sun03
  },
  {
    id : 5,
    title : '타몬 군 지금 어느 쪽!?',
    director : '시와스 유키',
    genre : '순정만화',
    publisher : '학산문화사',
    story : '“타몬 군은 신!!” “복창하세요.” 어떤 모습이든 타몬 군은 타몬 군. 자존감 바닥인 그를 위해 최선을 다해 서포트하기로 한다! 그런데 칙칙한 타몬 군에게까지 심쿵하고 마는데…? 온 오프 천지 차이×신박한 덕질 러브 코미디, 개막!',
    photo : sun04
  },
  {
    id : 6,
    title : '여학교의 별',
    director : '와야마 야마',
    genre : '학원',
    publisher : '문학동네',
    story : '어느 여학교 2학년 4반. 앞머리를 정리하는 학생, 몰래 만화를 그리는 학생, 대놓고 조는 학생. 여고생들의 생기발랄, 리얼한 교실 풍경 속에 발랄함과는 거리가 먼 교사가 있다. 시종일관 무표정에 딱딱한 높임말. 만만치 않아 보이는 2학년 4반 담임 호시 선생님을 두고, 어디로 튈지 모르는 여고생들의 장난이 시작된다.',
    photo : ho02
  },
  {
    id : 7,
    title : '헌터X헌터',
    director : '토가시 요시히로',
    genre : '소년만화',
    publisher : '학산문화사',
    story : '진수, 괴수, 재물, 보물, 마경, 비경. "미지"라는 말이 뿜어내는 마력. 그 힘에 매료된 자들이 있다. 사람들은 그들을 일컬어 "헌터"라고 부른다.',
    photo : so02
  },
  {
    id : 8,
    title : '선배! 지금부터 고백합니다',
    director : '신모토 신',
    genre : '순정만화',
    publisher : '학산문화사',
    story : '「멋진 여자는 남자에게 차이지 않아요」어머니 말에 따라 충실히 살고 있는 코하루가 사랑한 상대는어떤 고백도 웃는 얼굴로 거절해, 미소짓는 단두대라고 불리는 칸자키 선배.막상 고백해도 바로 차여버린다!!하지만 역시 좋아하니까… 마음이 통할 때까지 고백한다?! 짝사랑하는 여자의 신 바이블♥청춘도 200%의 폭소&심쿵♥러브!',
    photo : sun05
  },
  {
    id : 9,
    title : '나의 히어로 아카데미아',
    director : '호리코시 코헤이',
    genre : '소년만화',
    publisher : '서울문화사',
    story : '"개성"이라는 초능력을 갖고 태어나는 게 당연한 세계, 현재 인류 8할이 개성을 소유하고 있다. 주인공 "미도리야 이즈쿠"도 히어로를 동경하고 있다. 하지만 무개성인 이즈쿠는 히어로가 될 수 없었고, 주변에서도 포기하란 말만 듣는다. 무개성이었던 미도리야 이즈쿠는 최고의 히어로를 목표로 성장해 나간다.',
    photo : so03
  },
  {
    id : 10,
    title : '종말의 세라프',
    director : '카가미 타카야',
    genre : '소년만화',
    publisher : '학산문화사',
    story : '미지의 바이러스에 의해 인류는 괴멸하고, 아이들만이 살아남아 지하 도시에서 뱀파이어의 지배를 받고 있었다. 지기 싫어하는 기 센 소년, 햐쿠야 유이치로는 동료들의 희생으로 홀로 탈출에 성공, 복수를 맹세한다. 유이치로가 본 새로운 지상 세계란?! 한편, 흡혈귀에게 가족을 잃은 유이치로는 복수를 위해 일본제귀군에 입대하고, 그곳에서 새로운 동료들과 흡혈귀 섬멸을 위해 싸우지만-…?!',
    photo : so04
  },
  {
    id : 11,
    title : '내가 인기 있어서 어쩌자는 거야',
    director : '준코',
    genre : '순정만화',
    publisher : '학산문화사',
    story : '집으로 돌아와서 자신이 좋아하는 애니메이션 캐릭터 시온이 나오는 "미라쥬 사가"의 실황 리뷰를 쓰다가 시온이 죽는 장면이 나오자 충격을 먹고 일주일 간 방 안에 틀어박히다가 가족들의 성화에 억지로 밖에 나오게 되는데 살이 빠져 엄청난 미녀가 된다.예뻐진 카에를 보고 이가라시, 나나시마, 시노미야는 카에에게 반하게 되며 카에는 순식간에 세 명의 남자들에게 사랑받게 된다.',
    photo : sun06
  },
  {
    id : 12,
    title : '허니 레몬 소다',
    director : '무라타 마유',
    genre : '순정만화',
    publisher : 'DCW',
    story : '중학교 시절 "돌덩이라고 불리며 우는 법도 웃는 법도 잊었던 우카. 어느 날 우연히 마주친 레몬색 머리의 남자아이 미우라군을 동경하게 되어 같은 고등학교에 입학하는데…!?',
    photo : sun07
  },
  {
    id : 13,
    title : '하나노이 군과 상사병',
    director : '모리노 메구미',
    genre : '순정만화',
    publisher : '대원씨아이',
    story : '고등학교 1학년 겨울, 별 생각 없이 우산을 빌려준 걸 계기로 옆반의 하나노이에게 갑자기 고백을 받은 히나세 호타루. 미남이지만 "운명적인 사랑" 운운하며 좋아하는 애를 위해서라면 모든 것을 쏟아붓는 하나노이는 덕분에 실연만 여러 차례. 호타루 역시 그 부담스러운 사랑의 무게 때문에 당황스럽기만 한데…?',
    photo : sun08
  },
  {
    id : 14,
    title : '타마의 포상',
    director : '시이나 카루호',
    genre : '순정만화',
    publisher : '대원씨아이',
    story : '초·중학교 모두 여학교를 나와서 ‘남자’에게 남들보다 훨씬 강한 동경을 품고 있는 카노코. 염원하던 남녀공학에 입학해서 ‘남자애와 가까워지고 싶다’는 망상을 하지만 옆자리의 타마오는 조금 특이한 성격의 소유자로…?!',
    photo : sun09
  },
  {
    id : 15,
    title : '너에게 닿기를',
    director : '호시야 카오리',
    genre : '순정만화',
    publisher : '대원씨아이',
    story : '여고생 "쿠로누마 사와코"는 음산한 겉모습 때문에 이상한 소문이 퍼졌고 기피대상으로 낙인찍혀 버린다. 어느 날, 이런 자신을 전혀 무서워하는 기색 없이 평범한 여자애로 대해주는 "카제하야 쇼타"를 만나 조언을 듣게된다. 이후 조언대로 했더니 정말로 무서워하던 아이들이 달라졌고 절친한 친구까지 생겼다. 그러는 사이 사와코는 자신이 변할 수 있었던 건 카제하야 덕분이라고 여기는 사이 그를 짝사랑하기 시작한다.',
    photo : sun10
  },
  {
    id : 16,
    title : '문호스트레이독스',
    director : '아사기리 카프카',
    genre : '소년만화',
    publisher : '영상출판미디어',
    story : '고아원에서 쫓겨나 요코하마에 도착한 청년 나카지마 아츠시는 자살에 실패해 강에서 떠내려온 남자를 살려준다. 남자의 이름은 다자이 오사무… 거칠고 위험한 사건을 주로 해결하는 이능력 집단 ‘무장 탐정사’에 소속된 그는 세상을 떠들썩하게 만들고 있는 ‘식인 호랑이’ 소동을 해결하기 위해 조사를 하는 중이었다. 식인 호랑이와 인연이 있던 나카지마는 다자이의 강권으로 조사에 동행하게 되는데….',
    photo : so05
  },
  {
    id : 17,
    title : '카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~',
    director : '아카사카 아카',
    genre : '학원',
    publisher : '대원씨아이',
    story : '똑똑한 데다 외모 또한 발군인 두 명의 고등학생 남녀가 있다. 둘은 서로를 좋아하지만 자존심이 드높은 탓에, 먼저 고백받기 위한 두뇌 싸움을 벌이기 시작한다! 하지만 허점투성이의 그들은 매번 삽질만 하고. 과연, 이 밀당 싸움의 최종 승자는 누구인가? 사랑에 승자란 존재하는 것인가?!',
    photo : ho03
  },
  {
    id : 18,
    title : '빙과',
    director : '요네자와 호노부',
    genre : '학원',
    publisher : '대원씨아이',
    story : '에너지 절약을 자신의 신조로 삼고 있는 호타로는 누나의 명령으로 졸지에 ‘고전부’ 에 가입하게 된다. 동아리방을 찾아간 호타로는 그 곳에서 호기심 왕성한 소녀 ‘치탄다 에루’와 만나고 ‘동아리방 밀실사건’에 맞닥뜨리는데?!',
    photo : ho04
  },
];

function App() {
  const [category, setCategory] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Header setCategory={setCategory} dummy={dummy} />
        <Routes>
          <Route path='/' element={<Mainpage dummy={dummy} category={category} />} />
          <Route path='/search' element={<Searchpage dummy={dummy} category={category} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;