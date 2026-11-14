window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['tu-han-dinh'] = {
  id: 'tu-han-dinh',
  order: 14,
  title: 'Từ Hạn Định & Lượng Từ',
  subtitle: 'Determiners & Quantifiers',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2022 (another/other/each other) + AZ Grammar 2nd edition (lượng từ)',
  note: 'Bài tập do AZEnglish soạn thêm (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'another / other / others / the other / each other',
      tenses: [
        {
          name: 'another',
          form: 'another + N số ít (một cái nữa, một cái khác)',
          usage: ['We need another week to finish the audit.', 'I don’t like this design. Could you show me another one?'],
          signals: 'another = an + other → chỉ đi với danh từ SỐ ÍT (hoặc đứng một mình như đại từ).'
        },
        {
          name: 'other / others',
          form: 'other + N số nhiều · others = other + N (đại từ, không có danh từ theo sau)',
          usage: ['Why don’t you ask the other people to go camping? (the other + N số nhiều)', 'Some employees prefer email, while others prefer phone calls. (others = other employees)'],
          signals: '"Others" đứng một mình, KHÔNG có danh từ phía sau; "other" luôn có danh từ số nhiều phía sau.'
        },
        {
          name: 'the other / the others / each other',
          form: 'the other = cái còn lại (trong 2) · the others = những cái còn lại (xác định) · each other = lẫn nhau',
          usage: ['The company has two branches. One is in Hanoi and the other is in Da Nang.', 'I love this girl, I don’t like the others.', 'You should help each other. (= one another)'],
          signals: 'Nhóm CHỈ 2 → one … the other; nhóm nhiều → some … others / the others; "each other" là tân ngữ chỉ sự tương hỗ.'
        }
      ]
    },
    {
      group: 'Lượng từ thường gặp trong TOEIC',
      tip: [
        'every / each + N số ít: Every employee must sign… · each + N số ít / each of the + N số nhiều: The manager gave each employee a copy.',
        'either / neither (của 2 đối tượng): You may choose either of the two plans. · Neither of the two candidates has enough experience (không dùng "none of the two").',
        'both + N số nhiều (cả hai) · all (từ 3 trở lên) · most of the + N (hầu hết): Most of the staff attended. — "Almost" + every/all/any: Almost every employee received a bonus (không nói "most employee").',
        'many / few / a few / several + N đếm được số nhiều; much / little / a little + N không đếm được. "few / little" mang nghĩa gần như không có (tiêu cực); "a few / a little" mang nghĩa có một ít (tích cực).',
        'some dùng trong câu khẳng định và lời mời/đề nghị; any dùng trong câu phủ định và câu hỏi: We do not have any vacancies at the moment.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'hd-1', title: '1. another / other / others / each other',
      items: [
        {q:'We have one meeting room on the first floor and ------ on the second floor.', choices:['other','each other','others','another'], correct:3, explain:'Dịch: Chúng tôi có một phòng họp ở tầng 1 và một phòng khác ở tầng 2. — Giải thích: "another" (một cái nữa) đứng như đại từ số ít, thay cho "another meeting room". Mẹo thêm: "other" không bao giờ đứng một mình như đại từ số ít.'},
        {q:'Some employees prefer e-mail, while ------ prefer phone calls.', choices:['the other','others','another','other'], correct:1, explain:'Dịch: Một số nhân viên thích email, trong khi những người khác thích gọi điện. — Giải thích: "others" = other employees, đứng một mình không có danh từ theo sau. Mẹo thêm: mẫu "Some … others …" rất hay gặp.'},
        {q:'The company has two branches. One is in Hanoi and ------ is in Da Nang.', choices:['other','another','the other','others'], correct:2, explain:'Dịch: Công ty có hai chi nhánh. Một cái ở Hà Nội và cái còn lại ở Đà Nẵng. — Giải thích: nhóm chỉ có 2 → one … the other. Mẹo thêm: nếu nhóm có từ 3 trở lên mới dùng another / the others.'},
        {q:'Please invite the ------ managers to the meeting as well.', choices:['other','others','each other','another'], correct:0, explain:'Dịch: Vui lòng mời cả các quản lý còn lại đến cuộc họp. — Giải thích: "the other + N số nhiều" (managers) = những người còn lại. Mẹo thêm: "another" chỉ đi với danh từ số ít nên loại.'},
        {q:'The two departments should help ------ during the busy season.', choices:['the other','another','others','each other'], correct:3, explain:'Dịch: Hai phòng ban nên giúp đỡ lẫn nhau trong mùa cao điểm. — Giải thích: hành động tương hỗ → "each other" (làm tân ngữ). Mẹo thêm: đồng nghĩa "one another".'},
        {q:'We need ------ week to finish the audit.', choices:['others','other','another','the others'], correct:2, explain:'Dịch: Chúng tôi cần thêm một tuần nữa để hoàn tất cuộc kiểm toán. — Giải thích: "another + N số ít" (week) = thêm một. Mẹo thêm: "other week" sai vì thiếu "an-".'},
        {q:'I don’t like this design. Could you show me ------ one?', choices:['other','another','others','each other'], correct:1, explain:'Dịch: Tôi không thích mẫu thiết kế này. Bạn cho tôi xem mẫu khác được không? — Giải thích: "another one" = một mẫu khác. Mẹo thêm: "one" ở đây thay cho danh từ số ít đã nhắc.'},
        {q:'------ students passed the exam; the rest have to retake it.', choices:['Some','Every','Each other','Any'], correct:0, explain:'Dịch: Một số sinh viên đã qua kỳ thi; số còn lại phải thi lại. — Giải thích: khẳng định + danh từ số nhiều → "Some". Mẹo thêm: "Any" chủ yếu dùng ở câu phủ định/nghi vấn.'},
        {q:'Both ------ the proposals were rejected by the board.', choices:['at','of','in','on'], correct:1, explain:'Dịch: Cả hai đề xuất đều bị hội đồng quản trị bác bỏ. — Giải thích: "both of the + N số nhiều" hoặc "both the + N". Mẹo thêm: nếu có đại từ thì bắt buộc "of": both of them.'},
        {q:'These two projects are similar, but ------ project has a different budget.', choices:['each','others','every one','all'], correct:0, explain:'Dịch: Hai dự án này giống nhau nhưng mỗi dự án có ngân sách khác nhau. — Giải thích: "each + N số ít" = mỗi. Mẹo thêm: "every one" phải đi với "of" (every one of the projects).'},
        {"q": "I have two printers; one is new and ------- is old.", "choices": ["the other", "another", "other", "others"], "correct": 0, "explain": "Dịch: Tôi có hai máy in, một cái mới, cái còn lại cũ. — Cái còn lại trong hai → \"the other\"."},
        {"q": "Would you like ------- cup of coffee?", "choices": ["another", "other", "the others", "others"], "correct": 0, "explain": "Dịch: Bạn dùng thêm một cốc cà phê nữa không? — \"another + N số ít\" = thêm một."},
        {"q": "Some employees work in the office; ------- work from home.", "choices": ["others", "another", "the other", "other"], "correct": 0, "explain": "Dịch: Một số nhân viên làm ở văn phòng; số khác làm ở nhà. — \"others\" đứng một mình = những người khác."},
        {"q": "The two managers respect ------- .", "choices": ["each other", "another", "the other", "others"], "correct": 0, "explain": "Dịch: Hai quản lý tôn trọng nhau. — \"each other\" = lẫn nhau."},
        {"q": "We need ------- staff for the busy season.", "choices": ["other", "another", "the another", "others"], "correct": 0, "explain": "Dịch: Chúng tôi cần thêm nhân viên khác cho mùa cao điểm. — \"other + N không đếm được/số nhiều\"."},
        {"q": "One of the twins is a lawyer; ------- is a doctor.", "choices": ["the other", "another", "others", "other"], "correct": 0, "explain": "Dịch: Một người trong cặp song sinh là luật sư, người kia là bác sĩ. — \"the other\" (còn lại trong hai)."},
        {"q": "Three of the ten candidates passed; ------- failed.", "choices": ["the others", "others", "another", "the other one"], "correct": 0, "explain": "Dịch: Ba trong mười ứng viên đậu; những người còn lại trượt. — \"the others\" = phần còn lại đã xác định."},
        {"q": "Please give me ------- chance to explain.", "choices": ["another", "other", "others", "the others"], "correct": 0, "explain": "Dịch: Hãy cho tôi thêm một cơ hội giải thích. — \"another + N số ít\"."},
        {"q": "The team members help ------- with difficult tasks.", "choices": ["one another", "another one", "the other", "others"], "correct": 0, "explain": "Dịch: Các thành viên giúp nhau việc khó. — \"one another\" = lẫn nhau (nhóm)."},
        {"q": "This laptop is too slow. Can I try ------- one?", "choices": ["another", "other", "others", "the others"], "correct": 0, "explain": "Dịch: Laptop này chậm quá. Tôi thử cái khác được không? — \"another one\"."},
        {"q": "Some guests arrived early, but ------- came late.", "choices": ["others", "another", "the other", "other one"], "correct": 0, "explain": "Dịch: Vài khách đến sớm nhưng số khác đến muộn. — \"others\"."},
        {"q": "The store sells books, magazines, and ------- items.", "choices": ["other", "another", "others", "the others"], "correct": 0, "explain": "Dịch: Cửa hàng bán sách, tạp chí và các món khác. — \"other + N số nhiều\"."},
        {"q": "We will meet again in ------- two weeks.", "choices": ["another", "other", "the other", "others"], "correct": 0, "explain": "Dịch: Chúng ta sẽ gặp lại sau hai tuần nữa. — \"another + số + N số nhiều\" = thêm (khoảng thời gian)."},
        {"q": "One branch is in Paris; ------- are in Asia.", "choices": ["the others", "the other", "another", "other"], "correct": 0, "explain": "Dịch: Một chi nhánh ở Paris; các chi nhánh còn lại ở châu Á. — \"the others\" + are (số nhiều)."},
        {"q": "Ms. Lee and Mr. Kim worked with ------- on the project.", "choices": ["each other", "another", "other", "the others"], "correct": 0, "explain": "Dịch: Bà Lee và ông Kim làm việc cùng nhau trong dự án. — \"each other\"."}
      ]
    },
    {
      id: 'hd-2', title: '2. Lượng từ: every, each, either, neither, few, little…',
      items: [
        {q:'------ employee must sign the attendance sheet.', choices:['Both','Many','Every','All'], correct:2, explain:'Dịch: Mỗi nhân viên phải ký vào bảng chấm công. — Giải thích: danh từ số ít "employee" → "Every". Mẹo thêm: All/Both/Many phải đi với danh từ số nhiều.'},
        {q:'We received ------ complaints about the new schedule this week.', choices:['much','little','a little','few'], correct:3, explain:'Dịch: Tuần này chúng tôi nhận được rất ít khiếu nại về lịch mới. — Giải thích: "complaints" là danh từ đếm được số nhiều → "few". Mẹo thêm: little/much/a little dùng cho danh từ không đếm được.'},
        {q:'There is ------ time left before the deadline, so we must hurry.', choices:['few','little','several','many'], correct:1, explain:'Dịch: Còn rất ít thời gian trước hạn chót nên chúng ta phải khẩn trương. — Giải thích: "time" không đếm được → "little" (gần như không còn). Mẹo thêm: "few/many/several" dành cho danh từ đếm được.'},
        {q:'------ of the staff attended the training, so it was a great success.', choices:['Almost','Much','Most','Mostly'], correct:2, explain:'Dịch: Hầu hết nhân viên đã tham dự buổi đào tạo nên nó rất thành công. — Giải thích: "most of the + N" = phần lớn. Mẹo thêm: "almost" là trạng từ (almost all / almost every), không đứng trước "of the".'},
        {q:'Almost ------ employee received a bonus this year.', choices:['every','much','many of','most'], correct:0, explain:'Dịch: Hầu như mọi nhân viên đều nhận được tiền thưởng năm nay. — Giải thích: "almost every + N số ít". Mẹo thêm: "most employee" sai vì "most" đi với danh từ số nhiều ("most employees").'},
        {q:'------ of the two candidates has enough experience for the position.', choices:['Any','None','No','Neither'], correct:3, explain:'Dịch: Không ai trong hai ứng viên có đủ kinh nghiệm cho vị trí này. — Giải thích: chỉ có 2 đối tượng → "Neither of the two". Mẹo thêm: "none of" dùng khi từ 3 đối tượng trở lên.'},
        {q:'You may choose ------ of the two plans; both cost the same.', choices:['any','each other','either','every'], correct:2, explain:'Dịch: Bạn có thể chọn một trong hai gói; cả hai đều cùng giá. — Giải thích: "either of the two" = một trong hai. Mẹo thêm: either / neither chỉ dùng cho 2 đối tượng.'},
        {q:'We do not have ------ vacancies at the moment.', choices:['any','some','another','every'], correct:0, explain:'Dịch: Hiện tại chúng tôi không có vị trí trống nào. — Giải thích: câu phủ định → "any". Mẹo thêm: "some" chủ yếu dùng ở câu khẳng định hoặc lời mời.'},
        {q:'The manager gave ------ employee a copy of the schedule.', choices:['both','each','each of','all'], correct:1, explain:'Dịch: Quản lý đưa cho mỗi nhân viên một bản lịch trình. — Giải thích: "each + N số ít" (employee). Mẹo thêm: nếu dùng "each of" thì phải kèm "the + N số nhiều" (each of the employees).'},
        {q:'We have ------ information about the new product yet.', choices:['few','a few','many','little'], correct:3, explain:'Dịch: Chúng tôi vẫn chưa có nhiều thông tin về sản phẩm mới. — Giải thích: "information" không đếm được → "little". Mẹo thêm: đừng nhầm "informations" — danh từ này không có dạng số nhiều.'},
        {"q": "------- employee must sign in at the front desk.", "choices": ["Each", "All", "Both", "Many"], "correct": 0, "explain": "Dịch: Mỗi nhân viên phải ký tên ở quầy. — \"Each + N số ít\"."},
        {"q": "We received ------- applications this year.", "choices": ["many", "much", "a little", "every"], "correct": 0, "explain": "Dịch: Năm nay chúng tôi nhận nhiều hồ sơ. — \"many + N đếm được số nhiều\"."},
        {"q": "There isn't ------- time left.", "choices": ["much", "many", "few", "a few"], "correct": 0, "explain": "Dịch: Không còn nhiều thời gian. — \"much + N không đếm được\"."},
        {"q": "------- of the two options is acceptable.", "choices": ["Either", "Both", "All", "Every"], "correct": 0, "explain": "Dịch: Lựa chọn nào trong hai cũng được. — \"Either of the two\" + V số ít."},
        {"q": "We have ------- questions about the contract.", "choices": ["a few", "a little", "much", "every"], "correct": 0, "explain": "Dịch: Chúng tôi có vài câu hỏi về hợp đồng. — \"a few + N số nhiều\"."},
        {"q": "Please add ------- sugar to the coffee.", "choices": ["a little", "a few", "many", "several"], "correct": 0, "explain": "Dịch: Thêm chút đường vào cà phê. — \"a little + N không đếm được\"."},
        {"q": "------- of the staff members attended the training.", "choices": ["All", "Every", "Each one", "Much"], "correct": 0, "explain": "Dịch: Tất cả nhân viên đều dự đào tạo. — \"All of + the + N số nhiều\"."},
        {"q": "------- the tickets have been sold.", "choices": ["All", "Every", "Each", "Much"], "correct": 0, "explain": "Dịch: Tất cả vé đã bán hết. — \"All the + N số nhiều\"."},
        {"q": "------- candidate has strong qualifications.", "choices": ["Neither", "Both", "All", "Few"], "correct": 0, "explain": "Dịch: Không ứng viên nào trong hai có trình độ tốt. — \"Neither + N số ít\"."},
        {"q": "The project requires ------- effort.", "choices": ["a great deal of", "a large number of", "many", "several"], "correct": 0, "explain": "Dịch: Dự án cần rất nhiều công sức. — \"a great deal of + N không đếm được\"."},
        {"q": "Several ------- were damaged during shipping.", "choices": ["items", "item", "furniture", "equipment"], "correct": 0, "explain": "Dịch: Nhiều món hàng bị hư khi vận chuyển. — \"Several + N đếm được số nhiều\"."},
        {"q": "There are ------- seats left for the concert.", "choices": ["few", "little", "much", "a little"], "correct": 0, "explain": "Dịch: Còn rất ít ghế cho buổi hoà nhạc. — \"few + N số nhiều\"."},
        {"q": "------- day, we receive about 100 emails.", "choices": ["Every", "All", "Many", "Several"], "correct": 0, "explain": "Dịch: Mỗi ngày chúng tôi nhận khoảng 100 email. — \"Every + N số ít\"."},
        {"q": "------- the managers and the staff agreed.", "choices": ["Both", "Either", "Neither", "Every"], "correct": 0, "explain": "Dịch: Cả quản lý lẫn nhân viên đều đồng ý. — \"Both A and B\"."},
        {"q": "Most ------- prefer flexible hours.", "choices": ["employees", "employee", "of employees", "the employee"], "correct": 0, "explain": "Dịch: Hầu hết nhân viên thích giờ làm linh hoạt. — \"Most + N số nhiều\" (không có \"the\")."}
      ]
    },
    {
      id: 'hd-3', title: "3. Luyện thêm: lượng từ & từ hạn định",
      items: [
        {"q": "------- employee is required to complete the safety course by June 30.", "choices": ["Every", "All", "Most", "Several"], "correct": 0, "explain": "Dịch: Mọi nhân viên đều phải hoàn thành khoá an toàn trước 30/6. — Danh từ số ít \"employee\" + động từ \"is\" → \"Every\". All/Most/Several đi với danh từ số nhiều."},
        {"q": "Very ------- customers have complained about the new packaging.", "choices": ["few", "little", "much", "less"], "correct": 0, "explain": "Dịch: Rất ít khách hàng phàn nàn về bao bì mới. — \"customers\" đếm được số nhiều → \"few\" (rất ít, hầu như không)."},
        {"q": "There is still ------- time left to register for the conference.", "choices": ["a little", "a few", "many", "several"], "correct": 0, "explain": "Dịch: Vẫn còn một chút thời gian để đăng ký hội nghị. — \"time\" không đếm được → \"a little\"."},
        {"q": "------- of the two candidates has experience in international sales.", "choices": ["Neither", "None", "Both", "All"], "correct": 0, "explain": "Dịch: Không ai trong hai ứng viên có kinh nghiệm bán hàng quốc tế. — Nói về hai người + động từ số ít \"has\" → \"Neither of\". \"Both\" cần động từ số nhiều."},
        {"q": "The manager reviewed ------- application carefully before making a decision.", "choices": ["each", "all", "both", "many"], "correct": 0, "explain": "Dịch: Quản lý xem kỹ từng hồ sơ trước khi quyết định. — Danh từ số ít \"application\" → \"each\"."},
        {"q": "------- of the information in the brochure is outdated.", "choices": ["Much", "Many", "A few", "Several"], "correct": 0, "explain": "Dịch: Phần lớn thông tin trong tờ gấp đã lỗi thời. — \"information\" không đếm được + động từ số ít \"is\" → \"Much of\"."},
        {"q": "We received ------- inquiries about the job opening that we extended the deadline.", "choices": ["so many", "so much", "such", "too much"], "correct": 0, "explain": "Dịch: Chúng tôi nhận quá nhiều câu hỏi về vị trí tuyển dụng đến mức phải gia hạn. — \"so many + danh từ đếm được số nhiều + that\". \"such\" cần \"such a lot of/such many\" không đúng."},
        {"q": "Please give the forms to ------- staff member at the reception desk.", "choices": ["any", "some", "few", "all"], "correct": 0, "explain": "Dịch: Vui lòng đưa giấy tờ cho bất kỳ nhân viên nào ở quầy lễ tân. — \"any + danh từ số ít\" = bất kỳ (ai cũng được)."},
        {"q": "One of the printers is broken, but the ------- ones are working fine.", "choices": ["other", "another", "others", "each"], "correct": 0, "explain": "Dịch: Một máy in bị hỏng nhưng những máy còn lại vẫn chạy tốt. — \"the other + danh từ số nhiều\" = những cái còn lại. \"others\" không đi kèm danh từ."},
        {"q": "The meeting room can hold ------- people as the main hall.", "choices": ["as many", "as much", "so few", "a lot"], "correct": 0, "explain": "Dịch: Phòng họp chứa được nhiều người như hội trường chính. — So sánh bằng với danh từ đếm được: \"as many + N + as\"."},
        {"q": "------- the staff members agreed to the new schedule.", "choices": ["All of", "Every", "Each", "Much of"], "correct": 0, "explain": "Dịch: Tất cả nhân viên đều đồng ý lịch mới. — \"All of + the + danh từ số nhiều\". Every/Each không đi trực tiếp với \"the\"."},
        {"q": "There were ------- seats left, so we had to stand at the back.", "choices": ["no", "none", "any", "nothing"], "correct": 0, "explain": "Dịch: Không còn ghế nào nên chúng tôi phải đứng ở cuối. — \"no + danh từ\" = không có. \"none\" đứng một mình hoặc \"none of\"."},
        {"q": "The hotel has ------- rooms with an ocean view.", "choices": ["several", "much", "a little", "every"], "correct": 0, "explain": "Dịch: Khách sạn có vài phòng nhìn ra biển. — \"several + N số nhiều\"."},
        {"q": "------- of the information was useful.", "choices": ["Most", "Many", "Few", "Several"], "correct": 0, "explain": "Dịch: Phần lớn thông tin hữu ích. — \"Most of + N không đếm được\"."},
        {"q": "We have ------- money left in the budget.", "choices": ["little", "few", "many", "a few"], "correct": 0, "explain": "Dịch: Ngân sách còn rất ít tiền. — \"little + N không đếm được\"."},
        {"q": "------- team member should attend the meeting.", "choices": ["Every", "All", "Many", "Few"], "correct": 0, "explain": "Dịch: Mọi thành viên nhóm nên dự họp. — \"Every + N số ít\"."},
        {"q": "There are ------- ways to improve sales.", "choices": ["a number of", "an amount of", "much", "a little"], "correct": 0, "explain": "Dịch: Có nhiều cách tăng doanh số. — \"a number of + N số nhiều\"."},
        {"q": "The CEO spoke to ------- the employees.", "choices": ["all", "every", "each", "much"], "correct": 0, "explain": "Dịch: CEO nói chuyện với toàn bộ nhân viên. — \"all the + N số nhiều\"."},
        {"q": "------- of my colleagues speak French.", "choices": ["Both", "Either", "Neither one", "Every"], "correct": 0, "explain": "Dịch: Cả hai đồng nghiệp của tôi đều nói tiếng Pháp. — \"Both of + N số nhiều\" + V số nhiều."},
        {"q": "I don't have ------- experience in marketing.", "choices": ["any", "some", "many", "few"], "correct": 0, "explain": "Dịch: Tôi không có kinh nghiệm marketing nào. — Câu phủ định → \"any\"."},
        {"q": "Could you give me ------- advice?", "choices": ["some", "many", "a few", "several"], "correct": 0, "explain": "Dịch: Bạn cho tôi vài lời khuyên được không? — Lời đề nghị/xin → \"some\" + N không đếm được."},
        {"q": "------- staff member received a gift.", "choices": ["Each", "All", "Both", "Most"], "correct": 0, "explain": "Dịch: Mỗi nhân viên nhận một món quà. — \"Each + N số ít\"."},
        {"q": "There were too ------- people at the event.", "choices": ["many", "much", "little", "a little"], "correct": 0, "explain": "Dịch: Sự kiện có quá nhiều người. — \"too many + N số nhiều\"."},
        {"q": "Only ------- applicants were invited for interviews.", "choices": ["a few", "a little", "much", "little"], "correct": 0, "explain": "Dịch: Chỉ một vài ứng viên được mời phỏng vấn. — \"a few + N số nhiều\"."},
        {"q": "We spent too ------- money on the event.", "choices": ["much", "many", "few", "a few"], "correct": 0, "explain": "Dịch: Chúng tôi tiêu quá nhiều tiền cho sự kiện. — \"too much + N không đếm được\"."}
      ]
    }
  ],

  vocab: [
    {word:'attendance sheet', ipa:'/əˈtendəns ʃiːt/', meaning:'bảng điểm danh, chấm công', example:'Every employee must sign the attendance sheet.', note:'attendance = sự có mặt'},
    {word:'vacancy', ipa:'/ˈveɪkənsi/', meaning:'vị trí trống, phòng trống', example:'We do not have any vacancies at the moment.', note:'số nhiều: vacancies'},
    {word:'retake', ipa:'/ˌriːˈteɪk/', meaning:'thi lại', example:'The rest have to retake the exam.', note:'tiền tố re- = lại'},
    {word:'candidate', ipa:'/ˈkændɪdət/', meaning:'ứng viên', example:'Neither of the two candidates has enough experience.', note:'đồng nghĩa: applicant'},
    {word:'schedule', ipa:'/ˈskedʒuːl/', meaning:'lịch trình', example:'The manager gave each employee a copy of the schedule.', note:'Anh-Mỹ đọc "sked-jool"'},
    {word:'audit', ipa:'/ˈɔːdɪt/', meaning:'kiểm toán', example:'We need another week to finish the audit.', note:'người kiểm toán: auditor'}
  ]
};
