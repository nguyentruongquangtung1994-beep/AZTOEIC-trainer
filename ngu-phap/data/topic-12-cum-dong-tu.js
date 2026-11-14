window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['cum-dong-tu'] = {
  id: 'cum-dong-tu',
  order: 12,
  title: 'Cụm Động Từ',
  subtitle: 'Phrasal Verbs',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2nd edition — Phrasal Verbs (Cụm động từ)',
  note: 'Bài tập do AZEnglish soạn thêm theo danh sách phrasal verbs trong sách AZ Grammar (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Cụm động từ là gì?',
      tip: [
        'Cụm động từ = động từ + giới từ/trạng từ, tạo nghĩa KHÁC với nghĩa của từng từ riêng lẻ: carry (mang) → carry out (thực hiện); look (nhìn) → look forward to (trông đợi).',
        'Có thể TÁCH RỜI (tân ngữ chen giữa): She turned the job down. · Please fill this form out.',
        'KHÔNG thể tách rời: She looks after her parents. · We ran into unexpected issues.',
        'Đi kèm giới từ thứ hai (3 thành phần): run out of, get along with, keep up with, come up with, cut down on, look forward to.',
        'Khi tân ngữ là đại từ (it, them, him…), phrasal verb tách rời BẮT BUỘC phải tách: turn it down (không nói turn down it).'
      ]
    },
    {
      group: 'Phrasal verbs theo chủ đề TOEIC',
      tenses: [
        {
          name: 'Công việc, văn phòng',
          form: 'carry out · come up with · fill out · follow up (on) · hand in · look over · put off · turn in · keep up with',
          usage: ['carry out: thực hiện — The company is carrying out a new policy.', 'come up with: nghĩ ra — She came up with a great marketing idea.', 'fill out: điền (mẫu đơn) — Please fill out this application form.', 'hand in / turn in: nộp — Employees must hand in their reports by Friday.', 'look over: xem xét — Please look over the contract carefully.', 'keep up with: theo kịp — It’s hard to keep up with all the new updates.'],
          signals: 'Gặp "form/report/contract" → nghĩ tới fill out / hand in / look over.'
        },
        {
          name: 'Tài chính, kế toán',
          form: 'account for · cut down on · pay off · run up (a bill) · take out (a loan) · write off',
          usage: ['cut down on: cắt giảm — The company needs to cut down on expenses.', 'pay off: trả hết nợ — She finally paid off her student loans.', 'run up (a bill): tích lũy nợ — He ran up a huge credit card bill.', 'take out (a loan): vay tiền — The company took out a loan for expansion.', 'write off: xóa nợ, ghi giảm — The company had to write off bad debts.'],
          signals: 'Chủ đề tiền bạc: loan → take out / pay off; bill → run up; bad debts → write off.'
        },
        {
          name: 'Giao tiếp, email, lịch trình',
          form: 'call back · get back to · put through · wrap up · hold up · call off · put off · bring forward · run over',
          usage: ['get back to: phản hồi lại — I’ll get back to you as soon as possible.', 'put through: nối máy — Can you put me through to the manager?', 'call off: hủy bỏ — The event was called off due to rain.', 'put off: hoãn lại — The meeting was put off until next week.', 'bring forward: dời sớm hơn — The meeting has been brought forward to Monday.', 'run over: quá giờ — The meeting ran over its scheduled time.'],
          signals: 'Hoãn = put off / postpone; hủy = call off / cancel; dời sớm = bring forward.'
        },
        {
          name: 'Vận chuyển, du lịch & sự cố',
          form: 'check in/out · pick up · set off · break down · figure out · run into · sort out · run out of · set up · take over · find out',
          usage: ['check in / check out: làm thủ tục / trả phòng — We need to check out by noon.', 'set off: khởi hành — They set off for their trip early in the morning.', 'break down: hỏng hóc — My car broke down on the way to work.', 'figure out / sort out: tìm ra / giải quyết — I need to figure out a solution quickly.', 'run into: tình cờ gặp, gặp sự cố — We ran into unexpected issues.', 'run out of: hết, cạn — We have run out of paper.', 'set up: thành lập — They set up a new business. · take over: tiếp quản — The company was taken over by a bigger firm.'],
          signals: 'Phân biệt run out of (hết) — run into (gặp) — run over (quá giờ) — run up (tích lũy): cùng gốc "run" nhưng nghĩa hoàn toàn khác.'
        }
      ]
    }
  ],

  quizzes: [
    {
      id: 'cdt2-1', title: '1. Phrasal verbs: công việc & tài chính',
      items: [
        {q:'Please ------ this application form and return it by Friday.', choices:['put off','fill out','call off','take over'], correct:1, explain:'Dịch: Vui lòng điền vào mẫu đơn này và gửi lại trước thứ Sáu. — Giải thích: điền mẫu đơn = "fill out". Mẹo thêm: "put off" (hoãn) và "call off" (hủy) đều không hợp nghĩa với "form".'},
        {q:'Employees must ------ their expense reports by Friday.', choices:['hand in','break down','hold up','look up'], correct:0, explain:'Dịch: Nhân viên phải nộp báo cáo chi phí trước thứ Sáu. — Giải thích: nộp tài liệu = "hand in" (hoặc "turn in"). Mẹo thêm: "hold up" là làm chậm trễ, "look up" là tra cứu.'},
        {q:'Please ------ the contract carefully before you sign it.', choices:['look forward','look after','look over','look up'], correct:2, explain:'Dịch: Vui lòng xem kỹ hợp đồng trước khi ký. — Giải thích: xem xét, kiểm tra = "look over". Mẹo thêm: "look after" là chăm sóc; "look forward to" là trông đợi (phải có "to").'},
        {q:'I will ------ your request and get back to you tomorrow.', choices:['run into','put through','turn down','follow up on'], correct:3, explain:'Dịch: Tôi sẽ theo dõi yêu cầu của bạn và phản hồi lại vào ngày mai. — Giải thích: tiếp tục xử lý một việc = "follow up on". Mẹo thêm: "turn down" là từ chối — không hợp với câu hứa phản hồi.'},
        {q:'She ------ a great idea for the marketing campaign.', choices:['came down on','came out of','came across to','came up with'], correct:3, explain:'Dịch: Cô ấy nghĩ ra một ý tưởng tuyệt vời cho chiến dịch marketing. — Giải thích: nghĩ ra, đề xuất (ý tưởng) = "come up with" (cụm 3 thành phần). Mẹo thêm: động từ đứng ở quá khứ "came" nhưng cụm không đổi.'},
        {q:'The company had to ------ bad debts last year.', choices:['write out of','pay up','write off','take out'], correct:2, explain:'Dịch: Năm ngoái công ty phải xóa các khoản nợ xấu. — Giải thích: xóa sổ khoản nợ không thu hồi được = "write off". Mẹo thêm: "bad debt" (nợ xấu) thường đi với "write off".'},
        {q:'He ------ a huge credit card bill last month.', choices:['ran out','ran up','ran over','ran off'], correct:1, explain:'Dịch: Tháng trước anh ấy đã tích lũy một hóa đơn thẻ tín dụng khổng lồ. — Giải thích: "run up a bill" = làm hóa đơn/nợ tăng lên. Mẹo thêm: "run out" là cạn kiệt (không có tân ngữ "bill").'},
        {q:'The firm ------ a loan of $2 million to expand its factory.', choices:['took out','took over','took up','took off'], correct:0, explain:'Dịch: Công ty đã vay 2 triệu đô để mở rộng nhà máy. — Giải thích: vay tiền = "take out a loan". Mẹo thêm: "take over" là tiếp quản, dễ nhầm.'},
        {q:'The company needs to ------ expenses in order to increase its profit.', choices:['cut up with','cut down on','cut out at','cut off from'], correct:1, explain:'Dịch: Công ty cần cắt giảm chi phí để tăng lợi nhuận. — Giải thích: cắt giảm = "cut down on" (cụm 3 thành phần). Mẹo thêm: chú ý giới từ cuối "on" — thiếu nó cụm sẽ đổi nghĩa.'},
        {q:'It is hard to ------ all the new software updates.', choices:['keep in','keep away','keep out of','keep up with'], correct:3, explain:'Dịch: Rất khó để theo kịp tất cả các bản cập nhật phần mềm mới. — Giải thích: theo kịp = "keep up with". Mẹo thêm: "keep out of" là tránh xa, không dính vào.'},
        {"q": "The company had to ------- 50 workers due to low sales.", "choices": ["lay off", "lay out", "lay down", "lay by"], "correct": 0, "explain": "Dịch: Công ty phải cho 50 công nhân nghỉ việc vì doanh số thấp. — \"lay off\" = sa thải (do cắt giảm)."},
        {"q": "Please ------- the attached file and send your comments.", "choices": ["look over", "look after", "look for", "look up to"], "correct": 0, "explain": "Dịch: Vui lòng xem qua tệp đính kèm và góp ý. — \"look over\" = xem qua, kiểm tra."},
        {"q": "We need to ------- costs this quarter.", "choices": ["cut down on", "cut off", "cut out of", "cut up"], "correct": 0, "explain": "Dịch: Quý này cần cắt giảm chi phí. — \"cut down on\" = giảm bớt."},
        {"q": "Ms. Lee will ------- the new branch in Busan.", "choices": ["set up", "set off", "set back", "set in"], "correct": 0, "explain": "Dịch: Bà Lee sẽ thành lập chi nhánh mới ở Busan. — \"set up\" = thành lập."},
        {"q": "The bank ------- my loan application.", "choices": ["turned down", "turned up", "turned on", "turned over to"], "correct": 0, "explain": "Dịch: Ngân hàng từ chối đơn vay của tôi. — \"turn down\" = từ chối."},
        {"q": "The sales team ------- its target last month.", "choices": ["fell short of", "fell off", "fell back", "fell out with"], "correct": 0, "explain": "Dịch: Tháng trước nhóm bán hàng không đạt mục tiêu. — \"fall short of\" = không đạt."},
        {"q": "I will ------- the figures with the accountant.", "choices": ["check over", "check out of", "check in", "check up"], "correct": 0, "explain": "Dịch: Tôi sẽ rà lại số liệu với kế toán. — \"check over\" = kiểm tra kỹ."},
        {"q": "The firm ------- a loan to buy new equipment.", "choices": ["took out", "took off", "took after", "took up with"], "correct": 0, "explain": "Dịch: Công ty vay một khoản để mua thiết bị mới. — \"take out a loan\" = vay tiền."},
        {"q": "Prices have ------- since last year.", "choices": ["gone up", "gone off", "gone out", "gone by"], "correct": 0, "explain": "Dịch: Giá đã tăng từ năm ngoái. — \"go up\" = tăng."},
        {"q": "Please ------- your name and address on the form.", "choices": ["write down", "write off", "write up to", "write back"], "correct": 0, "explain": "Dịch: Vui lòng ghi tên và địa chỉ lên phiếu. — \"write down\" = ghi lại."},
        {"q": "We ------- an agreement after long negotiations.", "choices": ["came to", "came over", "came by", "came off of"], "correct": 0, "explain": "Dịch: Sau đàm phán dài, chúng tôi đi đến thoả thuận. — \"come to an agreement\"."},
        {"q": "The manager will ------- the details later.", "choices": ["work out", "work off", "work up", "work against"], "correct": 0, "explain": "Dịch: Quản lý sẽ tính toán chi tiết sau. — \"work out\" = tìm ra, giải quyết."},
        {"q": "The investors ------- of the project.", "choices": ["pulled out", "pulled off", "pulled up", "pulled over"], "correct": 0, "explain": "Dịch: Nhà đầu tư rút khỏi dự án. — \"pull out (of)\" = rút lui."},
        {"q": "We need to ------- the old invoices.", "choices": ["sort out", "sort off", "sort in", "sort over"], "correct": 0, "explain": "Dịch: Cần sắp xếp lại các hoá đơn cũ. — \"sort out\" = phân loại, giải quyết."},
        {"q": "Sales ------- after the holiday season.", "choices": ["slowed down", "slowed off", "slowed out", "slowed over"], "correct": 0, "explain": "Dịch: Doanh số chậm lại sau mùa lễ. — \"slow down\" = chậm lại."}
      ]
    },
    {
      id: 'cdt2-2', title: '2. Phrasal verbs: lịch trình, giao tiếp & sự cố',
      items: [
        {q:'The outdoor concert was ------ because of heavy rain.', choices:['filled out','picked up','called off','set up'], correct:2, explain:'Dịch: Buổi hòa nhạc ngoài trời bị hủy vì mưa lớn. — Giải thích: hủy bỏ = "call off" (bị động: was called off). Mẹo thêm: "set up" là tổ chức/thiết lập, nghĩa ngược.'},
        {q:'We have ------ paper, so please order more before Monday.', choices:['run out of','run up','run over','run into'], correct:0, explain:'Dịch: Chúng ta đã hết giấy, nên hãy đặt thêm trước thứ Hai. — Giải thích: hết, cạn kiệt = "run out of + N". Mẹo thêm: "run into" là gặp phải, "run over" là quá giờ.'},
        {q:'The company plans to ------ a new branch in Da Nang next year.', choices:['set off','check out','set up','break down'], correct:2, explain:'Dịch: Công ty dự định thành lập chi nhánh mới ở Đà Nẵng vào năm sau. — Giải thích: thiết lập, thành lập = "set up". Mẹo thêm: "set off" là khởi hành.'},
        {q:'The delivery was ------ by heavy traffic.', choices:['looked over','handed in','given up','held up'], correct:3, explain:'Dịch: Việc giao hàng bị chậm trễ vì kẹt xe. — Giải thích: bị trì hoãn = "be held up". Mẹo thêm: "hold up" cũng có nghĩa là cướp — cần đọc ngữ cảnh.'},
        {q:'Could you ------ me through to the sales manager, please?', choices:['pull','put','pass','pick'], correct:1, explain:'Dịch: Bạn có thể nối máy giúp tôi tới giám đốc kinh doanh được không? — Giải thích: nối máy điện thoại = "put someone through (to)". Mẹo thêm: cụm này rất hay gặp trong Part 3 (hội thoại điện thoại).'},
        {q:'Please ------ before noon; check-out time is 12 p.m.', choices:['check out','check up','check in','check on'], correct:0, explain:'Dịch: Vui lòng trả phòng trước buổi trưa; giờ trả phòng là 12 giờ. — Giải thích: trả phòng khách sạn = "check out". Mẹo thêm: "check in" là nhận phòng/làm thủ tục lên máy bay.'},
        {q:'The meeting ------ its scheduled time, so I missed my train.', choices:['ran out','ran up','ran into','ran over'], correct:3, explain:'Dịch: Cuộc họp kéo dài quá giờ dự kiến nên tôi lỡ chuyến tàu. — Giải thích: quá giờ, vượt thời gian = "run over". Mẹo thêm: chú ý tân ngữ "its scheduled time" đi trực tiếp sau "ran over".'},
        {q:'We ------ unexpected problems during the installation.', choices:['ran over','ran off','ran into','ran up'], correct:2, explain:'Dịch: Chúng tôi gặp phải những vấn đề bất ngờ trong quá trình lắp đặt. — Giải thích: tình cờ gặp, gặp sự cố = "run into" (không tách rời). Mẹo thêm: "run into" cũng dùng khi tình cờ gặp ai đó.'},
        {q:'The tour group ------ for the airport at dawn.', choices:['turn off','set off','put off','set up'], correct:1, explain:'Dịch: Đoàn du lịch khởi hành đến sân bay lúc rạng sáng. — Giải thích: khởi hành = "set off". Mẹo thêm: "put off" (hoãn) và "turn off" (tắt) không hợp nghĩa.'},
        {q:'The board decided to ------ the launch until next quarter.', choices:['put off','put on','put in','put out'], correct:0, explain:'Dịch: Hội đồng quản trị quyết định hoãn buổi ra mắt sang quý sau. — Giải thích: hoãn lại = "put off" (đồng nghĩa "postpone"). Mẹo thêm: hoãn = put off; hủy = call off; dời sớm = bring forward.'},
        {"q": "The flight was delayed, so we had to ------- at the airport.", "choices": ["hang around", "hang up", "hang on to", "hang out of"], "correct": 0, "explain": "Dịch: Chuyến bay trễ nên chúng tôi phải quanh quẩn ở sân bay. — \"hang around\" = nán lại chờ."},
        {"q": "Please don't ------- ; I'll transfer you to the manager.", "choices": ["hang up", "hang out", "hang down", "hang off"], "correct": 0, "explain": "Dịch: Đừng cúp máy; tôi sẽ chuyển máy cho quản lý. — \"hang up\" = cúp máy."},
        {"q": "The meeting has been ------- until next week.", "choices": ["pushed back", "pushed out", "pushed on", "pushed up"], "correct": 0, "explain": "Dịch: Cuộc họp lùi sang tuần sau. — \"push back\" = dời lại."},
        {"q": "I'll ------- you up at the hotel at 8.", "choices": ["pick", "take", "bring", "get"], "correct": 0, "explain": "Dịch: Tôi sẽ đón bạn ở khách sạn lúc 8 giờ. — \"pick up\" = đón."},
        {"q": "The printer ------- again this morning.", "choices": ["broke down", "broke up", "broke into", "broke off"], "correct": 0, "explain": "Dịch: Sáng nay máy in lại hỏng. — \"break down\" = hỏng."},
        {"q": "Could you ------- the music? It's too loud.", "choices": ["turn down", "turn off of", "turn over", "turn in"], "correct": 0, "explain": "Dịch: Bạn vặn nhỏ nhạc được không? Ồn quá. — \"turn down\" = vặn nhỏ."},
        {"q": "We have to ------- the problem before the launch.", "choices": ["deal with", "deal in", "deal out", "deal off"], "correct": 0, "explain": "Dịch: Phải xử lý vấn đề trước khi ra mắt. — \"deal with\" = giải quyết."},
        {"q": "Please ------- when you arrive at the hotel.", "choices": ["check in", "check out", "check over", "check off"], "correct": 0, "explain": "Dịch: Vui lòng làm thủ tục nhận phòng khi đến khách sạn. — \"check in\"."},
        {"q": "Guests must ------- by 11 A.M.", "choices": ["check out", "check in", "check up", "check on"], "correct": 0, "explain": "Dịch: Khách phải trả phòng trước 11 giờ. — \"check out\"."},
        {"q": "I'll ------- the information and call you back.", "choices": ["look into", "look out", "look over to", "look up at"], "correct": 0, "explain": "Dịch: Tôi sẽ tìm hiểu thông tin rồi gọi lại. — \"look into\" = điều tra, tìm hiểu."},
        {"q": "The fire alarm ------- during the meeting.", "choices": ["went off", "went out", "went on with", "went over"], "correct": 0, "explain": "Dịch: Chuông báo cháy kêu trong cuộc họp. — \"go off\" = (chuông) reo."},
        {"q": "Can you ------- for Ms. Ford while she is away?", "choices": ["fill in", "fill up", "fill out", "fill on"], "correct": 0, "explain": "Dịch: Bạn làm thay bà Ford khi bà vắng được không? — \"fill in for\" = làm thay."},
        {"q": "The plane ------- on time despite the weather.", "choices": ["took off", "took over", "took on", "took in"], "correct": 0, "explain": "Dịch: Máy bay cất cánh đúng giờ dù thời tiết xấu. — \"take off\" = cất cánh."},
        {"q": "Please ------- this information to your team.", "choices": ["pass on", "pass out", "pass by", "pass away"], "correct": 0, "explain": "Dịch: Hãy truyền đạt thông tin này cho nhóm. — \"pass on\" = chuyển, truyền đạt."},
        {"q": "I ran ------- an old colleague at the conference.", "choices": ["into", "over", "out", "off"], "correct": 0, "explain": "Dịch: Tôi tình cờ gặp đồng nghiệp cũ ở hội nghị. — \"run into\" = tình cờ gặp."}
      ]
    },
    {
      id: 'cdt2-3', title: "3. Luyện thêm: cụm động từ hay gặp trong email & thông báo",
      items: [
        {"q": "Please ------- the registration form and return it to the front desk.", "choices": ["fill out", "fill up", "fill off", "fill by"], "correct": 0, "explain": "Dịch: Vui lòng điền phiếu đăng ký và nộp lại cho quầy lễ tân. — \"fill out/in a form\" = điền đơn."},
        {"q": "The board decided to ------- the vote until all members are present.", "choices": ["put off", "put on", "put up", "put in"], "correct": 0, "explain": "Dịch: HĐQT quyết định hoãn biểu quyết cho tới khi đủ thành viên. — \"put off\" = postpone (hoãn lại)."},
        {"q": "Ms. Rhee will ------- the project while Mr. Grant is on leave.", "choices": ["take over", "take off", "take after", "take apart"], "correct": 0, "explain": "Dịch: Bà Rhee sẽ tiếp quản dự án trong lúc ông Grant nghỉ phép. — \"take over\" = tiếp quản, nhận lại trách nhiệm."},
        {"q": "Our supplier has ------- out of the blue paper, so we ordered white instead.", "choices": ["run", "gone", "made", "cut"], "correct": 0, "explain": "Dịch: Nhà cung cấp đã hết giấy xanh nên chúng tôi đặt giấy trắng. — \"run out of\" = hết, cạn."},
        {"q": "Could you ------- the figures in the report before it is sent to the client?", "choices": ["go over", "go off", "go by", "go along"], "correct": 0, "explain": "Dịch: Anh có thể rà lại số liệu trong báo cáo trước khi gửi khách không? — \"go over\" = xem xét, rà soát kỹ."},
        {"q": "The company plans to ------- 50 new staff members for the holiday season.", "choices": ["take on", "take in", "take up", "take down"], "correct": 0, "explain": "Dịch: Công ty dự định tuyển thêm 50 nhân viên cho mùa lễ. — \"take on\" = hire (tuyển, nhận thêm người)."},
        {"q": "Due to low ticket sales, the outdoor concert was ------- off.", "choices": ["called", "turned", "set", "brought"], "correct": 0, "explain": "Dịch: Do bán vé ít, buổi hoà nhạc ngoài trời đã bị huỷ. — \"call off\" = cancel (huỷ)."},
        {"q": "Mr. Patel ------- up the idea of a four-day workweek at the staff meeting.", "choices": ["brought", "came", "picked", "turned"], "correct": 0, "explain": "Dịch: Ông Patel nêu ý tưởng tuần làm bốn ngày trong buổi họp. — \"bring up\" = nêu ra (một vấn đề)."},
        {"q": "Please ------- for the next available agent; your call is important to us.", "choices": ["hold on", "hold off", "hold out", "hold back"], "correct": 0, "explain": "Dịch: Vui lòng giữ máy chờ nhân viên kế tiếp. — \"hold on\" = giữ máy, chờ một chút."},
        {"q": "The new manager quickly ------- along with everyone in the department.", "choices": ["got", "came", "went", "made"], "correct": 0, "explain": "Dịch: Quản lý mới nhanh chóng hoà hợp với mọi người trong phòng. — \"get along with\" = hoà hợp với."},
        {"q": "Before you leave, remember to ------- off all the computers.", "choices": ["turn", "take", "put", "break"], "correct": 0, "explain": "Dịch: Trước khi về, nhớ tắt hết máy tính. — \"turn off\" = tắt (thiết bị)."},
        {"q": "Applicants who ------- the requirements will be contacted for an interview.", "choices": ["meet", "meet up", "meet with", "meet out"], "correct": 0, "explain": "Dịch: Ứng viên đáp ứng yêu cầu sẽ được liên hệ phỏng vấn. — Cụm cố định \"meet the requirements\" (đáp ứng yêu cầu), không cần tiểu từ. \"meet with\" = gặp gỡ ai."},
        {"q": "Please ------- your application by Friday.", "choices": ["hand in", "hand out", "hand over to", "hand down"], "correct": 0, "explain": "Dịch: Vui lòng nộp đơn trước thứ Sáu. — \"hand in\" = nộp."},
        {"q": "The trainer will ------- the materials at the start.", "choices": ["hand out", "hand in", "hand up", "hand on"], "correct": 0, "explain": "Dịch: Huấn luyện viên sẽ phát tài liệu lúc đầu. — \"hand out\" = phát."},
        {"q": "We are ------- forward to working with you.", "choices": ["looking", "seeing", "waiting", "hoping"], "correct": 0, "explain": "Dịch: Chúng tôi mong được hợp tác với bạn. — \"look forward to\"."},
        {"q": "Let's ------- the plan before the meeting.", "choices": ["go through", "go off", "go by", "go out"], "correct": 0, "explain": "Dịch: Hãy xem kỹ kế hoạch trước cuộc họp. — \"go through\" = xem xét kỹ."},
        {"q": "The company ------- a new product every year.", "choices": ["brings out", "brings up", "brings in", "brings over"], "correct": 0, "explain": "Dịch: Mỗi năm công ty ra mắt một sản phẩm mới. — \"bring out\" = tung ra."},
        {"q": "Please ------- the old files; we don't need them.", "choices": ["throw away", "throw up", "throw in", "throw on"], "correct": 0, "explain": "Dịch: Hãy vứt các tệp cũ đi; chúng ta không cần nữa. — \"throw away\" = vứt bỏ."},
        {"q": "I'll ------- with you after the meeting.", "choices": ["catch up", "catch on", "catch out", "catch over"], "correct": 0, "explain": "Dịch: Sau cuộc họp tôi sẽ nói chuyện cập nhật với bạn. — \"catch up with\" = cập nhật/đuổi kịp."},
        {"q": "The supervisor ------- the new employees.", "choices": ["showed around", "showed off", "showed up for", "showed in to"], "correct": 0, "explain": "Dịch: Giám sát viên dẫn nhân viên mới đi tham quan. — \"show sb around\" = dẫn đi một vòng."},
        {"q": "Only three people ------- for the training.", "choices": ["showed up", "showed around", "showed off", "showed in"], "correct": 0, "explain": "Dịch: Chỉ ba người đến buổi đào tạo. — \"show up\" = xuất hiện, có mặt."},
        {"q": "We need to ------- a solution quickly.", "choices": ["come up with", "come across to", "come down with", "come over to"], "correct": 0, "explain": "Dịch: Cần nhanh chóng nghĩ ra giải pháp. — \"come up with\" = nghĩ ra."},
        {"q": "The project was ------- because of budget cuts.", "choices": ["called off", "called on", "called up", "called for"], "correct": 0, "explain": "Dịch: Dự án bị huỷ vì cắt ngân sách. — \"call off\" = huỷ."},
        {"q": "Please ------- the lights when you leave.", "choices": ["switch off", "switch over", "switch up", "switch to"], "correct": 0, "explain": "Dịch: Hãy tắt đèn khi về. — \"switch off\" = tắt."},
        {"q": "The client ------- the meeting at the last minute.", "choices": ["backed out of", "backed up", "backed down on", "backed in"], "correct": 0, "explain": "Dịch: Khách rút khỏi cuộc họp vào phút chót. — \"back out of\" = rút lui (khỏi cam kết)."}
      ]
    }
  ],

  vocab: [
    {word:'carry out', ipa:'/ˈkæri aʊt/', meaning:'thực hiện, tiến hành', example:'The company will carry out a survey next month.', note:'đồng nghĩa: conduct'},
    {word:'follow up on', ipa:'/ˈfɑːloʊ ʌp ɑːn/', meaning:'theo dõi, tiếp tục xử lý', example:'I will follow up on your request soon.', note:'danh từ: follow-up'},
    {word:'write off', ipa:'/raɪt ɔːf/', meaning:'xóa nợ, ghi giảm', example:'The company had to write off bad debts.', note:'lĩnh vực kế toán'},
    {word:'put through', ipa:'/pʊt θruː/', meaning:'nối máy', example:'Can you put me through to the manager?', note:'hay gặp trong hội thoại điện thoại'},
    {word:'hold up', ipa:'/hoʊld ʌp/', meaning:'trì hoãn, làm chậm', example:'Traffic held up the delivery.', note:'cũng có nghĩa "cướp"'},
    {word:'run over', ipa:'/rʌn ˈoʊvər/', meaning:'quá giờ, vượt thời gian', example:'The meeting ran over its scheduled time.', note:'khác "run out of" (hết)'}
  ]
};
