// 교사가 수정하는 파일입니다. GUIDE.md를 보고 아래 목록만 바꿔주세요.
// map: "goguryeo" 또는 "balhae" 중 하나
// x, y: 땅속에 묻혀서 힌트가 보일 타일 좌표 (0부터 시작, 지도마다 다름)
const ARTIFACTS = [
  { id: "giwa_g", name: "기와", map: "goguryeo", image: "assets/images/giwa_g.png", x: 2, y: 2 },
  { id: "ondol_g", name: "온돌 터", map: "goguryeo", image: "assets/images/ondol_g.png", x: 6, y: 4 },
  { id: "byeokhwa_g", name: "고분벽화 조각", map: "goguryeo", image: "assets/images/byeokhwa_g.png", x: 8, y: 1 },

  { id: "giwa_b", name: "기와", map: "balhae", image: "assets/images/giwa.jpg", x: 3, y: 1 },
  { id: "ondol_b", name: "온돌", map: "balhae", image: "assets/images/ondol.jpg", x: 1, y: 4 },
  { id: "sukdeung_b", name: "석등", map: "balhae", image: "assets/images/sukdeung.jpg", x: 7, y: 3 },
  { id: "samchahyangro_b", name: "발해 삼채 향로", map: "balhae", image: "assets/images/samchahyangro.png", x: 5, y: 5 },
  { id: "ibul_b", name: "이불병좌상", map: "balhae", image: "assets/images/ibul.png", x: 2, y: 3 },
  { id: "rakko_b", name: "랏코", map: "balhae", image: "assets/images/rakko.webp", x: 4, y: 2 }
];

// 맵별 발굴 스팟 배치. 모든 스팟에는 실제로 존재하는 유물 id를 적어야 하며,
// 맵마다 ARTIFACTS에 있는 유물 종류가 최소 한 번씩은 배정되어 있어야 합니다.
// 좌표(x,y)는 0부터 시작하며 각 맵의 cols/rows 범위 안에서 정해주세요.
// 맵 크기가 10x7일 때 x는 1~8, y는 1~5 범위 안에 두면 맵 가장자리에 붙지 않고
// 캐릭터가 사방에서 걸어서 닿을 수 있는 안전한 위치가 됩니다.
const SPOTS = {
  goguryeo: [
    { x: 2, y: 2, artifactId: "giwa_g" },
    { x: 6, y: 4, artifactId: "ondol_g" },
    { x: 8, y: 1, artifactId: "byeokhwa_g" },
    { x: 4, y: 5, artifactId: "giwa_g" },
    { x: 1, y: 5, artifactId: "ondol_g" },
    { x: 3, y: 4, artifactId: "byeokhwa_g" },
    { x: 5, y: 1, artifactId: "byeokhwa_g" }
  ],
  balhae: [
    { x: 3, y: 1, artifactId: "giwa_b" },
    { x: 1, y: 4, artifactId: "ondol_b" },
    { x: 7, y: 3, artifactId: "sukdeung_b" },
    { x: 5, y: 5, artifactId: "samchahyangro_b" },
    { x: 8, y: 1, artifactId: "giwa_b" },
    { x: 2, y: 3, artifactId: "ibul_b" },
    { x: 4, y: 2, artifactId: "rakko_b" }
  ]
};

const MAPS = {
  goguryeo: { label: "고구려 유적지", cols: 10, rows: 7, groundColor: "#dcc48e", groundColor2: "#d3b97f", theme: "mountain" },
  balhae: { label: "발해 유적지", cols: 10, rows: 7, groundColor: "#cfd3a0", groundColor2: "#c5c995", theme: "field" }
};
