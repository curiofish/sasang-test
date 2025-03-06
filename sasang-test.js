// 체질 정보 데이터
const constitutionData = {
    taeyang: {
        name: "태양인",
        trait: "적극적이고 진취적인 성격의 소유자로, 상체가 발달하고 하체가 약한 체형을 가집니다. 리더십이 강하고 의지력이 뛰어나며, 새로운 도전을 즐기는 성향이 있습니다.",
        sasangTraitDetails: "태양인은 상체가 발달하고 하체가 약한 체형을 가집니다. 적극적이고 진취적인 성격으로, 리더십이 강하고 의지력이 뛰어납니다. 새로운 도전을 즐기며, 창의적이고 독창적인 사고를 합니다. 감정 표현이 풍부하고 예술적 감각이 뛰어납니다.",
        sasangHealthPrinciples: "1. 하체 강화에 중점을 둔 운동\n2. 충분한 휴식과 수면\n3. 상체 통증 예방을 위한 자세 관리\n4. 스트레스 관리와 감정 조절\n5. 규칙적인 식사와 소식",
        sasangWeaknesses: "1. 과로로 인한 피로\n2. 상체 통증과 근육 긴장\n3. 감정적 불안정성\n4. 과도한 스트레스\n5. 불규칙한 생활습관",
        sasangStrengths: "1. 강한 의지력과 추진력\n2. 뛰어난 리더십\n3. 창의적 사고\n4. 적극적인 성격\n5. 예술적 감각",
        
        // 식이요법
        recommendedFood: "채소류, 과일, 해조류, 생선, 닭고기",
        avoidFood: "기름진 음식, 과도한 육류, 매운 음식",
        avoidFoodDetails: "1. 기름진 음식: 튀김류, 지방이 많은 육류\n2. 과도한 육류: 소고기, 돼지고기\n3. 매운 음식: 고추, 후추, 겨자\n4. 알코올: 특히 강한 술\n5. 가공식품: 인스턴트 식품, 패스트푸드",
        seasonalFood: "봄: 신선한 채소와 과일\n여름: 수분이 많은 과일과 채소\n가을: 영양가 높은 해조류\n겨울: 따뜻한 음식과 생선",
        mealTiming: "1. 아침: 가벼운 식사\n2. 점심: 영양가 있는 식사\n3. 저녁: 소식\n4. 과식 피하기\n5. 규칙적인 식사 시간",
        
        // 한의학 치료
        herbalMedicine: "인삼, 홍삼, 대추, 구기자, 오미자",
        medicineEffects: "1. 인삼: 기력 회복, 면역력 강화\n2. 홍삼: 혈액순환 개선\n3. 대추: 소화 촉진\n4. 구기자: 간 기능 강화\n5. 오미자: 스트레스 해소",
        medicinePrecautions: "1. 과다 복용 금지\n2. 복용 시간 준수\n3. 알레르기 체크\n4. 다른 약과의 상호작용 주의\n5. 전문의 상담 필요",
        seasonalMedicine: "봄: 면역력 강화 약재\n여름: 소화 촉진 약재\n가을: 호흡기 강화 약재\n겨울: 보온 약재",
        
        // 운동 가이드
        recommendedExercise: "하체 강화 운동, 스트레칭, 요가",
        exerciseIntensity: "1. 하루 30-40분 운동\n2. 주 3-4회 실시\n3. 점진적 강도 증가\n4. 충분한 스트레칭\n5. 과도한 운동 피하기",
        seasonalExercise: "봄: 하체 강화 운동\n여름: 수영과 스트레칭\n가을: 산책과 요가\n겨울: 실내 운동",
        exercisePrecautions: "1. 상체 통증 주의\n2. 과도한 운동 피하기\n3. 충분한 스트레칭\n4. 적절한 휴식\n5. 자세 관리",
        
        // 생활 관리
        dailyLifeTips: "1. 규칙적인 생활습관\n2. 충분한 휴식\n3. 자세 관리\n4. 스트레스 관리\n5. 적절한 운동",
        sleepManagement: "1. 취침 전 스트레칭\n2. 따뜻한 목욕\n3. 규칙적인 수면 시간\n4. 편안한 환경\n5. 충분한 수면 시간",
        stressManagement: "1. 명상과 호흡 운동\n2. 가벼운 산책\n3. 요가\n4. 취미 활동\n5. 대화와 소통",
        seasonalHealth: "봄: 하체 강화 운동\n여름: 충분한 수분 섭취\n가을: 스트레칭 강화\n겨울: 따뜻한 환경 유지",
        
        // 취미와 활동
        recommendedHobbies: "요가, 등산, 수영, 독서, 음악 감상",
        suitableJobs: "1. 리더십이 필요한 직무\n2. 창의적인 직무\n3. 예술 관련 직무\n4. 교육자\n5. 기업가",
        relationshipStyle: "1. 적극적인 소통\n2. 리더십 발휘\n3. 감정 표현이 풍부\n4. 새로운 도전 선호\n5. 독립적인 성향",
        
        // 정신 건강
        meditationYoga: "1. 호흡 명상\n2. 하타 요가\n3. 스트레칭 중심의 요가\n4. 정적 명상\n5. 마음 챙김",
        aromatherapy: "라벤더, 로즈마리, 레몬, 유칼립투스",
        emotionManagement: "1. 감정 표현하기\n2. 스트레스 해소\n3. 명상과 요가\n4. 취미 활동\n5. 대화와 소통"
    },
    taeeum: {
        name: "태음인",
        trait: "신중하고 보수적인 성격의 소유자로, 하체가 발달하고 상체가 약한 체형을 가집니다. 안정적인 성향과 꾸준한 성실함이 특징입니다.",
        sasangTraitDetails: "태음인은 하체가 발달하고 상체가 약한 체형을 가집니다. 신중하고 보수적인 성격으로, 안정적인 성향과 꾸준한 성실함이 특징입니다. 체계적이고 계획적인 생활을 선호하며, 신중한 판단력이 뛰어납니다.",
        sasangHealthPrinciples: "1. 상체 강화 운동\n2. 소화 촉진을 위한 식사 관리\n3. 하체 관리와 혈액순환 개선\n4. 규칙적인 운동과 활동\n5. 스트레스 관리",
        sasangWeaknesses: "1. 소화 불량\n2. 하체 무거움\n3. 과체중 경향\n4. 운동 부족\n5. 스트레스성 질환",
        sasangStrengths: "1. 안정적인 성격\n2. 뛰어난 인내심\n3. 체계적인 생활습관\n4. 신중한 판단력\n5. 꾸준한 성실함",
        
        // 식이요법
        recommendedFood: "곡물류, 채소, 과일, 생선",
        avoidFood: "과도한 육류, 기름진 음식, 과식",
        avoidFoodDetails: "1. 과도한 육류: 특히 지방이 많은 육류\n2. 기름진 음식: 튀김류, 고지방 식품\n3. 과식: 한 번에 많은 양의 음식\n4. 차가운 음식: 아이스크림, 냉면\n5. 가공식품: 인스턴트 식품, 패스트푸드",
        seasonalFood: "봄: 신선한 채소\n여름: 소화가 잘 되는 음식\n가을: 영양가 있는 곡물\n겨울: 따뜻한 음식",
        mealTiming: "1. 규칙적인 식사 시간\n2. 소식 위주\n3. 천천히 씹기\n4. 과식 피하기\n5. 식사 후 가벼운 산책",
        
        // 한의학 치료
        herbalMedicine: "대추, 생강, 구기자, 오미자, 홍삼",
        medicineEffects: "1. 대추: 소화 촉진\n2. 생강: 체온 유지\n3. 구기자: 면역력 강화\n4. 오미자: 스트레스 해소\n5. 홍삼: 기력 회복",
        medicinePrecautions: "1. 소화 상태 확인\n2. 복용 시간 준수\n3. 알레르기 체크\n4. 다른 약과의 상호작용 주의\n5. 전문의 상담 필요",
        seasonalMedicine: "봄: 소화 촉진 약재\n여름: 체온 조절 약재\n가을: 면역력 강화 약재\n겨울: 보온 약재",
        
        // 운동 가이드
        recommendedExercise: "상체 강화 운동, 걷기, 수영",
        exerciseIntensity: "1. 하루 20-30분 운동\n2. 주 3-4회 실시\n3. 점진적 강도 증가\n4. 충분한 스트레칭\n5. 과도한 운동 피하기",
        seasonalExercise: "봄: 상체 강화 운동\n여름: 수영\n가을: 산책\n겨울: 실내 운동",
        exercisePrecautions: "1. 하체 무거움 주의\n2. 과도한 운동 피하기\n3. 충분한 스트레칭\n4. 적절한 휴식\n5. 자세 관리",
        
        // 생활 관리
        dailyLifeTips: "1. 규칙적인 생활습관\n2. 소화 관리\n3. 운동 습관화\n4. 스트레스 관리\n5. 충분한 휴식",
        sleepManagement: "1. 규칙적인 식사 시간\n2. 취침 전 가벼운 운동\n3. 따뜻한 발 목욕\n4. 편안한 환경\n5. 충분한 수면 시간",
        stressManagement: "1. 산책\n2. 가벼운 운동\n3. 독서\n4. 음악 감상\n5. 취미 활동",
        seasonalHealth: "봄: 상체 강화 운동\n여름: 소화 촉진 식단\n가을: 하체 관리\n겨울: 따뜻한 식단",
        
        // 취미와 활동
        recommendedHobbies: "산책, 독서, 원예, 수영, 요리",
        suitableJobs: "1. 안정적인 직무\n2. 계획 수립이 필요한 직무\n3. 연구직\n4. 행정직\n5. 교육자",
        relationshipStyle: "1. 신중한 소통\n2. 안정적인 관계\n3. 체계적인 접근\n4. 신뢰감 형성\n5. 꾸준한 관계 유지",
        
        // 정신 건강
        meditationYoga: "1. 호흡 명상\n2. 부드러운 요가\n3. 스트레칭\n4. 정적 명상\n5. 마음 챙김",
        aromatherapy: "라벤더, 카모마일, 로즈, 제라늄",
        emotionManagement: "1. 안정적인 감정 관리\n2. 스트레스 해소\n3. 취미 활동\n4. 대화와 소통\n5. 규칙적인 운동"
    },
    soyang: {
        name: "소양인",
        trait: "활발하고 긍정적인 성격의 소유자로, 근골이 발달하고 근육이 단단한 체형을 가집니다. 적응력이 좋고 활동적인 성향이 특징입니다.",
        sasangTraitDetails: "소양인은 근골이 발달하고 근육이 단단한 체형을 가집니다. 활발하고 긍정적인 성격으로, 적응력이 좋고 활동적인 성향이 특징입니다. 사회성이 뛰어나고 친화적이며, 새로운 환경에 잘 적응합니다.",
        sasangHealthPrinciples: "1. 규칙적인 운동\n2. 근육 관리와 스트레칭\n3. 충분한 수분 섭취\n4. 스트레스 해소\n5. 균형 잡힌 식사",
        sasangWeaknesses: "1. 근육통\n2. 과도한 활동\n3. 스트레스성 질환\n4. 불규칙한 식사\n5. 과로",
        sasangStrengths: "1. 뛰어난 적응력\n2. 강한 체력\n3. 긍정적인 성격\n4. 뛰어난 사회성\n5. 활동적인 성향",
        
        // 식이요법
        recommendedFood: "육류, 생선, 채소, 과일",
        avoidFood: "과도한 매운 음식, 알코올",
        avoidFoodDetails: "1. 과도한 매운 음식: 고추, 후추, 겨자\n2. 알코올: 특히 강한 술\n3. 기름진 음식: 튀김류, 고지방 식품\n4. 가공식품: 인스턴트 식품\n5. 과도한 카페인",
        seasonalFood: "봄: 신선한 채소와 과일\n여름: 수분이 많은 과일\n가을: 영양가 있는 육류\n겨울: 따뜻한 음식",
        mealTiming: "1. 규칙적인 식사 시간\n2. 충분한 수분 섭취\n3. 균형 잡힌 식사\n4. 과식 피하기\n5. 식사 후 휴식",
        
        // 한의학 치료
        herbalMedicine: "홍삼, 인삼, 구기자, 오미자, 대추",
        medicineEffects: "1. 홍삼: 기력 회복\n2. 인삼: 면역력 강화\n3. 구기자: 간 기능 강화\n4. 오미자: 스트레스 해소\n5. 대추: 소화 촉진",
        medicinePrecautions: "1. 과다 복용 금지\n2. 복용 시간 준수\n3. 알레르기 체크\n4. 다른 약과의 상호작용 주의\n5. 전문의 상담 필요",
        seasonalMedicine: "봄: 면역력 강화 약재\n여름: 수분 보충 약재\n가을: 근력 강화 약재\n겨울: 보온 약재",
        
        // 운동 가이드
        recommendedExercise: "유산소 운동, 근력 운동, 스트레칭",
        exerciseIntensity: "1. 하루 40-50분 운동\n2. 주 4-5회 실시\n3. 점진적 강도 증가\n4. 충분한 스트레칭\n5. 과도한 운동 주의",
        seasonalExercise: "봄: 유산소 운동\n여름: 수영\n가을: 근력 운동\n겨울: 스트레칭",
        exercisePrecautions: "1. 근육통 주의\n2. 과도한 운동 피하기\n3. 충분한 스트레칭\n4. 적절한 휴식\n5. 자세 관리",
        
        // 생활 관리
        dailyLifeTips: "1. 규칙적인 생활습관\n2. 운동 습관화\n3. 스트레스 관리\n4. 충분한 휴식\n5. 균형 잡힌 식사",
        sleepManagement: "1. 취침 전 스트레칭\n2. 규칙적인 운동\n3. 편안한 환경\n4. 충분한 수면 시간\n5. 과도한 활동 피하기",
        stressManagement: "1. 운동\n2. 명상\n3. 요가\n4. 산책\n5. 취미 활동",
        seasonalHealth: "봄: 유산소 운동\n여름: 수분 섭취\n가을: 근력 운동\n겨울: 스트레칭",
        
        // 취미와 활동
        recommendedHobbies: "운동, 등산, 수영, 요가, 독서",
        suitableJobs: "1. 활동적인 직무\n2. 대외 업무\n3. 스포츠 관련 직무\n4. 교육자\n5. 서비스직",
        relationshipStyle: "1. 적극적인 소통\n2. 친화적인 관계\n3. 새로운 도전 선호\n4. 긍정적인 관계\n5. 활동적인 교류",
        
        // 정신 건강
        meditationYoga: "1. 동적 명상\n2. 파워 요가\n3. 스트레칭\n4. 호흡 명상\n5. 마음 챙김",
        aromatherapy: "로즈마리, 유칼립투스, 레몬, 페퍼민트",
        emotionManagement: "1. 운동을 통한 스트레스 해소\n2. 명상과 요가\n3. 취미 활동\n4. 대화와 소통\n5. 긍정적 사고"
    },
    soeum: {
        name: "소음인",
        trait: "섬세하고 예술적인 성격의 소유자로, 근육이 부드럽고 피부가 연한 체형을 가집니다. 감수성이 풍부하고 창의적인 성향이 특징입니다.",
        sasangTraitDetails: "소음인은 근육이 부드럽고 피부가 연한 체형을 가집니다. 섬세하고 예술적인 성격으로, 감수성이 풍부하고 창의적인 성향이 특징입니다. 내성적이고 신중하며, 예술적 감각이 뛰어납니다.",
        sasangHealthPrinciples: "1. 따뜻한 환경 유지\n2. 충분한 휴식\n3. 가벼운 운동\n4. 스트레스 관리\n5. 규칙적인 생활습관",
        sasangWeaknesses: "1. 추위에 약함\n2. 피로도가 높음\n3. 소화력이 약함\n4. 스트레스에 취약\n5. 불규칙한 생활",
        sasangStrengths: "1. 뛰어난 예술적 감각\n2. 섬세한 감수성\n3. 창의적인 사고\n4. 신중한 성격\n5. 깊은 통찰력",
        
        // 식이요법
        recommendedFood: "채소, 과일, 생선, 해조류",
        avoidFood: "기름진 음식, 과도한 육류, 차가운 음식",
        avoidFoodDetails: "1. 기름진 음식: 튀김류, 고지방 식품\n2. 과도한 육류: 특히 지방이 많은 육류\n3. 차가운 음식: 아이스크림, 냉면\n4. 가공식품: 인스턴트 식품\n5. 과도한 카페인",
        seasonalFood: "봄: 따뜻한 음식\n여름: 소화가 잘 되는 음식\n가을: 영양가 있는 해조류\n겨울: 따뜻한 음식",
        mealTiming: "1. 규칙적인 식사 시간\n2. 따뜻한 음식 위주\n3. 천천히 씹기\n4. 과식 피하기\n5. 식사 후 휴식",
        
        // 한의학 치료
        herbalMedicine: "대추, 생강, 구기자, 오미자, 홍삼",
        medicineEffects: "1. 대추: 소화 촉진\n2. 생강: 체온 유지\n3. 구기자: 면역력 강화\n4. 오미자: 스트레스 해소\n5. 홍삼: 기력 회복",
        medicinePrecautions: "1. 소화 상태 확인\n2. 복용 시간 준수\n3. 알레르기 체크\n4. 다른 약과의 상호작용 주의\n5. 전문의 상담 필요",
        seasonalMedicine: "봄: 면역력 강화 약재\n여름: 소화 촉진 약재\n가을: 보온 약재\n겨울: 체온 유지 약재",
        
        // 운동 가이드
        recommendedExercise: "가벼운 산책, 요가, 스트레칭",
        exerciseIntensity: "1. 하루 20-30분 운동\n2. 주 3-4회 실시\n3. 점진적 강도 증가\n4. 충분한 스트레칭\n5. 과도한 운동 피하기",
        seasonalExercise: "봄: 가벼운 산책\n여름: 실내 운동\n가을: 요가\n겨울: 스트레칭",
        exercisePrecautions: "1. 추위 주의\n2. 과도한 운동 피하기\n3. 충분한 스트레칭\n4. 적절한 휴식\n5. 자세 관리",
        
        // 생활 관리
        dailyLifeTips: "1. 따뜻한 환경 유지\n2. 규칙적인 생활습관\n3. 충분한 휴식\n4. 스트레스 관리\n5. 가벼운 운동",
        sleepManagement: "1. 따뜻한 목욕\n2. 규칙적인 수면 시간\n3. 편안한 환경\n4. 충분한 수면 시간\n5. 과도한 활동 피하기",
        stressManagement: "1. 명상\n2. 요가\n3. 산책\n4. 음악 감상\n5. 취미 활동",
        seasonalHealth: "봄: 가벼운 운동\n여름: 따뜻한 식단\n가을: 보온 관리\n겨울: 따뜻한 환경",
        
        // 취미와 활동
        recommendedHobbies: "요가, 독서, 음악 감상, 원예, 미술",
        suitableJobs: "1. 예술 관련 직무\n2. 연구직\n3. 교육자\n4. 디자이너\n5. 작가",
        relationshipStyle: "1. 신중한 소통\n2. 깊이 있는 관계\n3. 예술적 교류\n4. 안정적인 관계\n5. 감정적 교류",
        
        // 정신 건강
        meditationYoga: "1. 호흡 명상\n2. 부드러운 요가\n3. 스트레칭\n4. 정적 명상\n5. 마음 챙김",
        aromatherapy: "라벤더, 카모마일, 로즈, 제라늄",
        emotionManagement: "1. 예술 활동\n2. 명상과 요가\n3. 취미 활동\n4. 대화와 소통\n5. 감정 표현"
    }
};

