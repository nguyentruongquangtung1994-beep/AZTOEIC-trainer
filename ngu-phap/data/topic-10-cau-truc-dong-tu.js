window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['cau-truc-dong-tu'] = {
  id: 'cau-truc-dong-tu',
  order: 10,
  title: 'Cấu Trúc Động Từ & Mẫu Câu Đặc Biệt',
  subtitle: 'Gerund vs. Infinitive & Special TOEIC Structures',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6 (dựa trên các cấu trúc bẫy phổ biến nhất)',
  sourceTheory: 'AZ Grammar 2022 (nội bộ AZEnglish)',

  theory: [
    {
      group: 'Động từ + V-ing hay + to V?',
      tip: [
        'Nhóm CHỈ đi với V-ing (danh động từ): avoid, consider, suggest, recommend, enjoy, finish, mind, deny, admit, quit, postpone, delay, practice, risk, appreciate, keep.',
        'Nhóm CHỈ đi với to V: decide, want, hope, expect, promise, agree, offer, plan, refuse, afford, manage, fail.',
        'Một số động từ ĐỔI NGHĨA tuỳ theo V-ing hay to V: remember/forget + V-ing (nhớ/quên đã LÀM rồi) >< remember/forget + to V (nhớ/quên PHẢI làm); stop + V-ing (dừng hẳn việc đang làm) >< stop + to V (dừng lại ĐỂ làm việc khác).',
        'Cấu trúc "V + O + to V": require, ask, tell, want, expect, allow, encourage, invite, remind, advise + tân ngữ + to V.',
        'Ba động từ đặc biệt "let/make/have + O + V nguyên mẫu KHÔNG "to"" (khiến/cho phép ai làm gì) — khác với nhóm "V + O + to V" ở trên.',
        '"It is + adj (essential/important/necessary/advisable) + to V" — diễn tả điều cần thiết/quan trọng phải làm, luôn dùng to V.'
      ]
    },
    {
      group: 'Mẫu câu đặc biệt hay gặp trong TOEIC',
      tip: [
        '"Would rather + V nguyên mẫu (không "to")" >< "Would prefer + to V" — cùng nghĩa "thích/muốn hơn" nhưng cấu trúc khác nhau.',
        '"It\'s (high) time + S + V (chia ở quá khứ đơn)" — diễn tả điều lẽ ra phải làm nhưng chưa làm, dù đang nói về hiện tại/tương lai.',
        '"Used to + V nguyên mẫu" (đã từng làm gì, nay không còn) >< "be/get used to + V-ing" (quen với việc gì ở hiện tại) — "to" trong trường hợp sau là giới từ.',
        'Thể sai khiến (causative): "have/get + O (vật) + V-ed/V3" (bị động — nhờ ai làm cho mình) >< "have + O (người) + V nguyên mẫu" (chủ động — nhờ ai đó trực tiếp làm).',
        '"Had better + V nguyên mẫu (không "to")" — lời khuyên mạnh, mang tính cảnh báo nếu không làm theo. Phủ định: "had better not + V0".',
        '"Be busy + V-ing" (bận làm gì), "be about to + V" (sắp sửa làm gì), "spend/waste time + V-ing" (dành/lãng phí thời gian làm gì).'
      ]
    }
  ],

  quizzes: [
    {
      id: 'ct-1', title: '1. Động từ + V-ing hay + to V',
      items: [
        {q:'The manager suggested ------ the meeting to next Monday.', choices:['postponing','to postpone','postpone','postponed'], correct:0, explain:'Dịch: Quản lý đề xuất hoãn cuộc họp sang thứ Hai tuần sau. — "suggest" luôn theo sau bởi V-ing (danh động từ), không dùng "to V". Mẹo thêm: nhóm động từ chỉ đi với V-ing cần nhớ: avoid, consider, suggest, enjoy, finish, mind, deny, admit, quit, postpone, delay, practice, risk, recommend.'},
        {q:'We have decided ------ the new marketing strategy starting next quarter.', choices:['to implement','implementing','implement','implemented'], correct:0, explain:'Dịch: Chúng tôi đã quyết định triển khai chiến lược marketing mới bắt đầu từ quý tới. — "decide" luôn theo sau bởi "to V". Mẹo thêm: nhóm động từ chỉ đi với "to V" cần nhớ: decide, want, hope, expect, promise, agree, offer, plan, refuse, afford, manage, fail.'},
        {q:'I remember ------ the door before I left the office yesterday.', choices:['locking','to lock','lock','locked'], correct:0, explain:'Dịch: Tôi nhớ là mình đã khóa cửa trước khi rời văn phòng hôm qua. — "remember + V-ing" = nhớ đã làm gì (đã xảy ra trong quá khứ). Mẹo thêm: phân biệt với "remember + to V" = nhớ PHẢI làm gì (một việc chưa xảy ra) — ví dụ: "Remember to lock the door before you leave" (nhắc nhở).'},
        {q:"Don't forget ------ the client before the deadline.", choices:['to contact','contacting','contact','contacted'], correct:0, explain:'Dịch: Đừng quên liên hệ với khách hàng trước hạn chót. — "forget + to V" = quên PHẢI làm gì (việc chưa làm). Mẹo thêm: "forget + V-ing" = quên rằng đã làm gì đó trong quá khứ (thường dùng trong câu phủ định như "I\'ll never forget visiting Paris").'},
        {q:'The technician stopped ------ the machine when he noticed unusual noise.', choices:['to check','checking','check','checked'], correct:0, explain:'Dịch: Kỹ thuật viên dừng lại để kiểm tra máy khi anh nghe thấy tiếng ồn bất thường. — "stop + to V" = dừng việc đang làm ĐỂ làm việc khác (to V ở đây mang nghĩa mục đích). Mẹo thêm: "stop + V-ing" = dừng hẳn việc đang làm (ví dụ: "He stopped smoking" = anh ấy đã bỏ hút thuốc).'},
        {q:"Would you mind ------ the window? It's getting cold in here.", choices:['closing','to close','close','closed'], correct:0, explain:'Dịch: Bạn có phiền đóng cửa sổ lại không? Trong này đang lạnh dần. — "would you mind + V-ing" là cấu trúc lịch sự để nhờ vả ai đó làm gì, luôn theo sau bởi V-ing. Mẹo thêm: đây là mẫu câu giao tiếp rất phổ biến trong TOEIC — "mind" không bao giờ theo sau bởi "to V".'},
        {q:'The HR policy requires all new hires ------ an orientation session within their first week.', choices:['to attend','attending','attend','attended'], correct:0, explain:'Dịch: Chính sách nhân sự yêu cầu tất cả nhân viên mới tham dự một buổi định hướng trong tuần đầu tiên. — Cấu trúc "require + O + to V" (yêu cầu ai làm gì). Mẹo thêm: các động từ đi theo mẫu "V + O + to V" thường gặp: require, ask, tell, want, expect, allow, encourage, invite, remind, advise.'},
        {q:'The supervisor let the new employee ------ the client meeting on her own.', choices:['handle','to handle','handling','handled'], correct:0, explain:'Dịch: Người giám sát để nhân viên mới tự xử lý buổi họp với khách hàng. — "let/make/have + O + V (nguyên mẫu không "to")" là các động từ khiến/cho phép đặc biệt. Mẹo thêm: 3 động từ đặc biệt này (let, make, have) không dùng "to V" như các động từ "V + O + to V" thông thường khác (như "allow/require/ask + O + to V").'},
        {q:'Customers appreciate ------ prompt responses to their inquiries.', choices:['receiving','to receive','receive','received'], correct:0, explain:'Dịch: Khách hàng đánh giá cao việc nhận được phản hồi nhanh chóng cho các câu hỏi của họ. — "appreciate" chỉ đi với V-ing, không dùng "to V". Mẹo thêm: "appreciate" thường xuất hiện trong email/thông báo TOEIC với nghĩa "đánh giá cao/biết ơn về việc gì" + V-ing.'},
        {q:'It is essential ------ all safety procedures before operating this equipment.', choices:['to review','reviewing','review','reviewed'], correct:0, explain:'Dịch: Điều cần thiết là phải xem xét lại tất cả quy trình an toàn trước khi vận hành thiết bị này. — Cấu trúc "It is + adj (essential/important/necessary/advisable) + to V" diễn tả điều cần thiết/quan trọng phải làm. Mẹo thêm: đây là mẫu câu rất phổ biến trong thông báo/quy định TOEIC Part 6-7 — luôn dùng "to V" sau tính từ chỉ mức độ cần thiết.'},
        {"q": "The manager recommended ------- the meeting earlier.", "choices": ["starting", "to start", "start", "started"], "correct": 0, "explain": "Dịch: Quản lý đề nghị bắt đầu họp sớm hơn. — \"recommend + V-ing\"."},
        {"q": "We plan ------- a new branch next year.", "choices": ["to open", "opening", "open", "opened"], "correct": 0, "explain": "Dịch: Chúng tôi dự định mở chi nhánh mới năm sau. — \"plan + to V\"."},
        {"q": "Ms. Kim finished ------- the report at 6 P.M.", "choices": ["writing", "to write", "write", "written"], "correct": 0, "explain": "Dịch: Bà Kim viết xong báo cáo lúc 6 giờ. — \"finish + V-ing\"."},
        {"q": "The company refused ------- the price.", "choices": ["to lower", "lowering", "lower", "lowered"], "correct": 0, "explain": "Dịch: Công ty từ chối hạ giá. — \"refuse + to V\"."},
        {"q": "He denied ------- the confidential file.", "choices": ["opening", "to open", "open", "opened by"], "correct": 0, "explain": "Dịch: Ông phủ nhận đã mở tệp mật. — \"deny + V-ing\"."},
        {"q": "They hope ------- the project by June.", "choices": ["to complete", "completing", "complete", "completed"], "correct": 0, "explain": "Dịch: Họ hy vọng xong dự án trước tháng Sáu. — \"hope + to V\"."},
        {"q": "Please consider ------- our newsletter.", "choices": ["subscribing to", "to subscribe to", "subscribe", "subscribed to"], "correct": 0, "explain": "Dịch: Hãy cân nhắc đăng ký nhận bản tin. — \"consider + V-ing\"."},
        {"q": "The client agreed ------- the contract.", "choices": ["to sign", "signing", "sign", "signed"], "correct": 0, "explain": "Dịch: Khách đồng ý ký hợp đồng. — \"agree + to V\"."},
        {"q": "I don't mind ------- late tonight.", "choices": ["working", "to work", "work", "worked"], "correct": 0, "explain": "Dịch: Tôi không ngại làm muộn tối nay. — \"mind + V-ing\"."},
        {"q": "We can't afford ------- another delay.", "choices": ["to have", "having", "have", "had"], "correct": 0, "explain": "Dịch: Chúng tôi không thể chịu thêm một lần chậm trễ nữa. — \"afford + to V\"."},
        {"q": "The team managed ------- the deadline.", "choices": ["to meet", "meeting", "meet", "met"], "correct": 0, "explain": "Dịch: Nhóm xoay xở kịp hạn. — \"manage + to V\"."},
        {"q": "She keeps ------- the same mistake.", "choices": ["making", "to make", "make", "made"], "correct": 0, "explain": "Dịch: Bà cứ mắc cùng một lỗi. — \"keep + V-ing\"."},
        {"q": "The board decided ------- the offer.", "choices": ["to accept", "accepting", "accept", "accepted"], "correct": 0, "explain": "Dịch: HĐQT quyết định nhận đề nghị. — \"decide + to V\"."},
        {"q": "We should avoid ------- too much paper.", "choices": ["wasting", "to waste", "waste", "wasted"], "correct": 0, "explain": "Dịch: Chúng ta nên tránh lãng phí giấy. — \"avoid + V-ing\"."},
        {"q": "He promised ------- the files by noon.", "choices": ["to send", "sending", "send", "sent"], "correct": 0, "explain": "Dịch: Ông hứa gửi tệp trước trưa. — \"promise + to V\"."}
      ]
    },
    {
      id: 'ct-2', title: '2. Mẫu câu đặc biệt: would rather, used to, causative, had better...',
      items: [
        {q:'I would rather ------ overtime this week than work on the weekend.', choices:['work','to work','working','worked'], correct:0, explain:'Dịch: Tôi thà làm thêm giờ tuần này còn hơn là làm việc vào cuối tuần. — "would rather + V nguyên mẫu (không "to")" diễn tả sự lựa chọn ưu tiên. Mẹo thêm: so sánh với "would prefer + to V" (cùng nghĩa "thích hơn") nhưng "would prefer" cần "to V" còn "would rather" thì không.'},
        {q:'I would prefer ------ the report by email rather than by phone.', choices:['to receive','receiving','receive','received'], correct:0, explain:'Dịch: Tôi muốn nhận báo cáo qua email hơn là qua điện thoại. — "would prefer + to V" diễn tả sự ưu tiên/thích hơn. Mẹo thêm: cấu trúc đầy đủ "would prefer to V (rather than V0)" — phần sau "rather than" dùng động từ nguyên mẫu không "to".'},
        {q:"It's high time the company ------ its outdated software system.", choices:['updated','update','updates','to update'], correct:0, explain:'Dịch: Đã đến lúc công ty phải cập nhật hệ thống phần mềm lỗi thời của mình. — Cấu trúc "It\'s (high) time + S + V (quá khứ đơn)" diễn tả điều lẽ ra phải làm nhưng chưa làm (mang tính giả định). Mẹo thêm: dù nói về hiện tại/tương lai, động từ sau "it\'s time" luôn chia ở dạng QUÁ KHỨ ĐƠN — điểm rất dễ gây nhầm lẫn.'},
        {q:'She used to ------ in the finance department before she was promoted.', choices:['work','working','worked','works'], correct:0, explain:'Dịch: Cô ấy từng làm việc ở phòng tài chính trước khi được thăng chức. — "used to + V nguyên mẫu" = đã từng làm gì trong quá khứ (nay không còn). Mẹo thêm: phân biệt với "be/get used to + V-ing" = quen với việc gì (ở hiện tại) — hai cấu trúc rất dễ nhầm vì đều có "used to".'},
        {q:'After moving to Hanoi, he quickly got used to ------ public transportation.', choices:['using','use','to use','used'], correct:0, explain:'Dịch: Sau khi chuyển đến Hà Nội, anh ấy nhanh chóng quen với việc sử dụng phương tiện công cộng. — "get used to + V-ing" = dần trở nên quen với việc gì. Mẹo thêm: "to" trong "be/get used to" là giới từ, nên theo sau luôn là V-ing hoặc danh từ, KHÔNG phải "to V nguyên mẫu".'},
        {q:"The company had the entire office ------ before the client's visit.", choices:['renovated','renovate','to renovate','renovating'], correct:0, explain:'Dịch: Công ty đã cho sửa sang lại toàn bộ văn phòng trước chuyến thăm của khách hàng. — Cấu trúc bị động "have + O (vật) + V-ed/V3" (nhờ/thuê ai đó làm gì cho mình) — vật "the entire office" bị tác động nên dùng V-ed. Mẹo thêm: nếu là "have + O (người) + V0" thì chủ động — ví dụ: "have the technician fix the printer" (nhờ kỹ thuật viên sửa máy in).'},
        {q:'You had better ------ the contract carefully before signing it.', choices:['review','to review','reviewing','reviewed'], correct:0, explain:'Dịch: Bạn nên xem lại hợp đồng cẩn thận trước khi ký. — "had better + V nguyên mẫu (không "to")" mang nghĩa khuyên nhủ mạnh (nên làm gì, nếu không sẽ có hậu quả). Mẹo thêm: dạng phủ định là "had better not + V0" (ví dụ: "You had better not be late").'},
        {q:'The staff are busy ------ for the upcoming product launch.', choices:['preparing','to prepare','prepare','prepared'], correct:0, explain:'Dịch: Nhân viên đang bận chuẩn bị cho buổi ra mắt sản phẩm sắp tới. — "be busy + V-ing" = bận rộn làm gì. Mẹo thêm: đây là một trong nhóm cấu trúc cố định luôn theo sau bởi V-ing, tương tự "spend/waste time + V-ing".'},
        {q:'The board is about ------ a final decision on the merger.', choices:['to make','making','make','made'], correct:0, explain:'Dịch: Hội đồng quản trị sắp đưa ra quyết định cuối cùng về việc sáp nhập. — "be about to + V" = sắp sửa làm gì (tương lai rất gần). Mẹo thêm: không nhầm với "be about + V-ing" — "about" ở đây là một phần cố định của cụm "be about to V", không phải giới từ đứng một mình.'},
        {q:'Employees should not ------ submitting their expense reports until the last minute.', choices:['delay','to delay','delaying','delayed'], correct:0, explain:'Dịch: Nhân viên không nên trì hoãn việc nộp báo cáo chi phí đến phút chót. — "delay + V-ing" = trì hoãn việc gì. Mẹo thêm: "delay" cùng nhóm với "postpone" — cả hai đều chỉ đi với V-ing, không dùng "to V".'},
        {"q": "I would rather ------- by train than by car.", "choices": ["travel", "to travel", "traveling", "traveled"], "correct": 0, "explain": "Dịch: Tôi thà đi tàu hơn đi xe. — \"would rather + V0\"."},
        {"q": "She used to ------- in London before moving here.", "choices": ["live", "living", "lived", "lives"], "correct": 0, "explain": "Dịch: Bà từng sống ở London trước khi chuyển đến đây. — \"used to + V0\"."},
        {"q": "The staff are used to ------- early.", "choices": ["starting", "start", "started", "starts"], "correct": 0, "explain": "Dịch: Nhân viên quen bắt đầu sớm. — \"be used to + V-ing\"."},
        {"q": "We had the carpets ------- last week.", "choices": ["cleaned", "clean", "cleaning", "to clean"], "correct": 0, "explain": "Dịch: Tuần trước chúng tôi cho người giặt thảm. — \"have + vật + V3\"."},
        {"q": "The manager had his assistant ------- the tickets.", "choices": ["book", "to book", "booking", "booked"], "correct": 0, "explain": "Dịch: Quản lý nhờ trợ lý đặt vé. — \"have + người + V0\"."},
        {"q": "It's time we ------- a decision.", "choices": ["made", "make", "will make", "making"], "correct": 0, "explain": "Dịch: Đã đến lúc chúng ta ra quyết định. — \"It's time + S + quá khứ\"."},
        {"q": "You had better ------- your work before submitting it.", "choices": ["check", "to check", "checking", "checked"], "correct": 0, "explain": "Dịch: Bạn nên kiểm tra bài trước khi nộp. — \"had better + V0\"."},
        {"q": "I would prefer ------- at home today.", "choices": ["to work", "working", "work", "worked"], "correct": 0, "explain": "Dịch: Hôm nay tôi muốn làm việc ở nhà hơn. — \"would prefer + to V\"."},
        {"q": "He spends a lot of time ------- emails.", "choices": ["answering", "to answer", "answer", "answered"], "correct": 0, "explain": "Dịch: Ông dành nhiều thời gian trả lời email. — \"spend time + V-ing\"."},
        {"q": "They got the car ------- at the garage.", "choices": ["repaired", "repair", "repairing", "to repair"], "correct": 0, "explain": "Dịch: Họ mang xe đi sửa ở gara. — \"get + vật + V3\"."},
        {"q": "We are about ------- the meeting.", "choices": ["to begin", "beginning", "begin", "begun"], "correct": 0, "explain": "Dịch: Chúng ta sắp bắt đầu họp. — \"be about to + V0\"."},
        {"q": "It is no use ------- about the past.", "choices": ["worrying", "to worry", "worry", "worried"], "correct": 0, "explain": "Dịch: Lo lắng về quá khứ chẳng ích gì. — \"It's no use + V-ing\"."},
        {"q": "She is busy ------- for the presentation.", "choices": ["preparing", "to prepare", "prepare", "prepared"], "correct": 0, "explain": "Dịch: Bà bận chuẩn bị bài thuyết trình. — \"be busy + V-ing\"."},
        {"q": "The manager let us ------- early on Friday.", "choices": ["leave", "to leave", "leaving", "left"], "correct": 0, "explain": "Dịch: Quản lý cho chúng tôi về sớm thứ Sáu. — \"let + O + V0\"."},
        {"q": "I'd rather you ------- the report by email.", "choices": ["sent", "send", "sending", "to send"], "correct": 0, "explain": "Dịch: Tôi muốn bạn gửi báo cáo qua email hơn. — \"would rather + S + quá khứ\"."}
      ]
    },
    {
      id: 'ct-3', title: "3. Luyện thêm: V-ing / to V / V0 trong câu TOEIC",
      items: [
        {"q": "The company is considering ------- a second warehouse in the region.", "choices": ["opening", "to open", "open", "opened"], "correct": 0, "explain": "Dịch: Công ty đang cân nhắc mở kho thứ hai trong vùng. — \"consider + V-ing\"."},
        {"q": "Ms. Ruiz agreed ------- the training session on Monday.", "choices": ["to lead", "leading", "lead", "led"], "correct": 0, "explain": "Dịch: Bà Ruiz đồng ý dẫn buổi đào tạo thứ Hai. — \"agree + to V\"."},
        {"q": "We look forward to ------- you at the annual banquet.", "choices": ["seeing", "see", "be seen", "saw"], "correct": 0, "explain": "Dịch: Chúng tôi mong được gặp bạn tại tiệc thường niên. — \"look forward to + V-ing\" (\"to\" là giới từ)."},
        {"q": "The manager made the team ------- the report again.", "choices": ["revise", "to revise", "revising", "revised"], "correct": 0, "explain": "Dịch: Quản lý bắt nhóm sửa lại báo cáo. — \"make + O + V0\" (khiến/bắt ai làm gì)."},
        {"q": "Mr. Holt is responsible for ------- that all orders are shipped on time.", "choices": ["ensuring", "ensure", "to ensure", "ensured"], "correct": 0, "explain": "Dịch: Ông Holt chịu trách nhiệm bảo đảm mọi đơn được giao đúng hạn. — Sau giới từ \"for\" dùng V-ing."},
        {"q": "Visitors are not permitted ------- photographs inside the gallery.", "choices": ["to take", "taking", "take", "taken"], "correct": 0, "explain": "Dịch: Khách không được phép chụp ảnh trong phòng trưng bày. — \"be permitted + to V\" (bị động của permit + O + to V)."},
        {"q": "The new system enables staff ------- schedules from their phones.", "choices": ["to update", "updating", "update", "updated"], "correct": 0, "explain": "Dịch: Hệ thống mới cho phép nhân viên cập nhật lịch từ điện thoại. — \"enable + O + to V\"."},
        {"q": "Customers who wish ------- their subscription should call our service line.", "choices": ["to cancel", "canceling", "cancel", "canceled"], "correct": 0, "explain": "Dịch: Khách muốn huỷ gói đăng ký nên gọi tổng đài. — \"wish + to V\"."},
        {"q": "We apologize for ------- you to wait so long.", "choices": ["causing", "cause", "to cause", "caused"], "correct": 0, "explain": "Dịch: Chúng tôi xin lỗi vì đã để bạn chờ lâu. — \"apologize for + V-ing\"."},
        {"q": "Please avoid ------- personal calls during business hours.", "choices": ["making", "to make", "make", "made"], "correct": 0, "explain": "Dịch: Vui lòng tránh gọi điện việc riêng trong giờ làm. — \"avoid + V-ing\"."},
        {"q": "The director had her assistant ------- the meeting room.", "choices": ["book", "to book", "booking", "booked"], "correct": 0, "explain": "Dịch: Giám đốc nhờ trợ lý đặt phòng họp. — \"have + người + V0\" (nhờ ai làm gì)."},
        {"q": "It is worth ------- the extended warranty for expensive appliances.", "choices": ["buying", "to buy", "buy", "bought"], "correct": 0, "explain": "Dịch: Mua thêm bảo hành mở rộng cho đồ gia dụng đắt tiền là đáng. — \"be worth + V-ing\" (đáng làm gì)."},
        {"q": "Mr. Lee stopped ------- when the boss came in.", "choices": ["talking", "to talk", "talk", "talked"], "correct": 0, "explain": "Dịch: Ông Lee ngừng nói chuyện khi sếp bước vào. — \"stop + V-ing\" = dừng hẳn việc đang làm."},
        {"q": "Remember ------- the lights before you leave.", "choices": ["to turn off", "turning off", "turn off", "turned off"], "correct": 0, "explain": "Dịch: Nhớ tắt đèn trước khi về. — \"remember + to V\" = nhớ phải làm."},
        {"q": "I remember ------- him at the conference last year.", "choices": ["meeting", "to meet", "meet", "met"], "correct": 0, "explain": "Dịch: Tôi nhớ đã gặp ông ở hội nghị năm ngoái. — \"remember + V-ing\" = nhớ đã làm."},
        {"q": "The new rules require employees ------- ID badges.", "choices": ["to wear", "wearing", "wear", "worn"], "correct": 0, "explain": "Dịch: Quy định mới yêu cầu nhân viên đeo thẻ. — \"require + O + to V\"."},
        {"q": "She tried ------- the file, but it was too large.", "choices": ["to send", "sending", "send", "sent"], "correct": 0, "explain": "Dịch: Bà cố gửi tệp nhưng nó quá lớn. — \"try + to V\" = cố gắng."},
        {"q": "The manager asked us ------- the room.", "choices": ["to clean", "cleaning", "clean", "cleaned"], "correct": 0, "explain": "Dịch: Quản lý nhờ chúng tôi dọn phòng. — \"ask + O + to V\"."},
        {"q": "We regret ------- you that the event is canceled.", "choices": ["to inform", "informing", "inform", "informed"], "correct": 0, "explain": "Dịch: Chúng tôi rất tiếc phải thông báo sự kiện bị huỷ. — \"regret + to V\" = tiếc phải (thông báo)."},
        {"q": "I don't regret ------- this job.", "choices": ["taking", "to take", "take", "took"], "correct": 0, "explain": "Dịch: Tôi không hối hận đã nhận công việc này. — \"regret + V-ing\" = hối tiếc đã làm."},
        {"q": "The trainer made everyone ------- the exercise again.", "choices": ["do", "to do", "doing", "done"], "correct": 0, "explain": "Dịch: Huấn luyện viên bắt mọi người làm lại bài tập. — \"make + O + V0\"."},
        {"q": "It is important ------- the instructions carefully.", "choices": ["to follow", "following", "follow", "followed"], "correct": 0, "explain": "Dịch: Quan trọng là làm theo hướng dẫn cẩn thận. — \"It is important + to V\"."},
        {"q": "We are looking forward to ------- from you.", "choices": ["hearing", "hear", "heard", "be heard"], "correct": 0, "explain": "Dịch: Chúng tôi mong nhận phản hồi từ bạn. — \"look forward to + V-ing\"."},
        {"q": "The supervisor allowed the staff ------- early.", "choices": ["to leave", "leaving", "leave", "left"], "correct": 0, "explain": "Dịch: Giám sát viên cho nhân viên về sớm. — \"allow + O + to V\"."},
        {"q": "He is considering ------- jobs.", "choices": ["changing", "to change", "change", "changed"], "correct": 0, "explain": "Dịch: Ông đang cân nhắc đổi việc. — \"consider + V-ing\"."}
      ]
    }
  ],

  vocab: [
    {word:'implement', ipa:'/ˈɪmplɪment/', meaning:'triển khai, thực thi', example:'We have decided to implement the new marketing strategy.', note:'danh từ: implementation'},
    {word:'orientation session', ipa:'/ˌɔːriənˈteɪʃn ˈseʃn/', meaning:'buổi định hướng (cho nhân viên mới)', example:'All new hires must attend an orientation session.', note:'thường dùng trong tuần đầu đi làm'},
    {word:'prompt', ipa:'/prɑːmpt/', meaning:'nhanh chóng, kịp thời', example:'Customers appreciate receiving prompt responses to their inquiries.', note:'trạng từ: promptly'},
    {word:'inquiry', ipa:'/ɪnˈkwaɪəri/', meaning:'câu hỏi, thắc mắc', example:'Customers appreciate prompt responses to their inquiries.', note:'động từ: inquire (hỏi thăm)'},
    {word:'renovate', ipa:'/ˈrenəveɪt/', meaning:'sửa sang, tu sửa (công trình)', example:'The company had the entire office renovated.', note:'danh từ: renovation'},
    {word:'expense report', ipa:'/ɪkˈspens rɪˌpɔːrt/', meaning:'báo cáo chi phí', example:'Employees should not delay submitting their expense reports.', note:'thường nộp hàng tháng ở công ty'},
    {word:'launch', ipa:'/lɔːntʃ/', meaning:'ra mắt (sản phẩm), buổi ra mắt', example:'The staff are busy preparing for the upcoming product launch.', note:'vừa là danh từ vừa là động từ'},
    {word:'promoted', ipa:'/prəˈmoʊtɪd/', meaning:'được thăng chức', example:'She used to work in the finance department before she was promoted.', note:'danh từ: promotion'}
  ]
};
