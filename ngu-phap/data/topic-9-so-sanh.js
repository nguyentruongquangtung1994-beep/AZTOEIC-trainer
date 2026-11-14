window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['so-sanh'] = {
  id: 'so-sanh',
  order: 9,
  title: 'Câu So Sánh',
  subtitle: 'Comparison',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6 (dựa trên các cấu trúc bẫy phổ biến nhất)',
  sourceTheory: 'AZ Grammar 2022 (nội bộ AZEnglish)',

  theory: [
    {
      group: 'Phân loại tính từ & 3 cấp so sánh cơ bản',
      tip: [
        'Tính từ ngắn (1 âm tiết, hoặc 2 âm tiết kết thúc bằng "y"): so sánh hơn thêm "-er", so sánh nhất thêm "the -est". Ví dụ: high→higher→the highest, early→earlier→the earliest.',
        'Tính từ dài (từ 2 âm tiết trở lên, không kết thúc bằng "y"): so sánh hơn dùng "more + adj", so sánh nhất dùng "the most + adj". Ví dụ: efficient→more efficient→the most efficient.',
        'So sánh ngang bằng: "S + be/V + as + adj/adv (nguyên thể) + as". Phủ định: "not as/so + adj + as".',
        'Tính từ/trạng từ bất quy tắc cần nhớ: good/well→better→the best, bad→worse→the worst, far→farther/further→the farthest/furthest, little→less→the least, many/much→more→the most.'
      ]
    },
    {
      group: 'So sánh nâng cao & dấu hiệu nhận biết',
      tip: [
        'So sánh gấp bội: "twice/three times/four times + as + adj + as" (gấp đôi/ba/bốn lần).',
        'So sánh kép (càng...càng...): "The + so sánh hơn + S + V, the + so sánh hơn + S + V". Ví dụ: The more you practice, the better you become.',
        'Tăng dần theo thời gian (ngày càng...): tính từ ngắn lặp "-er and -er" (bigger and bigger), tính từ dài dùng "more and more + adj".',
        'Chỉ so sánh giữa HAI đối tượng ("of the two", "between the two") → dùng so sánh HƠN, KHÔNG dùng so sánh nhất dù nghĩa tiếng Việt có thể dịch là "nhất".',
        'So sánh giữa từ BA đối tượng trở lên ("of all", "among all", "in the department/company") → dùng so sánh NHẤT, luôn có "the" đứng trước.',
        'Cấu trúc "one of the + so sánh nhất + N số nhiều" (một trong những... nhất) — danh từ theo sau luôn ở dạng số nhiều.',
        'Trạng từ nhấn mạnh mức độ chênh lệch (far/much/a lot/considerably/significantly) chỉ đứng trước so sánh HƠN/NHẤT, không đứng trực tiếp trước tính từ nguyên thể. "Very" KHÔNG được dùng với so sánh hơn.',
        '"Lately" (gần đây, trạng từ chỉ thời gian) dễ nhầm với "later" (so sánh hơn của "late") — hai từ khác nghĩa hoàn toàn dù nhìn giống nhau.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'ss-1', title: '1. So sánh ngang bằng, hơn, nhất & so sánh gấp bội/kép',
      items: [
        {q:"This year's sales figures are ------ than last year's.", choices:['higher','high','highest','more high'], correct:0, explain:'Dịch: Doanh số năm nay cao hơn năm ngoái. — So sánh hơn với tính từ ngắn "high" (1 âm tiết) → thêm "-er": "higher than". Mẹo thêm: không dùng "more" trước tính từ ngắn — "more high" là lỗi sai phổ biến.'},
        {q:'The new software is ------ than the previous version.', choices:['more efficient','efficienter','most efficient','more efficiently'], correct:0, explain:'Dịch: Phần mềm mới hiệu quả hơn phiên bản trước. — Tính từ dài "efficient" (3 âm tiết) dùng "more + adj" để so sánh hơn, không thêm đuôi "-er". Mẹo thêm: phân biệt với đáp án gây nhiễu "more efficiently" (trạng từ) — sau "is" cần tính từ, không phải trạng từ.'},
        {q:'Of all the candidates, Mr. Tran has ------ experience.', choices:['the most','the more','most','more'], correct:0, explain:'Dịch: Trong số tất cả ứng viên, ông Trần có nhiều kinh nghiệm nhất. — So sánh nhất với danh từ không đếm được "experience" dùng "the most". Mẹo thêm: cụm "of all the + N" là dấu hiệu nhận biết so sánh NHẤT (từ 3 đối tượng trở lên), luôn có "the" đứng trước.'},
        {q:'Please try to arrive as ------ as possible to avoid missing the opening remarks.', choices:['early','earlier','earliest','more early'], correct:0, explain:'Dịch: Vui lòng cố gắng đến càng sớm càng tốt để không bỏ lỡ phần phát biểu khai mạc. — Cấu trúc "as + adj/adv (nguyên thể) + as possible" (càng...càng tốt) luôn dùng dạng nguyên thể, không chia so sánh hơn/nhất. Mẹo thêm: "as soon as possible", "as much as possible" đều theo mẫu này — rất hay gặp trong email/thông báo TOEIC.'},
        {q:'Customer satisfaction this quarter is not as ------ as we had hoped.', choices:['high','higher','highest','highly'], correct:0, explain:'Dịch: Mức độ hài lòng của khách hàng quý này không cao như chúng tôi mong đợi. — "not as + adj (nguyên thể) + as" diễn tả so sánh ngang bằng ở dạng phủ định (không bằng). Mẹo thêm: giữa 2 "as" luôn là tính từ/trạng từ ở dạng NGUYÊN THỂ, không chia so sánh hơn.'},
        {q:'This is by far the ------ decision the board has ever made.', choices:['worst','worse','bad','more bad'], correct:0, explain:'Dịch: Đây là quyết định tệ nhất mà hội đồng quản trị từng đưa ra. — "bad" là tính từ bất quy tắc: bad → worse (hơn) → the worst (nhất). Mẹo thêm: "by far + so sánh nhất" nhấn mạnh "vượt trội hẳn" — cụm này là dấu hiệu chắc chắn của câu so sánh nhất.'},
        {q:'Employees who arrive early tend to be ------ productive than those who arrive late.', choices:['more','most','much','very'], correct:0, explain:'Dịch: Nhân viên đến sớm có xu hướng làm việc hiệu quả hơn những người đến muộn. — "productive" là tính từ dài, so sánh hơn cần "more + adj + than". Mẹo thêm: "much/very" không tự tạo thành so sánh hơn nếu thiếu "than" — chỉ "more...than" mới đúng cấu trúc so sánh hơn.'},
        {q:'The farther you travel from the city center, the ------ the rent becomes.', choices:['cheaper','cheap','cheapest','more cheap'], correct:0, explain:'Dịch: Càng đi xa trung tâm thành phố, tiền thuê nhà càng rẻ. — Cấu trúc so sánh kép "The + so sánh hơn + S + V, the + so sánh hơn + S + V" (càng...càng...) — vế sau cần "the cheaper" (tính từ ngắn thêm -er). Mẹo thêm: cả 2 vế của câu so sánh kép đều bắt đầu bằng "the" + dạng so sánh hơn, không phải so sánh nhất.'},
        {q:'As the company grows, its logistics needs become ------ and more complex.', choices:['more','most','much','the most'], correct:0, explain:'Dịch: Khi công ty phát triển, nhu cầu về hậu cần trở nên ngày càng phức tạp hơn. — "more and more + adj" (ngày càng...) diễn tả xu hướng tăng dần theo thời gian, dùng với tính từ dài. Mẹo thêm: với tính từ ngắn dùng dạng lặp "-er and -er" (ví dụ: "bigger and bigger").'},
        {q:'The new factory can produce ------ as many units as the old one.', choices:['twice','two','double','twofold'], correct:0, explain:'Dịch: Nhà máy mới có thể sản xuất gấp đôi số lượng sản phẩm so với nhà máy cũ. — So sánh gấp bội dùng "twice/three times/four times + as + adj/adv + as". Mẹo thêm: "twice" đứng riêng trước "as...as", trong khi "double" thường dùng như động từ/tính từ (double the amount), không đặt trực tiếp theo cách này.'},
        {"q": "The new office is ------- than the old one.", "choices": ["larger", "largest", "large", "more large"], "correct": 0, "explain": "Dịch: Văn phòng mới rộng hơn văn phòng cũ. — Tính từ ngắn + \"than\" → -er."},
        {"q": "This is the ------- hotel in the city.", "choices": ["most expensive", "more expensive", "expensivest", "expensive"], "correct": 0, "explain": "Dịch: Đây là khách sạn đắt nhất thành phố. — Tính từ dài, so sánh nhất → the most + adj."},
        {"q": "Our prices are as ------- as our competitors'.", "choices": ["low", "lower", "lowest", "more low"], "correct": 0, "explain": "Dịch: Giá của chúng tôi thấp ngang đối thủ. — \"as + adj nguyên dạng + as\"."},
        {"q": "The second test was ------- than the first.", "choices": ["more difficult", "difficulter", "most difficult", "difficult"], "correct": 0, "explain": "Dịch: Bài kiểm tra thứ hai khó hơn bài đầu. — Tính từ dài → more + adj + than."},
        {"q": "Ms. Lee is the ------- employee in the department.", "choices": ["hardest-working", "harder-working", "hard-working most", "more hard-working"], "correct": 0, "explain": "Dịch: Bà Lee là nhân viên chăm chỉ nhất phòng. — So sánh nhất của tính từ ghép \"hard-working\" → hardest-working."},
        {"q": "Sales this year are three times ------- than last year.", "choices": ["higher", "high", "highest", "more high"], "correct": 0, "explain": "Dịch: Doanh số năm nay cao gấp ba năm ngoái. — \"three times + so sánh hơn + than\" (hoặc three times as high as)."},
        {"q": "The ------- you practice, the better you become.", "choices": ["more", "most", "much", "many"], "correct": 0, "explain": "Dịch: Càng luyện nhiều bạn càng giỏi. — So sánh kép \"The more …, the better …\"."},
        {"q": "This model is not as ------- as the previous one.", "choices": ["popular", "more popular", "most popular", "popularly"], "correct": 0, "explain": "Dịch: Mẫu này không được ưa chuộng bằng mẫu trước. — \"not as + adj + as\"."},
        {"q": "Of all the candidates, Mr. Kim is the ------- qualified.", "choices": ["best", "better", "good", "well"], "correct": 0, "explain": "Dịch: Trong các ứng viên, ông Kim là người đủ năng lực nhất. — \"the best qualified\" (so sánh nhất của well)."},
        {"q": "The train is ------- than the bus.", "choices": ["faster", "fastest", "fast", "more fast"], "correct": 0, "explain": "Dịch: Tàu nhanh hơn xe buýt. — Tính từ ngắn → -er."},
        {"q": "This year's event was ------- successful than last year's.", "choices": ["more", "most", "much", "very"], "correct": 0, "explain": "Dịch: Sự kiện năm nay thành công hơn năm ngoái. — \"more + adj dài + than\"."},
        {"q": "The new laptop is twice as ------- as the old one.", "choices": ["light", "lighter", "lightest", "lightly"], "correct": 0, "explain": "Dịch: Laptop mới nhẹ gấp đôi máy cũ. — \"twice as + adj + as\"."},
        {"q": "The ------- the deadline, the more stressed the team became.", "choices": ["closer", "closest", "close", "more close"], "correct": 0, "explain": "Dịch: Càng gần hạn, nhóm càng căng thẳng. — So sánh kép: The + so sánh hơn."},
        {"q": "Mr. Ali has ------- experience than any other applicant.", "choices": ["more", "most", "many", "much more of"], "correct": 0, "explain": "Dịch: Ông Ali có nhiều kinh nghiệm hơn bất kỳ ứng viên nào. — \"more + N + than any other\"."},
        {"q": "Our customer service is the ------- in the industry.", "choices": ["best", "better", "good", "most good"], "correct": 0, "explain": "Dịch: Dịch vụ khách hàng của chúng tôi tốt nhất ngành. — So sánh nhất của good → the best."}
      ]
    },
    {
      id: 'ss-2', title: '2. So sánh nâng cao & các bẫy thường gặp',
      items: [
        {q:"Of the two proposals, the marketing team's plan is ------.", choices:['more practical','most practical','practical','practicaler'], correct:0, explain:'Dịch: Trong hai đề xuất, kế hoạch của đội marketing thực tế hơn. — Khi so sánh CHỈ GIỮA HAI đối tượng ("of the two"), phải dùng so sánh HƠN, không dùng so sánh NHẤT dù trong tiếng Việt có thể dịch là "nhất". Mẹo thêm: dấu hiệu "of the two/between the two" luôn đi với so sánh hơn — bẫy rất hay gặp trong TOEIC Part 5.'},
        {q:'This model is considerably ------ than the one we purchased last year.', choices:['more advanced','advanced','most advanced','advance'], correct:0, explain:'Dịch: Mẫu này tiên tiến hơn đáng kể so với mẫu chúng tôi đã mua năm ngoái. — Trạng từ nhấn mạnh mức độ như "considerably/significantly/much/far/a lot" thường đứng trước so sánh HƠN để nhấn mạnh mức độ chênh lệch. Mẹo thêm: các trạng từ nhấn mạnh này chỉ đi với so sánh hơn/nhất, không đi trực tiếp với tính từ nguyên thể.'},
        {q:'She is one of the ------ engineers in the company.', choices:['most talented','more talented','talented','most talent'], correct:0, explain:'Dịch: Cô ấy là một trong những kỹ sư tài năng nhất công ty. — Cấu trúc "one of the + so sánh nhất + N số nhiều" (một trong những... nhất). Mẹo thêm: sau "one of the + so sánh nhất" luôn là danh từ SỐ NHIỀU, vì "one of" ngụ ý có nhiều đối tượng cùng đạt mức độ đó.'},
        {q:'The report was submitted ------ than the deadline required.', choices:['later','more late','latest','lately'], correct:0, explain:'Dịch: Báo cáo được nộp trễ hơn so với yêu cầu của hạn chót. — "late" khi là trạng từ so sánh hơn thêm "-er" thành "later". Mẹo thêm: "lately" là trạng từ chỉ thời gian (= recently, "gần đây"), không phải dạng so sánh của "late" — rất dễ nhầm vì hình thức gần giống nhau.'},
        {q:'The less experience a candidate has, the ------ training they will need.', choices:['more','most','much','many'], correct:0, explain:'Dịch: Ứng viên càng ít kinh nghiệm thì càng cần nhiều đào tạo hơn. — Câu so sánh kép "the less... the more..." — "more" đi với danh từ không đếm được "training". Mẹo thêm: "much" là dạng gốc của "more/most" khi đi với danh từ không đếm được (much → more → most).'},
        {q:'Our new office is ------ larger than the old one — almost double the size.', choices:['far','very','so','too'], correct:0, explain:'Dịch: Văn phòng mới của chúng tôi rộng hơn nhiều so với văn phòng cũ — gần gấp đôi diện tích. — "far/much/a lot/considerably" dùng để nhấn mạnh so sánh hơn ("far larger than"). Mẹo thêm: "very" KHÔNG được dùng trực tiếp với so sánh hơn (không nói "very larger") — lỗi rất hay gặp.'},
        {q:'Among all the branches, the Hanoi office generates ------ revenue.', choices:['the most','most','more','the more'], correct:0, explain:'Dịch: Trong số tất cả các chi nhánh, văn phòng Hà Nội tạo ra doanh thu nhiều nhất. — "Among all the + N" là dấu hiệu so sánh NHẤT (giữa từ 3 đối tượng trở lên), với danh từ không đếm được "revenue" dùng "the most". Mẹo thêm: "among" (giữa nhiều đối tượng) khác với "between" (giữa 2 đối tượng) — quyết định dùng so sánh nhất hay so sánh hơn.'},
        {q:'Employee turnover this year is much ------ than it was five years ago.', choices:['lower','low','lowest','more low'], correct:0, explain:'Dịch: Tỷ lệ nghỉ việc năm nay thấp hơn nhiều so với 5 năm trước. — Tính từ ngắn "low" so sánh hơn thêm "-er": "lower". Mẹo thêm: "much" đứng trước so sánh hơn để nhấn mạnh ("much lower than"), không đứng trước tính từ nguyên thể trong câu so sánh.'},
        {q:'This contract is ------ favorable to us as the previous one was.', choices:['as','so','more','most'], correct:0, explain:'Dịch: Hợp đồng này có lợi cho chúng ta ngang bằng với hợp đồng trước. — So sánh ngang bằng cần cặp "as...as" — đáp án đầu tiên phải là "as". Mẹo thêm: "so...as" chỉ đúng trong câu PHỦ ĐỊNH ("not so...as"), còn câu khẳng định luôn dùng "as...as".'},
        {q:'The report is good, but I think the previous one was ------.', choices:['better','more good','best','gooder'], correct:0, explain:'Dịch: Báo cáo này tốt, nhưng tôi nghĩ báo cáo trước còn tốt hơn. — "good" là tính từ bất quy tắc: good → better (hơn) → the best (nhất), không thêm "-er" hay dùng "more". Mẹo thêm: các tính từ bất quy tắc thường gặp: good/well→better→best, bad→worse→worst, far→farther/further→farthest/furthest.'},
        {"q": "This year's profits were ------- worse than expected.", "choices": ["much", "very", "more", "most"], "correct": 0, "explain": "Dịch: Lợi nhuận năm nay tệ hơn dự kiến nhiều. — Nhấn mạnh so sánh hơn bằng \"much/far\", không dùng \"very\"."},
        {"q": "She is one of the ------- managers in the company.", "choices": ["most experienced", "more experienced", "experienced most", "experiencedest"], "correct": 0, "explain": "Dịch: Bà là một trong những quản lý giàu kinh nghiệm nhất công ty. — \"one of the + so sánh nhất + N số nhiều\"."},
        {"q": "The new system works ------- than the old one.", "choices": ["more efficiently", "most efficiently", "efficient", "efficienter"], "correct": 0, "explain": "Dịch: Hệ thống mới vận hành hiệu quả hơn hệ thống cũ. — Bổ nghĩa động từ → trạng từ so sánh hơn."},
        {"q": "Our store has the ------- prices in town.", "choices": ["lowest", "lower", "low", "most low"], "correct": 0, "explain": "Dịch: Cửa hàng chúng tôi có giá thấp nhất thị trấn. — \"the + -est\"."},
        {"q": "The project took ------- time than we planned.", "choices": ["less", "least", "fewer", "little"], "correct": 0, "explain": "Dịch: Dự án tốn ít thời gian hơn dự kiến. — \"time\" không đếm được → less."},
        {"q": "There were ------- complaints this month than last month.", "choices": ["fewer", "less", "few", "least"], "correct": 0, "explain": "Dịch: Tháng này ít phàn nàn hơn tháng trước. — \"complaints\" đếm được → fewer."},
        {"q": "The report is ------- longer than necessary.", "choices": ["far", "very", "so", "too much"], "correct": 0, "explain": "Dịch: Báo cáo dài hơn cần thiết rất nhiều. — \"far + so sánh hơn\"."},
        {"q": "This is by far the ------- option.", "choices": ["cheapest", "cheaper", "cheap", "most cheap"], "correct": 0, "explain": "Dịch: Đây là lựa chọn rẻ nhất, hơn hẳn. — \"by far the + so sánh nhất\"."},
        {"q": "Ms. Tan types ------- than anyone else in the office.", "choices": ["faster", "fastest", "more fastly", "fast as"], "correct": 0, "explain": "Dịch: Bà Tan đánh máy nhanh hơn bất kỳ ai trong văn phòng. — \"fast\" vừa tính từ vừa trạng từ; so sánh hơn → faster."},
        {"q": "The new design is similar ------- the old one.", "choices": ["to", "than", "as", "with"], "correct": 0, "explain": "Dịch: Thiết kế mới tương tự thiết kế cũ. — \"similar to\"."},
        {"q": "The results were different ------- what we expected.", "choices": ["from", "than", "as", "to than"], "correct": 0, "explain": "Dịch: Kết quả khác với dự kiến. — \"different from\"."},
        {"q": "The meeting was ------- shorter than usual.", "choices": ["slightly", "slight", "slighter", "slightest"], "correct": 0, "explain": "Dịch: Cuộc họp ngắn hơn thường lệ một chút. — Trạng từ chỉ mức độ trước so sánh hơn."},
        {"q": "The second hotel was as ------- as the first.", "choices": ["comfortable", "more comfortable", "most comfortable", "comfortably"], "correct": 0, "explain": "Dịch: Khách sạn thứ hai thoải mái ngang khách sạn đầu. — \"as + adj + as\"."},
        {"q": "This is the ------- deal we have ever made.", "choices": ["biggest", "bigger", "big", "most big"], "correct": 0, "explain": "Dịch: Đây là thương vụ lớn nhất chúng tôi từng làm. — so sánh nhất + ever."},
        {"q": "The newer model is ------- reliable than the older one.", "choices": ["less", "least", "fewer", "little"], "correct": 0, "explain": "Dịch: Mẫu mới kém bền hơn mẫu cũ. — \"less + adj + than\" (kém hơn)."}
      ]
    },
    {
      id: 'ss-3', title: "3. Luyện thêm: so sánh trong câu TOEIC",
      items: [
        {"q": "This year's sales conference attracted ------- participants than last year's event.", "choices": ["more", "most", "many", "much"], "correct": 0, "explain": "Dịch: Hội nghị bán hàng năm nay thu hút nhiều người tham dự hơn năm ngoái. — Có \"than\" → so sánh hơn; \"participants\" đếm được số nhiều → \"more\" (so sánh hơn của many)."},
        {"q": "Of the three proposals, Ms. Ortiz's plan is the ------- expensive to carry out.", "choices": ["least", "less", "little", "fewer"], "correct": 0, "explain": "Dịch: Trong ba đề xuất, kế hoạch của bà Ortiz tốn ít chi phí nhất. — \"Of the three … the ___\" → so sánh nhất; \"the least + tính từ\" = ít … nhất."},
        {"q": "The new printer works twice as ------- as the old model.", "choices": ["fast", "faster", "fastest", "more fast"], "correct": 0, "explain": "Dịch: Máy in mới chạy nhanh gấp đôi mẫu cũ. — So sánh bằng/bội số \"twice as + tính từ/trạng từ nguyên dạng + as\" → \"fast\"."},
        {"q": "The ------- the order is placed, the sooner the goods will be delivered.", "choices": ["earlier", "earliest", "early", "more early"], "correct": 0, "explain": "Dịch: Đặt hàng càng sớm thì hàng giao càng sớm. — So sánh kép \"The + so sánh hơn …, the + so sánh hơn …\" → \"earlier\"."},
        {"q": "Mr. Vance is by far the ------- experienced technician on our team.", "choices": ["most", "more", "much", "very"], "correct": 0, "explain": "Dịch: Ông Vance là kỹ thuật viên giàu kinh nghiệm nhất nhóm, hơn hẳn mọi người. — \"by far + the + so sánh nhất\" (nhấn mạnh) → \"most experienced\"."},
        {"q": "Online orders were processed ------- this month than in the previous quarter.", "choices": ["more quickly", "most quickly", "quickest", "quick"], "correct": 0, "explain": "Dịch: Đơn trực tuyến tháng này được xử lý nhanh hơn quý trước. — Bổ nghĩa cho động từ \"were processed\" cần trạng từ; có \"than\" → \"more quickly\"."},
        {"q": "The updated software is considerably ------- to use than the earlier version.", "choices": ["easier", "easiest", "easily", "more easily"], "correct": 0, "explain": "Dịch: Phần mềm cập nhật dễ dùng hơn đáng kể so với bản trước. — \"be + considerably + so sánh hơn của tính từ\": easy → \"easier\". \"considerably/much/far\" đứng trước để nhấn mạnh."},
        {"q": "Ms. Han's sales figures are similar ------- those of last year's top performer.", "choices": ["to", "than", "as", "with"], "correct": 0, "explain": "Dịch: Doanh số của bà Han tương đương doanh số của người dẫn đầu năm ngoái. — Cụm cố định \"similar to\" (giống với). \"than\" chỉ dùng với so sánh hơn."},
        {"q": "This laptop is the lightest model ------- produced by Varn Electronics.", "choices": ["ever", "never", "always", "yet"], "correct": 0, "explain": "Dịch: Đây là mẫu máy nhẹ nhất mà Varn Electronics từng sản xuất. — \"so sánh nhất + ever + V3\" = từ trước tới nay."},
        {"q": "The museum's new wing is not as ------- as the original building.", "choices": ["spacious", "more spacious", "most spacious", "spaciously"], "correct": 0, "explain": "Dịch: Cánh mới của bảo tàng không rộng bằng toà nhà cũ. — So sánh bằng \"(not) as + tính từ nguyên dạng + as\"."},
        {"q": "Of all our branches, the Lima office has grown the -------.", "choices": ["most rapidly", "more rapidly", "rapid", "rapidest"], "correct": 0, "explain": "Dịch: Trong mọi chi nhánh, văn phòng Lima tăng trưởng nhanh nhất. — Bổ nghĩa cho động từ \"has grown\" cần trạng từ; \"Of all\" → so sánh nhất \"the most rapidly\"."},
        {"q": "Ticket prices for the festival are ------- higher this year due to increased demand.", "choices": ["slightly", "slight", "slighter", "slightest"], "correct": 0, "explain": "Dịch: Giá vé lễ hội năm nay cao hơn một chút do nhu cầu tăng. — Trước so sánh hơn \"higher\" cần trạng từ chỉ mức độ → \"slightly\" (hơn một chút)."},
        {"q": "The bigger the order, the ------- the discount.", "choices": ["larger", "largest", "large", "more large"], "correct": 0, "explain": "Dịch: Đơn càng lớn thì giảm giá càng nhiều. — So sánh kép."},
        {"q": "Mr. Lim is the ------- of the two brothers.", "choices": ["taller", "tallest", "tall", "most tall"], "correct": 0, "explain": "Dịch: Ông Lim là người cao hơn trong hai anh em. — So sánh giữa hai người → \"the + so sánh hơn\"."},
        {"q": "The new phone is ------- expensive as the old one.", "choices": ["as", "so much", "more", "most"], "correct": 0, "explain": "Dịch: Điện thoại mới đắt ngang máy cũ. — \"as + adj + as\"."},
        {"q": "This year's sales were the ------- in the company's history.", "choices": ["highest", "higher", "high", "most high"], "correct": 0, "explain": "Dịch: Doanh số năm nay cao nhất lịch sử công ty. — So sánh nhất."},
        {"q": "Working from home is ------- convenient than commuting.", "choices": ["more", "most", "much", "very"], "correct": 0, "explain": "Dịch: Làm việc tại nhà tiện hơn đi lại. — \"more + adj dài + than\"."},
        {"q": "The team finished ------- than expected.", "choices": ["earlier", "earliest", "early than", "more earlier"], "correct": 0, "explain": "Dịch: Nhóm xong sớm hơn dự kiến. — \"early\" → earlier."},
        {"q": "This is the ------- interesting book I have read this year.", "choices": ["most", "more", "much", "very"], "correct": 0, "explain": "Dịch: Đây là cuốn sách hay nhất tôi đọc năm nay. — \"the most + adj\"."},
        {"q": "The ------- you arrive, the better seat you will get.", "choices": ["earlier", "earliest", "early", "more early"], "correct": 0, "explain": "Dịch: Đến càng sớm, chỗ ngồi càng tốt. — So sánh kép."},
        {"q": "Our new office is not ------- big as we had hoped.", "choices": ["as", "more", "than", "most"], "correct": 0, "explain": "Dịch: Văn phòng mới không rộng như chúng tôi mong. — \"not as/so + adj + as\"."},
        {"q": "The weather today is ------- than yesterday.", "choices": ["worse", "worst", "bad", "more bad"], "correct": 0, "explain": "Dịch: Thời tiết hôm nay tệ hơn hôm qua. — So sánh hơn của bad → worse."},
        {"q": "Of all the offers, this one is the ------- attractive.", "choices": ["least", "less", "little", "fewer"], "correct": 0, "explain": "Dịch: Trong mọi lời mời, lời mời này kém hấp dẫn nhất. — \"the least + adj\" = kém … nhất."},
        {"q": "Prices here are ------- the same as in other stores.", "choices": ["roughly", "rough", "rougher", "roughest"], "correct": 0, "explain": "Dịch: Giá ở đây gần như giống các cửa hàng khác. — Trạng từ \"roughly\" trước \"the same as\"."},
        {"q": "This route is ------- shorter than the highway.", "choices": ["considerably", "considerable", "consider", "consideration"], "correct": 0, "explain": "Dịch: Tuyến này ngắn hơn đường cao tốc đáng kể. — Trạng từ chỉ mức độ trước so sánh hơn."}
      ]
    }
  ],

  vocab: [
    {word:'considerably', ipa:'/kənˈsɪdərəbli/', meaning:'đáng kể (nhấn mạnh mức độ chênh lệch)', example:'This model is considerably more advanced than the previous one.', note:'đồng nghĩa: significantly'},
    {word:'proposal', ipa:'/prəˈpoʊzl/', meaning:'đề xuất, bản đề nghị', example:"Of the two proposals, the marketing team's plan is more practical.", note:'động từ: propose'},
    {word:'revenue', ipa:'/ˈrevənuː/', meaning:'doanh thu', example:'The Hanoi office generates the most revenue among all the branches.', note:'phân biệt với "profit" (lợi nhuận)'},
    {word:'branch', ipa:'/bræntʃ/', meaning:'chi nhánh', example:'Among all the branches, the Hanoi office generates the most revenue.', note:'đồng nghĩa: subsidiary (công ty con)'},
    {word:'favorable', ipa:'/ˈfeɪvərəbl/', meaning:'có lợi, thuận lợi', example:'This contract is as favorable to us as the previous one was.', note:'trái nghĩa: unfavorable'},
    {word:'submit', ipa:'/səbˈmɪt/', meaning:'nộp, đệ trình', example:'The report was submitted later than the deadline required.', note:'danh từ: submission'},
    {word:'candidate', ipa:'/ˈkændɪdət/', meaning:'ứng viên', example:'The less experience a candidate has, the more training they will need.', note:'đồng nghĩa: applicant'},
    {word:'purchase', ipa:'/ˈpɜːrtʃəs/', meaning:'mua, sự mua sắm', example:'The model we purchased last year is less advanced.', note:'trang trọng hơn "buy"'}
  ]
};