let currentQuestion = 0;
let answers = [];

// 질문 데이터 추가
const questions = [
    {
        type: "body",
        question: "1. 당신의 체형은 어떤가요?",
        options: [
            { value: "taeyang", text: "상체가 발달하고 하체가 약한 편이에요." },
            { value: "taeeum", text: "하체가 발달하고 상체가 약한 편이에요." },
            { value: "soyang", text: "근골이 발달하고 근육이 단단한 편이에요." },
            { value: "soeum", text: "근육이 부드럽고 피부가 연한 편이에요." }
        ]
    },
    {
        type: "personality",
        question: "2. 당신의 성격은 어떤가요?",
        options: [
            { value: "taeyang", text: "적극적이고 진취적이며 리더십이 강해요." },
            { value: "taeeum", text: "신중하고 보수적이며 안정적인 성향이에요." },
            { value: "soyang", text: "활발하고 긍정적이며 적응력이 좋아요." },
            { value: "soeum", text: "섬세하고 예술적이며 감수성이 풍부해요." }
        ]
    },
    {
        type: "health",
        question: "3. 평소 건강 상태는 어떤가요?",
        options: [
            { value: "taeyang", text: "과로하면 쉽게 지치고, 상체 통증이 자주 있어요." },
            { value: "taeeum", text: "소화가 잘 안되고, 하체가 자주 무거워요." },
            { value: "soyang", text: "활동량이 많아도 잘 견디고, 근육통이 자주 있어요." },
            { value: "soeum", text: "추위를 잘 타고, 피로를 잘 느끼는 편이에요." }
        ]
    },
    {
        type: "diet",
        question: "4. 식사 습관은 어떤가요?",
        options: [
            { value: "taeyang", text: "불규칙적이고, 매운 음식을 좋아해요." },
            { value: "taeeum", text: "규칙적이고, 소화가 잘 되는 음식을 선호해요." },
            { value: "soyang", text: "활동량이 많아서 많이 먹고, 육류를 좋아해요." },
            { value: "soeum", text: "소식 위주이고, 따뜻한 음식을 선호해요." }
        ]
    },
    {
        type: "sleep",
        question: "5. 수면 패턴은 어떤가요?",
        options: [
            { value: "taeyang", text: "불규칙적이고, 잠이 잘 안 오는 편이에요." },
            { value: "taeeum", text: "규칙적이고, 깊은 잠을 자는 편이에요." },
            { value: "soyang", text: "활동량이 많아서 피곤하면 바로 잠이 들어요." },
            { value: "soeum", text: "잠이 많고, 피로를 잘 느끼는 편이에요." }
        ]
    },
    {
        type: "stress",
        question: "6. 스트레스 해소 방법은 어떤가요?",
        options: [
            { value: "taeyang", text: "활동적인 운동이나 새로운 도전으로 해소해요." },
            { value: "taeeum", text: "안정적인 취미나 규칙적인 생활로 해소해요." },
            { value: "soyang", text: "친구들과 어울리거나 운동으로 해소해요." },
            { value: "soeum", text: "조용한 취미나 명상으로 해소해요." }
        ]
    }
];

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 초기 상태 설정
    document.getElementById('result').style.display = 'none';
    
    // 다시 테스트하기 버튼 이벤트 리스너
    const restartBtn = document.getElementById('restart');
    if (restartBtn) {
        restartBtn.addEventListener('click', goToHome);
    }
    
    // 위로 가기 버튼 이벤트 리스너
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 자동으로 테스트 시작
    startTest();
});

