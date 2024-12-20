export const SERVICE_DURATIONS = {
  army: 18,
  navy: 20,
  airforce: 21,
  social: 21,
} as const;

export const RANKS = {
  army: ['이병', '일병', '상병', '병장'],
  navy: ['이병', '일병', '상병', '병장'],
  airforce: ['이병', '일병', '상병', '병장'],
  social: ['1호봉', '2호봉', '3호봉', '4호봉'],
} as const;

// 각 계급별 시작 시점 (개월)
export const RANK_PERIODS = {
  army: [0, 2, 8, 14], // 이병(0-2), 일병(2-8), 상병(8-14), 병장(14-18)
  navy: [0, 2, 8, 14], // 이병(0-2), 일병(2-8), 상병(8-14), 병장(14-20)
  airforce: [0, 2, 8, 14], // 이병(0-2), 일병(2-8), 상병(8-14), 병장(14-21)
  social: [0, 6, 12, 18], // 1호봉(0-6), 2호봉(6-12), 3호봉(12-18), 4호봉(18-21)
} as const;

// 각 계급별 호봉 기간 (개월)
export const GRADE_PERIODS = {
  '이병': [0, 1], // 매월 호봉 상승
  '일병': [0, 1, 2, 3, 4, 5], // 매월 호봉 상승
  '상병': [0, 1, 2, 3, 4, 5], // 매월 호봉 상승
  '병장': [0, 1, 2, 3], // 매월 호봉 상승
  '1호봉': [0, 1, 2, 3, 4, 5],
  '2호봉': [0, 1, 2, 3, 4, 5],
  '3호봉': [0, 1, 2, 3, 4, 5],
  '4호봉': [0, 1, 2],
  '민간인': [0],
} as const;

export const SALARY_BY_RANK_AND_GRADE = {
  '이병-1': 600000,
  '이병-2': 630000,
  '일병-1': 680000,
  '일병-2': 700000,
  '일병-3': 720000,
  '일병-4': 740000,
  '일병-5': 760000,
  '일병-6': 780000,
  '상병-1': 800000,
  '상병-2': 820000,
  '상병-3': 840000,
  '상병-4': 860000,
  '상병-5': 880000,
  '상병-6': 900000,
  '병장-1': 920000,
  '병장-2': 940000,
  '병장-3': 960000,
  '병장-4': 1000000,
  '1호봉-1': 600000,
  '1호봉-2': 630000,
  '1호봉-3': 660000,
  '1호봉-4': 690000,
  '1호봉-5': 720000,
  '1호봉-6': 750000,
  '2호봉-1': 780000,
  '2호봉-2': 810000,
  '2호봉-3': 840000,
  '2호봉-4': 870000,
  '2호봉-5': 900000,
  '2호봉-6': 930000,
  '3호봉-1': 960000,
  '3호봉-2': 990000,
  '3호봉-3': 1020000,
  '3호봉-4': 1050000,
  '3호봉-5': 1080000,
  '3호봉-6': 1110000,
  '4호봉-1': 1140000,
  '4호봉-2': 1170000,
  '4호봉-3': 1200000,
  '민간인-1': 0,
} as const;

export const RANK_INFO = {
  '이병': {
    description: '군 생활의 시작, 기본 군사훈련을 마치고 자대 배치 후 기본적인 임무 수행 (2-3개월)',
    responsibilities: ['기본 임무 숙달', '선임병 보조', '내무반 정리정돈'],
    tips: ['기본 예절 준수', '빠른 적응을 위한 노력', '체력 단련'],
  },
  '일병': {
    description: '기본적인 임무를 독자적으로 수행할 수 있는 단계 (6개월)',
    responsibilities: ['주특기 임무 수행', '후임병 교육 보조', '당직 근무'],
    tips: ['책임감 있는 임무 수행', '후임병 지도', '전문성 향상'],
  },
  '상병': {
    description: '부대의 중추적인 역할을 수행하는 단계 (6개월)',
    responsibilities: ['부대 주요 업무 수행', '후임병 교육', '각종 훈련 주도'],
    tips: ['리더십 발휘', '부대 발전에 기여', '모범적인 태도'],
  },
  '병장': {
    description: '병사 중 최고 선임으로서 부대를 이끄는 역할 (남은 기간)',
    responsibilities: ['부대 운영 보조', '후임병 관리', '각종 행사 주관'],
    tips: ['원활한 부대 운영', '후임병 멘토링', '전역 준비'],
  },
  '1호봉': {
    description: '사회복무요원 초기 단계, 기본 직무교육 이수 후 복무기관 배치 (6개월)',
    responsibilities: ['기본 행정업무 보조', '민원 응대', '시설 관리 보조'],
    tips: ['복무기관 규정 숙지', '민원인 응대 예절', '업무 파악'],
  },
  '2호봉': {
    description: '기본적인 업무를 독자적으로 수행할 수 있는 단계 (6개월)',
    responsibilities: ['행정업무 처리', '시설 관리', '민원 업무 처리'],
    tips: ['책임감 있는 업무 수행', '업무 효율성 향상', '친절한 민원 응대'],
  },
  '3호봉': {
    description: '복무기관의 중추적인 역할을 수행하는 단계 (6개월)',
    responsibilities: ['주요 업무 수행', '신규 배치자 교육', '업무 개선 제안'],
    tips: ['업무 전문성 향상', '원활한 의사소통', '적극적인 업무 태도'],
  },
  '4호봉': {
    description: '사회복무요원 최고 호봉으로서 복무기관을 이끄는 역할 (남은 기간)',
    responsibilities: ['복무기관 운영 보조', '업무 조정', '신규 배치자 관리'],
    tips: ['복무기관 발전 기여', '효율적인 업무 관리', '전역 준비'],
  },
  '민간인': {
    description: '전역한 상태',
    responsibilities: ['해당 없음'],
    tips: ['해당 없음'],
  },
} as const;

export type ServiceType = keyof typeof RANKS;
export type RankType = typeof RANKS[ServiceType][number];
export type PayGradeKey = `${RankType}-${number}`;