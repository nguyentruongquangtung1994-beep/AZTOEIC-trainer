window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['trang-tu-danh-tu-ghep'] = {
  id: 'trang-tu-danh-tu-ghep',
  order: 15,
  title: 'Vị Trí Trạng Từ & Danh Từ Ghép',
  subtitle: 'Adverb Positions & Compound Nouns',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2nd edition — Adverbs (Trạng từ) + bổ sung của AZEnglish',
  note: 'Bài tập do AZEnglish soạn thêm (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Các loại trạng từ và vị trí trong câu',
      tenses: [
        {
          name: 'Trạng từ theo chức năng (theo sách AZ Grammar)',
          form: 'Cách thức · Tần suất · Thời gian · Nơi chốn · Mức độ',
          usage: ['Cách thức: She speaks fluently.', 'Tần suất: She always smiles.', 'Thời gian: I saw her yesterday.', 'Nơi chốn: She cried here.', 'Mức độ: She was very sad.'],
          signals: 'Trạng từ có thể bổ nghĩa cho động từ, tính từ, trạng từ khác hoặc cả câu; vị trí: đầu, giữa hoặc cuối câu tùy chức năng.'
        },
        {
          name: 'Vị trí điển hình',
          form: 'Tần suất: trước động từ thường, sau "be" · Giữa trợ động từ và V-pp · Trước tính từ · Sau tính từ (enough)',
          usage: ['Tần suất: She rarely arrives late. · She is never late. (sau be)', 'Giữa trợ động từ và V-pp: The manager has already approved the plan. · Employees are strongly encouraged to…', 'Trước tính từ: The project is almost complete. · The results were much better than expected.', 'enough đứng SAU tính từ: The room is large enough to hold 200 people; too đứng TRƯỚC tính từ: This offer is too good to be true.'],
          signals: 'Trạng từ hầu như không chen giữa động từ và tân ngữ trực tiếp — tránh "reviewed carefully every application".'
        },
        {
          name: 'Cặp trạng từ dễ nhầm',
          form: 'hard / hardly · late / lately · near / nearly · just / yet / already · high / highly',
          usage: ['hard (chăm chỉ) ↔ hardly (hầu như không): The staff worked hard. · We hardly had time to eat lunch.', 'late (muộn) ↔ lately (gần đây): The flight arrived late. · She has been very busy lately.', 'yet (phủ định/nghi vấn: chưa) ↔ already (rồi) ↔ just (vừa mới).'],
          signals: 'Trạng từ KHÔNG đuôi -ly: fast, hard, late, early, well, soon — đừng tự thêm -ly vào.'
        }
      ]
    },
    {
      group: 'Danh từ ghép (Compound Nouns) và tính từ ghép',
      tip: [
        'Danh từ ghép N + N: danh từ đầu bổ nghĩa cho danh từ sau và LUÔN ở dạng số ít: retirement plan, customer service, job application, exchange rate.',
        'Ngoại lệ số nhiều thường gặp: sales figures, terms and conditions, savings account, customs office, human resources.',
        'Tính từ ghép có số đếm + danh từ: danh từ ở dạng SỐ ÍT và có gạch nối: a three-year contract, a two-day workshop, a five-star hotel (không viết three-years).',
        'Danh từ đầu có thể là danh động từ: monitoring system, washing machine, shipping address, parking lot.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'tt-1', title: '1. Vị trí và lựa chọn trạng từ',
      items: [
        {q:'The project is ------ complete; only the final report is missing.', choices:['most','mostly of','almost of','almost'], correct:3, explain:'Dịch: Dự án gần như đã hoàn tất; chỉ còn thiếu báo cáo cuối. — Giải thích: trạng từ chỉ mức độ đứng trước tính từ "complete" → "almost". Mẹo thêm: "most" là lượng từ/đại từ, không bổ nghĩa cho tính từ.'},
        {q:'We have ------ received the shipment, so you can pick it up now.', choices:['just','ever','still not','yet'], correct:0, explain:'Dịch: Chúng tôi vừa mới nhận lô hàng nên bạn có thể đến lấy ngay. — Giải thích: "have just + V-pp" = vừa mới. Mẹo thêm: "yet" chỉ dùng trong câu phủ định/nghi vấn.'},
        {q:'The manager has not approved the budget ------.', choices:['just','yet','ever','already'], correct:1, explain:'Dịch: Quản lý vẫn chưa phê duyệt ngân sách. — Giải thích: câu phủ định, nói việc chưa xảy ra → "yet" (đặt cuối câu). Mẹo thêm: "already" dùng trong câu khẳng định.'},
        {q:'The staff worked ------ to finish the report before the deadline.', choices:['hardly','harder','hard','hardness'], correct:2, explain:'Dịch: Nhân viên làm việc chăm chỉ để hoàn thành báo cáo trước hạn. — Giải thích: "hard" là trạng từ nghĩa "chăm chỉ" (không thêm -ly). Mẹo thêm: "hardly" nghĩa là hầu như không — đổi hẳn nghĩa câu.'},
        {q:'We ------ had time to eat lunch because of the back-to-back meetings.', choices:['hardness','hardy','hard','hardly'], correct:3, explain:'Dịch: Chúng tôi hầu như không có thời gian ăn trưa vì các cuộc họp liên tiếp. — Giải thích: "hardly + had time" = hầu như không có. Mẹo thêm: "back-to-back" (liên tiếp không nghỉ) là tính từ ghép hay gặp.'},
        {q:'The manager has been very busy ------, so she cannot attend the event.', choices:['lateness','latest','lately','late'], correct:2, explain:'Dịch: Gần đây quản lý rất bận nên bà không thể dự sự kiện. — Giải thích: "lately" = gần đây (hay đi với hiện tại hoàn thành). Mẹo thêm: "late" = muộn.'},
        {q:'The flight arrived ------, so we missed the connection.', choices:['late','latest','lately','later than'], correct:0, explain:'Dịch: Chuyến bay đến muộn nên chúng tôi lỡ chuyến nối. — Giải thích: "arrived late" (muộn) dùng "late" làm trạng từ. Mẹo thêm: không nói "lately" trong nghĩa này.'},
        {q:'The results were ------ better than we expected.', choices:['too','much','so','very'], correct:1, explain:'Dịch: Kết quả tốt hơn nhiều so với chúng tôi mong đợi. — Giải thích: trước so sánh hơn dùng "much/far/even/a lot" để nhấn mạnh. Mẹo thêm: "very better" là lỗi phổ biến.'},
        {q:'This offer is ------ good to be true.', choices:['very','too','enough','so much'], correct:1, explain:'Dịch: Ưu đãi này tốt đến mức khó tin. — Giải thích: "too + adj + to V0" = quá … để làm gì. Mẹo thêm: "enough" phải đứng SAU tính từ.'},
        {q:'The room is large ------ to hold 200 people.', choices:['very','too','enough','much'], correct:2, explain:'Dịch: Căn phòng đủ rộng để chứa 200 người. — Giải thích: "adj + enough + to V0" = đủ … để. Mẹo thêm: enough đứng sau tính từ, nhưng đứng trước danh từ (enough space).'},
        {"q": "The new system has ------- improved our efficiency.", "choices": ["greatly", "great", "greater", "greatness"], "correct": 0, "explain": "Dịch: Hệ thống mới đã cải thiện đáng kể hiệu suất. — Giữa \"has\" và V3 → trạng từ."},
        {"q": "Ms. Lee ------- arrives before 8 A.M.", "choices": ["usually", "usual", "usualness", "more usual"], "correct": 0, "explain": "Dịch: Bà Lee thường đến trước 8 giờ. — Trạng từ tần suất trước động từ thường."},
        {"q": "The report was ------- written.", "choices": ["poorly", "poor", "poorer", "poverty"], "correct": 0, "explain": "Dịch: Báo cáo viết kém. — Giữa \"was\" và V3 → trạng từ."},
        {"q": "He is ------- late for meetings.", "choices": ["rarely", "rare", "rarer", "rareness"], "correct": 0, "explain": "Dịch: Ông hiếm khi đến họp muộn. — Trạng từ tần suất sau \"be\"."},
        {"q": "The store has ------- reopened after renovations.", "choices": ["recently", "recent", "recency", "more recent"], "correct": 0, "explain": "Dịch: Cửa hàng vừa mở lại sau sửa chữa. — Giữa \"has\" và V3."},
        {"q": "The staff worked ------- to finish the project.", "choices": ["tirelessly", "tireless", "tire", "tired"], "correct": 0, "explain": "Dịch: Nhân viên làm việc không mệt mỏi để xong dự án. — Bổ nghĩa động từ."},
        {"q": "The instructions are ------- simple.", "choices": ["surprisingly", "surprising", "surprised", "surprise"], "correct": 0, "explain": "Dịch: Hướng dẫn đơn giản bất ngờ. — Trước tính từ → trạng từ."},
        {"q": "We will ------- contact you about the interview.", "choices": ["soon", "sooner of", "soonest", "soonly"], "correct": 0, "explain": "Dịch: Chúng tôi sẽ sớm liên hệ bạn về buổi phỏng vấn. — Trạng từ giữa \"will\" và V0."},
        {"q": "The package was ------- delivered to the wrong address.", "choices": ["mistakenly", "mistaken", "mistake", "mistaking"], "correct": 0, "explain": "Dịch: Kiện hàng bị giao nhầm địa chỉ. — Giữa \"was\" và V3."},
        {"q": "She ------- agreed to lead the project.", "choices": ["readily", "ready", "readiness", "readier"], "correct": 0, "explain": "Dịch: Bà sẵn lòng đồng ý dẫn dắt dự án. — Trước động từ chính → trạng từ."},
        {"q": "The company is ------- known for its quality.", "choices": ["widely", "wide", "width", "widen"], "correct": 0, "explain": "Dịch: Công ty được biết đến rộng rãi nhờ chất lượng. — \"be widely known\"."},
        {"q": "The machine runs ------- quietly.", "choices": ["remarkably", "remarkable", "remark", "remarked"], "correct": 0, "explain": "Dịch: Máy chạy êm đáng kinh ngạc. — Trạng từ bổ nghĩa trạng từ \"quietly\"."},
        {"q": "Please drive ------- in the parking lot.", "choices": ["slowly", "slow down", "slowness", "slower than"], "correct": 0, "explain": "Dịch: Lái chậm trong bãi đỗ xe. — Bổ nghĩa động từ \"drive\"."},
        {"q": "They have ------- finished the first phase.", "choices": ["already", "yet", "ever", "still not"], "correct": 0, "explain": "Dịch: Họ đã xong giai đoạn đầu rồi. — \"already\" giữa \"have\" và V3."},
        {"q": "The new manager is ------- respected by her team.", "choices": ["highly", "high", "height", "higher"], "correct": 0, "explain": "Dịch: Quản lý mới rất được nhóm kính trọng. — \"highly respected\"."}
      ]
    },
    {
      id: 'tt-2', title: '2. Danh từ ghép, tính từ ghép & chọn câu đúng',
      items: [
        {q:'The company announced a new ------ plan for employees.', choices:['retired','retiring','retire','retirement'], correct:3, explain:'Dịch: Công ty công bố kế hoạch hưu trí mới cho nhân viên. — Giải thích: danh từ ghép "retirement plan" (danh từ + danh từ). Mẹo thêm: danh từ đầu luôn ở dạng số ít và không thêm -s.'},
        {q:'Please check the ------ before you sign the contract.', choices:['terms and conditions','conditions terms','terms and condition','term and condition'], correct:0, explain:'Dịch: Vui lòng kiểm tra các điều khoản và điều kiện trước khi ký hợp đồng. — Giải thích: cụm cố định số nhiều "terms and conditions". Mẹo thêm: nhớ như một khối, không tách hay đổi số.'},
        {q:'The ------ for last quarter were disappointing.', choices:['sale figure','sales figures','sale figures','sales figure'], correct:1, explain:'Dịch: Số liệu bán hàng quý trước gây thất vọng. — Giải thích: "sales figures" là cụm cố định (sales luôn có -s) và động từ "were" cần danh từ số nhiều. Mẹo thêm: khác với quy tắc N1 số ít thông thường — "sales" là ngoại lệ.'},
        {q:'She applied for the ------ position at the bank.', choices:['customer service','customer services','customers service','customers services'], correct:0, explain:'Dịch: Cô ấy ứng tuyển vị trí chăm sóc khách hàng tại ngân hàng. — Giải thích: danh từ ghép "customer service" (dịch vụ khách hàng), làm bổ nghĩa cho "position". Mẹo thêm: danh từ đầu "customer" số ít.'},
        {q:'We signed a ------ contract with the supplier.', choices:['three-years','three years','three-year','third-year'], correct:2, explain:'Dịch: Chúng tôi đã ký hợp đồng ba năm với nhà cung cấp. — Giải thích: tính từ ghép số đếm + danh từ số ít có gạch nối: "three-year". Mẹo thêm: "three-years contract" là lỗi rất hay gặp.'},
        {q:'She attended a ------ workshop on time management.', choices:['two days','two-days','second-day','two-day'], correct:3, explain:'Dịch: Cô ấy tham dự một buổi hội thảo hai ngày về quản lý thời gian. — Giải thích: tính từ ghép "two-day" (số ít, có gạch nối) đứng trước danh từ "workshop". Mẹo thêm: khi không ghép: "The workshop lasts two days" (số nhiều, không gạch nối).'},
        {q:'The ------ has risen sharply this month.', choices:['exchanges rate','rate exchange','exchange rate','exchange rates rate'], correct:2, explain:'Dịch: Tỷ giá hối đoái đã tăng mạnh trong tháng này. — Giải thích: danh từ ghép "exchange rate" theo đúng thứ tự "danh từ bổ nghĩa + danh từ chính". Mẹo thêm: "has risen" (số ít) khớp với "rate".'},
        {q:'Chọn câu đúng:', choices:['She rarely late arrives.','She rarely arrives late.','Rarely she arrives late.','She arrives rarely late.'], correct:1, explain:'Dịch: Cô ấy hiếm khi đến muộn. — Giải thích: trạng từ tần suất "rarely" đứng trước động từ thường "arrives". Mẹo thêm: nếu đặt "Rarely" đầu câu thì phải đảo ngữ (Rarely does she arrive late).'},
        {q:'Chọn câu đúng:', choices:['The manager has already approved the plan.','The manager has approved already the plan.','The manager has the plan already approved.','The manager already has approved plan the.'], correct:0, explain:'Dịch: Quản lý đã phê duyệt kế hoạch rồi. — Giải thích: "already" đứng giữa trợ động từ "has" và V-pp "approved". Mẹo thêm: các câu còn lại sai trật tự từ.'},
        {q:'Employees are ------ encouraged to submit their ideas.', choices:['strengthen','strong','strength','strongly'], correct:3, explain:'Dịch: Nhân viên được khuyến khích mạnh mẽ nộp ý tưởng của mình. — Giải thích: trạng từ đứng giữa "are" và V-pp "encouraged" → "strongly". Mẹo thêm: "strongly encouraged/recommended" là cụm rất phổ biến trong thông báo.'},
        {"q": "Please contact our customer ------- team for help.", "choices": ["service", "serving", "served", "serves"], "correct": 0, "explain": "Dịch: Hãy liên hệ đội chăm sóc khách hàng. — Danh từ ghép \"customer service team\"."},
        {"q": "The job ------- will be posted online.", "choices": ["description", "describe", "descriptive", "described"], "correct": 0, "explain": "Dịch: Mô tả công việc sẽ được đăng online. — Danh từ ghép \"job description\"."},
        {"q": "All employees must attend the safety ------- .", "choices": ["training", "trained", "trainer of", "trains"], "correct": 0, "explain": "Dịch: Mọi nhân viên phải dự buổi đào tạo an toàn. — \"safety training\"."},
        {"q": "Please check the expiration ------- before using the product.", "choices": ["date", "dated", "dating", "dates of"], "correct": 0, "explain": "Dịch: Hãy kiểm tra hạn sử dụng trước khi dùng. — \"expiration date\"."},
        {"q": "The company launched a new advertising ------- .", "choices": ["campaign", "campaigned", "campaigning", "campaigner of"], "correct": 0, "explain": "Dịch: Công ty tung chiến dịch quảng cáo mới. — \"advertising campaign\"."},
        {"q": "She is a ------- author in the field of economics.", "choices": ["well-known", "well-knowing", "good-known", "best-knowing"], "correct": 0, "explain": "Dịch: Bà là tác giả nổi tiếng trong lĩnh vực kinh tế. — Tính từ ghép \"well-known\" (trạng từ well + V3)."},
        {"q": "We need a ------- plan for the project.", "choices": ["long-term", "long-terms", "longer-term of", "long-termed"], "correct": 0, "explain": "Dịch: Cần kế hoạch dài hạn cho dự án. — Tính từ ghép \"long-term\" (không thêm -s)."},
        {"q": "The meeting is in the ------- room on the second floor.", "choices": ["conference", "conferring", "conferred", "conferences of"], "correct": 0, "explain": "Dịch: Cuộc họp ở phòng hội nghị tầng hai. — \"conference room\"."},
        {"q": "Please return the books by the due ------- .", "choices": ["date", "dated", "dating", "dates of"], "correct": 0, "explain": "Dịch: Vui lòng trả sách trước hạn. — \"due date\"."},
        {"q": "We offer a ------- money-back guarantee.", "choices": ["30-day", "30-days", "30 days' of", "thirty-days"], "correct": 0, "explain": "Dịch: Chúng tôi bảo đảm hoàn tiền trong 30 ngày. — Tính từ ghép số + danh từ số ít: \"30-day\"."},
        {"q": "The sales ------- for this quarter are excellent.", "choices": ["figures", "figure out", "figured", "figuring"], "correct": 0, "explain": "Dịch: Số liệu bán hàng quý này rất tốt. — \"sales figures\"."},
        {"q": "The hotel offers ------- parking.", "choices": ["free", "freely", "freedom", "freed"], "correct": 0, "explain": "Dịch: Khách sạn miễn phí đỗ xe. — Tính từ trước danh từ."},
        {"q": "Our ------- department handles all complaints.", "choices": ["customer relations", "customer relating", "customers relate", "customer related of"], "correct": 0, "explain": "Dịch: Phòng quan hệ khách hàng xử lý mọi khiếu nại. — Danh từ ghép \"customer relations department\"."},
        {"q": "Please fill out the application ------- .", "choices": ["form", "formed", "forming", "formal"], "correct": 0, "explain": "Dịch: Vui lòng điền mẫu đơn. — \"application form\"."},
        {"q": "She works as a ------- assistant.", "choices": ["part-time", "part-times", "parted-time", "part time's"], "correct": 0, "explain": "Dịch: Bà làm trợ lý bán thời gian. — Tính từ ghép \"part-time\"."}
      ]
    },
    {
      id: 'tt-3', title: "3. Luyện thêm: vị trí trạng từ & danh từ ghép",
      items: [
        {"q": "The new policy has ------- reduced the time needed to approve expenses.", "choices": ["greatly", "great", "greater", "greatness"], "correct": 0, "explain": "Dịch: Chính sách mới đã giảm đáng kể thời gian duyệt chi phí. — Giữa \"has\" và V3 \"reduced\" cần trạng từ → \"greatly\"."},
        {"q": "Please read the ------- agreement before installing the software.", "choices": ["license", "licensed", "licensing", "licenses"], "correct": 0, "explain": "Dịch: Vui lòng đọc thoả thuận cấp phép trước khi cài phần mềm. — Danh từ ghép \"license agreement\"; danh từ đứng trước làm định ngữ thường ở dạng số ít."},
        {"q": "The hotel is ------- located near the train station and the business district.", "choices": ["conveniently", "convenient", "convenience", "conveniences"], "correct": 0, "explain": "Dịch: Khách sạn nằm ở vị trí thuận tiện gần ga tàu và khu thương mại. — \"be + trạng từ + V3\" → \"conveniently located\" (cụm rất hay gặp)."},
        {"q": "All ------- requests must be approved by a department head.", "choices": ["vacation", "vacations", "vacationing", "vacationed"], "correct": 0, "explain": "Dịch: Mọi đơn xin nghỉ phép phải được trưởng phòng duyệt. — Danh từ ghép \"vacation requests\": danh từ thứ nhất làm định ngữ giữ dạng số ít."},
        {"q": "Ms. Lin ------- checks her e-mail before the morning meeting.", "choices": ["always", "always is", "is always", "ever"], "correct": 0, "explain": "Dịch: Bà Lin luôn kiểm tra email trước buổi họp sáng. — Trạng từ tần suất đứng trước động từ thường: \"always checks\"."},
        {"q": "The project was completed ------- ahead of schedule.", "choices": ["well", "good", "better", "best"], "correct": 0, "explain": "Dịch: Dự án hoàn thành sớm hơn kế hoạch khá nhiều. — \"well ahead of schedule\" = sớm hơn hẳn; trạng từ \"well\" nhấn mạnh cụm giới từ."},
        {"q": "Our ------- department will contact you to arrange the interview.", "choices": ["personnel", "personal", "personally", "personality"], "correct": 0, "explain": "Dịch: Phòng nhân sự sẽ liên hệ bạn để sắp xếp phỏng vấn. — Danh từ ghép \"personnel department\" (phòng nhân sự). \"personal\" (cá nhân) sai nghĩa."},
        {"q": "The software update was ------- installed on all company computers.", "choices": ["successfully", "successful", "success", "succeed"], "correct": 0, "explain": "Dịch: Bản cập nhật đã được cài thành công trên mọi máy công ty. — Giữa \"was\" và V3 \"installed\" → trạng từ \"successfully\"."},
        {"q": "Customers can track their orders through the ------- confirmation e-mail.", "choices": ["shipping", "shipped", "ship", "shipper"], "correct": 0, "explain": "Dịch: Khách có thể theo dõi đơn qua email xác nhận giao hàng. — Danh từ ghép \"shipping confirmation\" (V-ing làm định ngữ chỉ chức năng)."},
        {"q": "The results were ------- better than the team had predicted.", "choices": ["much", "very", "too", "so"], "correct": 0, "explain": "Dịch: Kết quả tốt hơn nhiều so với dự đoán của nhóm. — Trước so sánh hơn \"better\" dùng \"much/far\", không dùng \"very\"."},
        {"q": "Mr. Okoro has ------- returned from the trade show in Berlin.", "choices": ["just", "yet", "still", "already not"], "correct": 0, "explain": "Dịch: Ông Okoro vừa trở về từ hội chợ ở Berlin. — \"has just + V3\" = vừa mới. \"yet\" dùng ở câu phủ định/nghi vấn, đứng cuối câu."},
        {"q": "Please keep your ------- receipt as proof of purchase.", "choices": ["sales", "sale", "sold", "selling"], "correct": 0, "explain": "Dịch: Vui lòng giữ hoá đơn bán hàng làm bằng chứng mua. — Danh từ ghép cố định \"sales receipt\" (giống sales department, sales figures)."},
        {"q": "The team ------- completed the task.", "choices": ["finally", "final", "finalize", "finality"], "correct": 0, "explain": "Dịch: Cuối cùng nhóm hoàn thành nhiệm vụ. — Trạng từ giữa chủ ngữ và động từ."},
        {"q": "Our ------- center is open 24 hours.", "choices": ["call", "calling", "called", "calls of"], "correct": 0, "explain": "Dịch: Tổng đài của chúng tôi mở 24 giờ. — Danh từ ghép \"call center\"."},
        {"q": "The prices are ------- higher this year.", "choices": ["noticeably", "noticeable", "notice", "noticing"], "correct": 0, "explain": "Dịch: Năm nay giá cao hơn rõ rệt. — Trạng từ trước tính từ so sánh."},
        {"q": "Please read the ------- policy before booking.", "choices": ["cancellation", "cancel", "canceled", "canceling of"], "correct": 0, "explain": "Dịch: Đọc chính sách huỷ trước khi đặt. — \"cancellation policy\"."},
        {"q": "The CEO spoke ------- about the company's goals.", "choices": ["briefly", "brief", "briefing", "briefs"], "correct": 0, "explain": "Dịch: CEO nói ngắn gọn về mục tiêu công ty. — Bổ nghĩa động từ."},
        {"q": "All visitors need a ------- pass.", "choices": ["security", "secure", "securely", "securing"], "correct": 0, "explain": "Dịch: Mọi khách cần thẻ an ninh. — \"security pass\"."},
        {"q": "The project is ------- on schedule.", "choices": ["currently", "current", "currency", "currents"], "correct": 0, "explain": "Dịch: Dự án hiện đúng tiến độ. — Trạng từ sau \"is\"."},
        {"q": "We offer ------- delivery within the city.", "choices": ["same-day", "same-days", "same day's", "samely"], "correct": 0, "explain": "Dịch: Chúng tôi giao trong ngày trong thành phố. — Tính từ ghép \"same-day\"."},
        {"q": "The manager ------- reviews all expense reports.", "choices": ["personally", "personal", "person", "personality"], "correct": 0, "explain": "Dịch: Quản lý đích thân xem mọi báo cáo chi phí. — Trước động từ chính."},
        {"q": "The ------- office is located in Seoul.", "choices": ["head", "heading", "headed", "heads"], "correct": 0, "explain": "Dịch: Trụ sở chính đặt ở Seoul. — \"head office\"."},
        {"q": "The event was ------- attended.", "choices": ["well", "good", "better than", "best"], "correct": 0, "explain": "Dịch: Sự kiện đông người tham dự. — \"well attended\"."},
        {"q": "Please keep your ------- number for future reference.", "choices": ["order", "ordering", "ordered", "orders'"], "correct": 0, "explain": "Dịch: Hãy giữ mã đơn hàng để tra cứu sau. — \"order number\"."},
        {"q": "The new rules will take effect ------- .", "choices": ["immediately", "immediate", "immediacy", "immediates"], "correct": 0, "explain": "Dịch: Quy định mới có hiệu lực ngay. — Trạng từ cuối câu bổ nghĩa động từ."}
      ]
    }
  ],

  vocab: [
    {word:'terms and conditions', ipa:'/tɜːmz ənd kənˈdɪʃnz/', meaning:'điều khoản và điều kiện', example:'Please check the terms and conditions before you sign.', note:'luôn số nhiều'},
    {word:'exchange rate', ipa:'/ɪksˈtʃeɪndʒ reɪt/', meaning:'tỷ giá hối đoái', example:'The exchange rate has risen sharply.', note:'lĩnh vực tài chính'},
    {word:'sales figures', ipa:'/seɪlz ˈfɪɡjərz/', meaning:'số liệu bán hàng', example:'The sales figures for last quarter were disappointing.', note:'"sales" luôn có -s'},
    {word:'retirement plan', ipa:'/rɪˈtaɪərmənt plæn/', meaning:'kế hoạch hưu trí', example:'The company announced a new retirement plan.', note:'phúc lợi nhân viên'},
    {word:'back-to-back', ipa:'/ˌbæk tə ˈbæk/', meaning:'liên tiếp, nối tiếp nhau', example:'We had back-to-back meetings all day.', note:'tính từ ghép'},
    {word:'strongly encouraged', ipa:'/ˈstrɔːŋli ɪnˈkʌrɪdʒd/', meaning:'được khuyến khích mạnh mẽ', example:'Employees are strongly encouraged to submit ideas.', note:'cụm hay gặp trong thông báo'}
  ]
};