// 테스트 시작 함수
function startTest() {
    currentQuestion = 0;
    answers = [];
    document.querySelector('.guide-container').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion(0);
    updateProgressBar();
}

// 진행 상태 표시 함수
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.innerHTML = `
        <div class="progress" style="width: ${progress}%"></div>
        <div class="progress-text">질문 ${currentQuestion + 1}/${questions.length}</div>
    `;
    
    const existingProgress = document.querySelector('.progress-bar');
    if (existingProgress) {
        existingProgress.remove();
    }
    
    document.querySelector('.test-container').insertBefore(progressBar, document.querySelector('.questions-container'));
}

// 질문 표시 함수 수정
function showQuestion(index) {
    const questionsContainer = document.querySelector('.questions-container');
    questionsContainer.innerHTML = '';
    
    const question = questions[index];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';
    questionDiv.innerHTML = `
        <h3>${question.question}</h3>
        <div class="options">
            ${question.options.map(option => `
                <button class="option-btn" data-value="${option.value}">${option.text}</button>
            `).join('')}
        </div>
    `;
    
    questionsContainer.appendChild(questionDiv);
    updateProgressBar();
    
    // 이벤트 리스너 다시 추가
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            answers.push(value);
            
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion(currentQuestion);
            } else {
                showResult();
            }
        });
    });
}

// 결과 표시 함수
function showResult() {
    const testContainer = document.getElementById('test-container');
    const resultContainer = document.getElementById('result');
    
    testContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // 가장 많이 선택된 체질 결정
    const constitution = determineConstitution(answers);
    const data = constitutionData[constitution];
    
    // 결과 표시
    document.getElementById('constitution-type').textContent = data.name;
    document.getElementById('constitution-trait').textContent = data.trait;
    document.getElementById('sasang-trait-details').textContent = data.sasangTraitDetails;
    document.getElementById('sasang-health-principles').textContent = data.sasangHealthPrinciples;
    document.getElementById('sasang-weaknesses').textContent = data.sasangWeaknesses;
    document.getElementById('sasang-strengths').textContent = data.sasangStrengths;
    
    // 식이요법
    document.getElementById('recommended-food').textContent = data.recommendedFood;
    document.getElementById('avoid-food').textContent = data.avoidFood;
    document.getElementById('avoid-food-details').textContent = data.avoidFoodDetails;
    document.getElementById('seasonal-food').textContent = data.seasonalFood;
    document.getElementById('meal-timing').textContent = data.mealTiming;
    
    // 한의학 치료
    document.getElementById('herbal-medicine').textContent = data.herbalMedicine;
    document.getElementById('medicine-effects').textContent = data.medicineEffects;
    document.getElementById('medicine-precautions').textContent = data.medicinePrecautions;
    document.getElementById('seasonal-medicine').textContent = data.seasonalMedicine;
    
    // 운동 가이드
    document.getElementById('recommended-exercise').textContent = data.recommendedExercise;
    document.getElementById('exercise-intensity').textContent = data.exerciseIntensity;
    document.getElementById('seasonal-exercise').textContent = data.seasonalExercise;
    document.getElementById('exercise-precautions').textContent = data.exercisePrecautions;
    
    // 생활 관리
    document.getElementById('daily-life-tips').textContent = data.dailyLifeTips;
    document.getElementById('sleep-management').textContent = data.sleepManagement;
    document.getElementById('stress-management').textContent = data.stressManagement;
    document.getElementById('seasonal-health').textContent = data.seasonalHealth;
    
    // 취미와 활동
    document.getElementById('recommended-hobbies').textContent = data.recommendedHobbies;
    document.getElementById('suitable-jobs').textContent = data.suitableJobs;
    document.getElementById('relationship-style').textContent = data.relationshipStyle;
    
    // 정신 건강
    document.getElementById('meditation-yoga').textContent = data.meditationYoga;
    document.getElementById('aromatherapy').textContent = data.aromatherapy;
    document.getElementById('emotion-management').textContent = data.emotionManagement;
}

// 체질 결정 함수
function determineConstitution(answers) {
    const counts = {
        taeyang: 0,
        taeeum: 0,
        soyang: 0,
        soeum: 0
    };
    
    answers.forEach(answer => {
        counts[answer]++;
    });
    
    // 가장 많이 선택된 체질 반환
    return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}

// 홈으로 돌아가기
function goToHome() {
    currentQuestion = 0;
    answers = [];
    document.querySelector('.guide-container').style.display = 'block';
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

// PDF 저장 함수
function saveToPDF() {
    const element = document.getElementById('result');
    const constitutionType = document.getElementById('constitution-type').textContent;
    
    // PDF 저장 버튼 숨기기
    const savePdfBtn = document.querySelector('.save-pdf-btn');
    savePdfBtn.style.display = 'none';
    
    const opt = {
        margin: 1,
        filename: `사상의학_체질테스트_결과_${constitutionType}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: true
        },
        jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // PDF 생성 전에 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);

    // PDF 생성
    html2pdf().set(opt).from(element).save().then(() => {
        // PDF 생성 완료 후 저장 버튼 다시 표시
        savePdfBtn.style.display = 'block';
    }).catch(error => {
        console.error('PDF 생성 중 오류가 발생했습니다:', error);
        alert('PDF 저장 중 오류가 발생했습니다. 다시 시도해 주세요.');
        // 에러 발생 시에도 저장 버튼 다시 표시
        savePdfBtn.style.display = 'block';
    });
} 