window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['hoa-hop-chu-vi'] = {
  id: 'hoa-hop-chu-vi',
  order: 8,
  title: 'Sự Hoà Hợp Chủ Ngữ – Động Từ',
  subtitle: 'Subject-Verb Agreement',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6 (dựa trên các cấu trúc bẫy phổ biến nhất)',
  sourceTheory: 'AZ Grammar 2022 (nội bộ AZEnglish)',

  theory: [
    {
      group: 'Quy tắc cơ bản',
      tip: [
        'Chủ ngữ số ít (danh từ số ít, danh từ không đếm được) → động từ chia số ít (V-s/es ở thì hiện tại đơn, is/was, has).',
        'Chủ ngữ số nhiều (danh từ số nhiều) → động từ chia số nhiều (V nguyên mẫu, are/were, have).',
        'Khi có mệnh đề quan hệ hoặc cụm từ xen giữa chủ ngữ và động từ (ví dụ "who attended the workshop"), hãy BỎ QUA phần xen giữa để xác định đúng số của chủ ngữ thật.'
      ]
    },
    {
      group: 'Bảng tổng hợp theo sách AZ Grammar: danh từ, chủ ngữ ghép, đại từ bất định và lượng từ (all of, some of, few…)',
      tenses: [
        {
          name: '1. Nguyên tắc chung',
          form: 'Danh từ không đếm được / danh từ số ít → V số ít · Danh từ số nhiều → V số nhiều',
          usage: ['The dog barks. / The dogs bark.', 'Information is crucial. (không đếm được: water, information, advice, news, money, rice, love, happiness…)', 'The documents have been verified. (số nhiều: apples, clothes, documents; bất quy tắc: children, people, men, women…)'],
          signals: 'Danh từ đếm được số ít thường đi sau a/an/the; danh từ số nhiều thường có -s (chú ý các từ bất quy tắc children, people, men, women).'
        },
        {
          name: '2. Chủ ngữ ghép',
          form: 'N1 and N2 → V số nhiều · N1 or/nor N2 (either…or, neither…nor) → V chia theo N2 (danh từ gần động từ nhất)',
          usage: ['Tom and Harry have arrived. · The guitar and the piano need tuning.', 'The student or the committee members write. (theo N2 số nhiều)', 'Neither Tom nor Harry has arrived. · Either Eva or Joy has taken the coat.'],
          signals: 'Ngoại lệ → SỐ ÍT: (1) N1 and N2 cùng chỉ MỘT chủ thể — Spaghetti and meatballs is delicious; (2) Each/Every N1 and each/every N2 — Every man and woman has the right.'
        },
        {
          name: '3. Đại từ bất định',
          form: '(each, every-, any-, some-) + (-one, -body, -thing) / either / neither → V số ít · (some, all, most, none, any, half) of + N → V chia theo N đứng sau "of"',
          usage: ['Anybody who wants to join is welcome. · Someone has left their bag here.', 'Neither of the options is ideal.', 'All of the information has been reviewed. (N không đếm được → số ít)', 'Some of the students are playing outside. (N số nhiều → số nhiều)', 'None of the participants were late. · Most of the work is done.'],
          signals: 'Gặp "all/some/most/none/half of + N": nhìn vào N SAU "of" để quyết định động từ, không nhìn vào "all/some".'
        },
        {
          name: '4. Lượng từ (Quantifiers)',
          form: 'much, little, a little, an amount of, a great deal of, a bit of + N không đếm được → V số ít · many, few, a few, several, a (great/large) number of + N số nhiều → V số nhiều · all of, some of, any of, a lot of, lots of, plenty of, most of, none of, half of + N → chia theo N',
          usage: ['Much of the work has been done. · A little of the sugar remains.', 'Few of the options are viable. · A few of them have submitted. · Several cars were damaged.', 'All of the water is safe to drink. · Most of the people have left. · Half of the students have passed the exam.'],
          signals: 'Nhóm "much/little" đi với danh từ KHÔNG ĐẾM ĐƯỢC; nhóm "many/few/several" đi với danh từ ĐẾM ĐƯỢC SỐ NHIỀU; nhóm "all of/some of/…" đi được với cả hai nên phải chia theo danh từ phía sau.'
        }
      ]
    },
    {
      group: 'Các cấu trúc dễ gây nhầm (bẫy TOEIC kinh điển)',
      tip: [
        '"Each/Every + N số ít" → luôn chia V số ít, kể cả "each of + N số nhiều" (chủ ngữ thật là "each").',
        '"One of + N số nhiều" → chia V số ít (chủ ngữ thật là "one").',
        '"The number of + N số nhiều" = số ít (chia V số ít) >< "A number of + N số nhiều" = nhiều (chia V số nhiều).',
        '"Along with / together with / as well as / in addition to + cụm" thường có dấu phẩy bao quanh, KHÔNG ảnh hưởng đến việc chia động từ — động từ vẫn chia theo chủ ngữ chính đứng trước.',
        '"Either...or / Neither...nor / Not only...but also": động từ chia theo chủ ngữ đứng GẦN động từ nhất (quy tắc "gần đâu chia đó").',
        '"Both A and B" luôn là số nhiều, chia V số nhiều — không có ngoại lệ như either/or.',
        'Đại từ bất định kết thúc bằng -body/-one/-thing (everybody, everyone, someone, anybody, nobody...) luôn là số ít.',
        '"There + be" chia theo danh từ đứng NGAY SAU nó, không phải theo "there".',
        'Danh từ tập hợp (committee, team, staff, family, company) khi coi là MỘT khối thống nhất → chia V số ít.',
        'Cụm chủ ngữ dạng "V-ing + ..." hoặc "To V + ..." (danh động từ/động từ nguyên mẫu làm chủ ngữ) luôn chia V số ít.',
        'Danh từ có hình thức số nhiều nhưng luôn chia V số ít: news, means, series, species.',
        '"The + tính từ" chỉ một nhóm người (the rich, the elderly, the unemployed) → V số nhiều: The rich are not always happy.',
        'Danh từ không đếm được (equipment, furniture, information, advice, luggage, machinery, news) luôn chia V số ít, không thêm "-s".',
        '"Phân số/phần trăm + of + N" và "All of/Most of/Some of/Half of + N" chia động từ theo danh từ đứng SAU "of".'
      ]
    }
  ],

  quizzes: [
    {
      id: 'hh-1', title: '1. Quy tắc cơ bản — each/every/one of/đại từ bất định',
      items: [
        {q:'Each of the applicants ------ asked to complete a short test before the interview.', choices:['was','were','are','have been'], correct:0, explain:'Dịch: Mỗi ứng viên đều được yêu cầu làm một bài kiểm tra ngắn trước buổi phỏng vấn. — "Each of + N số nhiều" vẫn chia động từ số ít vì "each" luôn mang nghĩa số ít khi làm chủ ngữ. Mẹo thêm: "each of the + N số nhiều" khác với "each + N số ít" (không có "of") — cả hai đều chia V số ít.'},
        {q:'Every employee in the department ------ attended the safety training last week.', choices:['has','have','are','were'], correct:0, explain:'Dịch: Mọi nhân viên trong phòng ban đều đã tham dự buổi tập huấn an toàn tuần trước. — "Every + N số ít" luôn đi với động từ số ít, ở đây là "has attended" (hiện tại hoàn thành). Mẹo thêm: "every" không bao giờ đứng trước danh từ số nhiều, khác với "all" (all + N số nhiều).'},
        {q:'One of the printers on the third floor ------ out of order.', choices:['is','are','were','have been'], correct:0, explain:'Dịch: Một trong những máy in ở tầng ba đang bị hỏng. — Chủ ngữ thật sự là "one" (số ít), "of the printers" chỉ là cụm bổ nghĩa, không quyết định số của động từ. Mẹo thêm: cấu trúc "one of + N số nhiều" luôn chia V số ít — lỗi rất hay gặp khi thí sinh nhìn thấy danh từ số nhiều đứng ngay trước động từ.'},
        {q:'Everybody in the meeting room ------ satisfied with the new proposal.', choices:['seems','seem','are','were'], correct:0, explain:'Dịch: Mọi người trong phòng họp đều có vẻ hài lòng với đề xuất mới. — "Everybody/everyone/someone/anybody/nobody..." luôn được coi là số ít, chia V số ít. Mẹo thêm: các đại từ bất định kết thúc bằng "-body/-one/-thing" đều là số ít, dù ý nghĩa có thể chỉ nhiều người.'},
        {q:'The number of visitors to the museum ------ increased significantly this year.', choices:['has','have','are','were'], correct:0, explain:'Dịch: Số lượng khách tham quan bảo tàng đã tăng đáng kể trong năm nay. — "The number of + N số nhiều" = số ít (chủ ngữ chính là "the number"), chia V số ít. Mẹo thêm: phân biệt với "a number of + N số nhiều" = nhiều, chia V số nhiều (ví dụ: "A number of visitors have complained.").'},
        {q:'A number of employees ------ requested to work remotely next month.', choices:['have','has','is','was'], correct:0, explain:'Dịch: Một số nhân viên đã yêu cầu được làm việc từ xa vào tháng tới. — "A number of + N số nhiều" mang nghĩa "một số/nhiều", chia động từ số nhiều. Mẹo thêm: đây là cặp bẫy kinh điển trong TOEIC — "the number of" (số ít) và "a number of" (số nhiều) chỉ khác nhau ở mạo từ nhưng chia động từ hoàn toàn khác nhau.'},
        {q:'Neither the manager nor the employees ------ aware of the schedule change.', choices:['were','was','is','has been'], correct:0, explain:'Dịch: Cả quản lý lẫn nhân viên đều không biết về việc thay đổi lịch trình. — Với "neither...nor" / "either...or" / "not only...but also", động từ chia theo chủ ngữ đứng GẦN động từ nhất — ở đây là "the employees" (số nhiều) nên dùng "were". Mẹo thêm: nếu đảo vị trí thành "Neither the employees nor the manager ___", đáp án sẽ đổi thành "was" vì chủ ngữ gần nhất lúc đó là "the manager" (số ít).'},
        {q:'Either the supervisor or her assistants ------ responsible for approving the request.', choices:['are','is','be','being'], correct:0, explain:'Dịch: Hoặc là người giám sát hoặc các trợ lý của cô ấy sẽ chịu trách nhiệm phê duyệt yêu cầu này. — Chủ ngữ gần động từ nhất là "her assistants" (số nhiều) → chia "are". Mẹo thêm: quy tắc "gần đâu chia đó" áp dụng cho cả "either...or" và "neither...nor" và "not only...but also".'},
        {q:'Not only the manager but also the staff members ------ invited to the annual dinner.', choices:['are','is','was','has been'], correct:0, explain:'Dịch: Không chỉ quản lý mà cả các nhân viên cũng được mời đến buổi tiệc thường niên. — "the staff members" (số nhiều) đứng gần động từ nên chia "are". Mẹo thêm: "not only...but also" nối 2 chủ ngữ nhưng động từ luôn theo chủ ngữ thứ hai (gần vị trí động từ hơn).'},
        {q:'Almost 60 percent of the budget ------ allocated to marketing activities this quarter.', choices:['has been','have been','are','were'], correct:0, explain:'Dịch: Gần 60% ngân sách đã được phân bổ cho các hoạt động marketing trong quý này. — "phần trăm/phân số + of + N" chia động từ theo danh từ đi sau "of": ở đây "the budget" không đếm được → số ít → "has been". Mẹo thêm: nếu là "60 percent of the employees ___ agreed", thì "employees" số nhiều nên chia "have agreed".'},
        {"q": "Every employee ------- a parking pass.", "choices": ["receives", "receive", "are receiving", "have received"], "correct": 0, "explain": "Dịch: Mỗi nhân viên được nhận thẻ gửi xe. — \"Every + N số ít\" → động từ số ít."},
        {"q": "Each of the rooms ------- a private bathroom.", "choices": ["has", "have", "are having", "were having"], "correct": 0, "explain": "Dịch: Mỗi phòng có phòng tắm riêng. — \"Each of\" → số ít."},
        {"q": "One of our clients ------- to change the contract.", "choices": ["wants", "want", "are wanting", "have wanted"], "correct": 0, "explain": "Dịch: Một trong các khách hàng muốn đổi hợp đồng. — \"One of + N số nhiều\" → số ít."},
        {"q": "Someone ------- left a phone in the meeting room.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Ai đó để quên điện thoại trong phòng họp. — Đại từ bất định → số ít."},
        {"q": "Nobody ------- the answer to that question.", "choices": ["knows", "know", "are knowing", "have known"], "correct": 0, "explain": "Dịch: Không ai biết câu trả lời. — \"Nobody\" → số ít."},
        {"q": "Everything in the store ------- 20 percent off today.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Hôm nay mọi thứ trong cửa hàng giảm 20%. — \"Everything\" → số ít."},
        {"q": "Each manager ------- to submit a report.", "choices": ["needs", "need", "are needing", "have needed"], "correct": 0, "explain": "Dịch: Mỗi quản lý cần nộp báo cáo. — \"Each + N số ít\"."},
        {"q": "Everyone ------- excited about the new project.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Ai cũng hào hứng với dự án mới. — \"Everyone\" → số ít."},
        {"q": "One of the printers ------- not working.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Một trong các máy in không hoạt động. — \"One of\" → số ít."},
        {"q": "Neither candidate ------- the required experience.", "choices": ["has", "have", "are having", "were having"], "correct": 0, "explain": "Dịch: Không ứng viên nào (trong hai người) có kinh nghiệm cần thiết. — \"Neither + danh từ số ít\" → động từ số ít."},
        {"q": "Anyone who ------- late must sign in at the front desk.", "choices": ["arrives", "arrive", "are arriving", "have arrived"], "correct": 0, "explain": "Dịch: Ai đến muộn phải ký tên ở quầy. — \"Anyone who\" → động từ số ít."},
        {"q": "Every room and office ------- cleaned daily.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Mọi phòng và văn phòng đều được dọn hằng ngày. — \"Every A and B\" → số ít."},
        {"q": "Something ------- wrong with the system.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Hệ thống có gì đó không ổn. — \"Something\" → số ít."},
        {"q": "Each of the candidates ------- an interview next week.", "choices": ["has", "have", "are having", "were having"], "correct": 0, "explain": "Dịch: Mỗi ứng viên có buổi phỏng vấn tuần sau. — \"Each of\" → số ít."},
        {"q": "Nothing ------- been decided yet.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Vẫn chưa có gì được quyết định. — \"Nothing\" → số ít."}
      ]
    },
    {
      id: 'hh-2', title: '2. Nâng cao — along with/there is-are/danh từ tập hợp/chủ ngữ dạng V-ing',
      items: [
        {q:'The CEO, along with several board members, ------ scheduled to attend the conference.', choices:['is','are','were','have'], correct:0, explain:'Dịch: Giám đốc điều hành, cùng với vài thành viên hội đồng quản trị, dự kiến sẽ tham dự hội nghị. — Cụm "along with/together with/as well as/in addition to + N" chỉ là cụm bổ nghĩa xen giữa (thường có dấu phẩy), KHÔNG ảnh hưởng đến việc chia động từ — động từ vẫn chia theo chủ ngữ chính "The CEO" (số ít). Mẹo thêm: đây khác với "and" — "The CEO and several board members ARE..." (nối bằng and thì cộng gộp thành số nhiều).'},
        {q:'There ------ several reasons why the project was delayed.', choices:['are','is','has','was'], correct:0, explain:'Dịch: Có vài lý do khiến dự án bị trì hoãn. — Trong cấu trúc "There + be", động từ chia theo danh từ đứng NGAY SAU nó, ở đây "several reasons" số nhiều → "are". Mẹo thêm: "there" không phải là chủ ngữ thật, chỉ đóng vai trò dẫn dắt câu — luôn nhìn danh từ phía sau để chọn dạng "be" phù hợp.'},
        {q:'The committee ------ meeting every Thursday to review new applications.', choices:['is','are','have been','were'], correct:0, explain:'Dịch: Ủy ban họp vào mỗi thứ Năm để xem xét các đơn ứng tuyển mới. — "Committee/team/staff/family/company" là danh từ tập hợp (collective noun), khi được xem là MỘT khối thống nhất thì chia V số ít. Mẹo thêm: TOEIC luôn ưu tiên coi danh từ tập hợp là số ít trừ khi có dấu hiệu rõ ràng nhấn mạnh từng thành viên riêng lẻ.'},
        {q:'Reading customer reviews before making a purchase ------ become a common habit.', choices:['has','have','are','were'], correct:0, explain:'Dịch: Việc đọc đánh giá của khách hàng trước khi mua sắm đã trở thành một thói quen phổ biến. — Khi một cụm V-ing (danh động từ) làm chủ ngữ, nó luôn được coi là số ít, dù có tân ngữ số nhiều theo sau ("customer reviews"). Mẹo thêm: cụm chủ ngữ dạng "V-ing + ..." hoặc "To V + ..." luôn chia động từ số ít.'},
        {q:'All of the information in the report ------ accurate and up to date.', choices:['is','are','have been','were'], correct:0, explain:'Dịch: Toàn bộ thông tin trong báo cáo đều chính xác và cập nhật. — "All of + N không đếm được" (information, furniture, equipment, advice) → V số ít. Mẹo thêm: so sánh với "All of the employees ARE satisfied" (N đếm được số nhiều → V số nhiều) — "all of" chia theo danh từ theo sau, giống "some of/most of/half of".'},
        {q:'Most of the equipment in the warehouse ------ outdated and needs replacement.', choices:['is','are','were','have'], correct:0, explain:'Dịch: Hầu hết thiết bị trong nhà kho đã lỗi thời và cần được thay thế. — "equipment" là danh từ không đếm được, nên "most of the equipment" chia V số ít. Mẹo thêm: các danh từ không đếm được thường gặp trong TOEIC: equipment, furniture, information, advice, luggage, machinery — luôn chia động từ số ít, không thêm "-s".'},
        {q:'Both the manager and the assistant ------ present at the negotiation.', choices:['were','was','is','has been'], correct:0, explain:'Dịch: Cả quản lý lẫn trợ lý đều có mặt tại buổi đàm phán. — "Both A and B" luôn được coi là chủ ngữ số nhiều, chia V số nhiều, không phụ thuộc vào chủ ngữ gần là gì (khác với either/or). Mẹo thêm: "both...and" = phép cộng chắc chắn tạo ra số nhiều, không có ngoại lệ như "either/or".'},
        {q:'The news about the merger ------ surprised many employees.', choices:['has','have','were','are'], correct:0, explain:'Dịch: Tin tức về việc sáp nhập đã khiến nhiều nhân viên bất ngờ. — "News" có hình thức số nhiều (kết thúc bằng "-s") nhưng LUÔN là danh từ không đếm được/số ít về ngữ pháp. Mẹo thêm: các từ dễ nhầm dạng này: news, means, series, species — nhìn giống số nhiều nhưng chia động từ số ít.'},
        {q:'Everyone who attended the workshop ------ given a certificate of completion.', choices:['was','were','are','have been'], correct:0, explain:'Dịch: Mọi người tham dự buổi hội thảo đều được cấp chứng chỉ hoàn thành. — "Everyone" luôn số ít; mệnh đề quan hệ "who attended the workshop" chỉ bổ nghĩa, không ảnh hưởng số của động từ chính. Mẹo thêm: khi có mệnh đề quan hệ xen giữa chủ ngữ và động từ chính, hãy bỏ qua mệnh đề đó để xác định đúng số của chủ ngữ thật.'},
        {q:'The majority of shareholders ------ in favor of the new policy.', choices:['are','is','was','has been'], correct:0, explain:'Dịch: Đa số cổ đông ủng hộ chính sách mới. — "The majority of + N số nhiều" chia theo danh từ phía sau (shareholders, số nhiều) → "are". Mẹo thêm: nếu là "The majority of the staff IS..." (staff là danh từ tập hợp số ít) thì có thể chia số ít — cần dựa vào danh từ đi kèm "of" là số ít hay số nhiều.'},
        {"q": "The manager, along with his team, ------- attending the fair.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Quản lý cùng nhóm sẽ dự hội chợ. — \"along with\" không làm chủ ngữ số nhiều → theo \"The manager\"."},
        {"q": "There ------- several reasons for the delay.", "choices": ["are", "is", "was", "has been"], "correct": 0, "explain": "Dịch: Có nhiều lý do cho sự chậm trễ. — \"There + be\" chia theo danh từ sau (reasons số nhiều)."},
        {"q": "There ------- a problem with the printer.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Máy in có vấn đề. — Danh từ sau số ít → \"is\"."},
        {"q": "The committee ------- every Monday.", "choices": ["meets", "meet", "are meeting", "have met"], "correct": 0, "explain": "Dịch: Uỷ ban họp mỗi thứ Hai. — Danh từ tập hợp coi như một khối → số ít."},
        {"q": "Reading the reports ------- a lot of time.", "choices": ["takes", "take", "are taking", "have taken"], "correct": 0, "explain": "Dịch: Đọc các báo cáo tốn nhiều thời gian. — Chủ ngữ V-ing → số ít."},
        {"q": "The CEO as well as the directors ------- at the meeting.", "choices": ["was", "were", "are", "have been"], "correct": 0, "explain": "Dịch: CEO cũng như các giám đốc đã có mặt ở cuộc họp. — \"as well as\" → theo chủ ngữ đầu (The CEO)."},
        {"q": "Mathematics ------- my favorite subject.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Toán là môn tôi thích nhất. — Môn học tận cùng -s vẫn số ít."},
        {"q": "The news ------- surprising to everyone.", "choices": ["was", "were", "are", "have been"], "correct": 0, "explain": "Dịch: Tin này khiến ai cũng bất ngờ. — \"news\" không đếm được → số ít."},
        {"q": "The staff ------- happy with the new schedule.", "choices": ["are", "is being", "has", "was being"], "correct": 0, "explain": "Dịch: Nhân viên hài lòng với lịch mới. — \"staff\" thường dùng như danh từ số nhiều (các nhân viên)."},
        {"q": "Working with clients ------- patience.", "choices": ["requires", "require", "are requiring", "have required"], "correct": 0, "explain": "Dịch: Làm việc với khách cần sự kiên nhẫn. — Chủ ngữ V-ing → số ít."},
        {"q": "There ------- many people at the event.", "choices": ["were", "was", "is", "has been"], "correct": 0, "explain": "Dịch: Có nhiều người ở sự kiện. — \"many people\" số nhiều."},
        {"q": "The team ------- won three awards this year.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Năm nay đội đã giành ba giải. — Danh từ tập hợp như một khối → số ít."},
        {"q": "Mr. Kim, together with his assistants, ------- the presentation.", "choices": ["is preparing", "are preparing", "prepare", "have prepared"], "correct": 0, "explain": "Dịch: Ông Kim cùng các trợ lý đang chuẩn bị bài thuyết trình. — \"together with\" → theo \"Mr. Kim\"."},
        {"q": "The police ------- investigating the incident.", "choices": ["are", "is", "was", "has been"], "correct": 0, "explain": "Dịch: Cảnh sát đang điều tra vụ việc. — \"police\" luôn số nhiều."},
        {"q": "Ten kilometers ------- a long way to walk.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Mười cây số là quãng đường dài để đi bộ. — Khoảng cách xem như một khối → số ít."}
      ]
    },
    {
      id: 'hh-3', title: '3. Luyện thêm — all of, some of, few, neither, the number of…',
      note: 'Bài bổ sung do AZEnglish soạn thêm (không nằm trong sách luyện đề gốc) để luyện phần lý thuyết S & V Agreement.',
      items: [
        {q:'All of the information in the report ------ been verified by the audit team.', choices:['have','has','are','were'], correct:1, explain:'Dịch: Toàn bộ thông tin trong báo cáo đã được nhóm kiểm toán xác minh. — Giải thích: "all of + N" chia theo N sau "of"; "information" là danh từ không đếm được → V số ít "has". Mẹo thêm: đừng bị "all" đánh lừa thành số nhiều — luôn nhìn vào danh từ đứng sau "of".'},
        {q:'Some of the applicants ------ already submitted their portfolios.', choices:['has','is','have','was'], correct:2, explain:'Dịch: Một số ứng viên đã nộp hồ sơ năng lực của mình. — Giải thích: "some of + N" chia theo N; "applicants" là số nhiều → "have". Mẹo thêm: cùng cấu trúc "Some of…" nhưng đổi danh từ thành "the money" thì phải dùng số ít ("has").'},
        {q:'Neither of the two proposals ------ acceptable to the board.', choices:['are','were','is','have been'], correct:2, explain:'Dịch: Không đề xuất nào trong hai đề xuất được hội đồng chấp nhận. — Giải thích: "neither of + N" (cũng như either/each) đi với V số ít → "is". Mẹo thêm: trong văn nói có người dùng số nhiều, nhưng TOEIC luôn chấm theo quy tắc số ít.'},
        {q:'Each of the new employees ------ required to attend the orientation session.', choices:['are','is','were','have'], correct:1, explain:'Dịch: Mỗi nhân viên mới đều được yêu cầu tham dự buổi định hướng. — Giải thích: "each of + N số nhiều" vẫn chia V số ít vì chủ ngữ thật là "each" → "is". Mẹo thêm: "each/every/one of + N số nhiều" → luôn V số ít.'},
        {q:'A number of customers ------ complained about the delay in delivery.', choices:['has','is','have','was'], correct:2, explain:'Dịch: Một số khách hàng đã phàn nàn về việc giao hàng chậm. — Giải thích: "a number of + N số nhiều" mang nghĩa "một số" → V số nhiều "have". Mẹo thêm: so sánh với "the number of" ở câu sau — chỉ khác một mạo từ nhưng đổi hẳn cách chia động từ.'},
        {q:'The number of complaints ------ dropped significantly since the new policy took effect.', choices:['have','are','has','were'], correct:2, explain:'Dịch: Số lượng khiếu nại đã giảm đáng kể kể từ khi chính sách mới có hiệu lực. — Giải thích: chủ ngữ thật là "the number" (một con số) → V số ít; "since" đòi hiện tại hoàn thành → "has dropped". Mẹo thêm: "the number of + N số nhiều" → số ít; "a number of + N số nhiều" → số nhiều.'},
        {q:'Much of the equipment in the laboratory ------ outdated.', choices:['are','were','have been','is'], correct:3, explain:'Dịch: Phần lớn thiết bị trong phòng thí nghiệm đã lỗi thời. — Giải thích: "much of + N không đếm được" → V số ít; "equipment" là danh từ không đếm được → "is". Mẹo thêm: equipment, furniture, luggage, machinery, information là các danh từ không đếm được rất hay bị hỏi trong TOEIC.'},
        {q:'Few of the candidates ------ qualified for the senior position.', choices:['is','was','are','has been'], correct:2, explain:'Dịch: Rất ít ứng viên đủ tiêu chuẩn cho vị trí cấp cao. — Giải thích: "few of + N số nhiều" → V số nhiều "are". Mẹo thêm: "few" (rất ít, mang nghĩa tiêu cực) khác "a few" (một vài, mang nghĩa tích cực) nhưng cả hai đều đi với danh từ đếm được số nhiều.'},
        {q:'Half of the budget ------ been spent on marketing this quarter.', choices:['have','has','are','were'], correct:1, explain:'Dịch: Một nửa ngân sách đã được chi cho marketing trong quý này. — Giải thích: "half of + N" chia theo N; "budget" số ít → "has". Mẹo thêm: "budget" là danh từ đếm được nhưng ở đây là số ít, nên "half of the budget" đi với V số ít.'},
        {q:'Half of the employees ------ working remotely this week.', choices:['is','are','has','was'], correct:1, explain:'Dịch: Một nửa số nhân viên đang làm việc từ xa trong tuần này. — Giải thích: cùng cấu trúc "half of + N" nhưng "employees" là số nhiều → "are". Mẹo thêm: hai câu "Half of the budget has…" và "Half of the employees are…" cho thấy động từ luôn chạy theo danh từ sau "of".'},
        {q:'The manager and the assistant director ------ scheduled to visit the branch next week.', choices:['is','has','are','was'], correct:2, explain:'Dịch: Giám đốc và phó giám đốc dự kiến sẽ thăm chi nhánh vào tuần tới. — Giải thích: "N1 and N2" (hai người khác nhau, có mạo từ "the" lặp lại) → V số nhiều "are". Mẹo thêm: nếu chỉ có một "the" trước cả hai danh từ (the manager and director) thì có thể chỉ MỘT người giữ hai chức danh → số ít.'},
        {q:'The elderly ------ more medical care than younger people.', choices:['needs','need','is needing','has needed'], correct:1, explain:'Dịch: Người cao tuổi cần được chăm sóc y tế nhiều hơn người trẻ. — Giải thích: "the + tính từ" (the elderly) chỉ một nhóm người → V số nhiều "need" (không thêm -s). Mẹo thêm: các cụm tương tự: the rich, the poor, the young, the unemployed.'},
        {q:'Spaghetti and meatballs ------ the most popular dish at our cafeteria.', choices:['are','is','were','have been'], correct:1, explain:'Dịch: Mì Ý sốt viên là món phổ biến nhất ở căng tin của chúng tôi. — Giải thích: "spaghetti and meatballs" chỉ MỘT món ăn duy nhất → coi là số ít → "is". Mẹo thêm: các cặp như "bread and butter", "rock and roll", "fish and chips" cũng thường được xem là một thực thể → số ít.'},
        {"q": "All of the information ------- correct.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Toàn bộ thông tin đều chính xác. — \"All of + N không đếm được\" → số ít."},
        {"q": "All of the students ------- passed the exam.", "choices": ["have", "has", "is", "was"], "correct": 0, "explain": "Dịch: Tất cả học viên đã thi đậu. — \"All of + N số nhiều\" → số nhiều."},
        {"q": "Some of the money ------- missing.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Một phần tiền bị mất. — \"Some of + N không đếm được\" → số ít."},
        {"q": "Some of the files ------- damaged.", "choices": ["are", "is", "was", "has been"], "correct": 0, "explain": "Dịch: Một số tệp bị hỏng. — \"Some of + N số nhiều\" → số nhiều."},
        {"q": "Few employees ------- the new rule.", "choices": ["understand", "understands", "is understanding", "has understood"], "correct": 0, "explain": "Dịch: Ít nhân viên hiểu quy định mới. — \"Few + N số nhiều\" → số nhiều."},
        {"q": "Little time ------- left before the deadline.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Còn ít thời gian trước hạn. — \"Little + N không đếm được\" → số ít."},
        {"q": "Half of the budget ------- been spent.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Một nửa ngân sách đã được chi. — \"Half of\" chia theo danh từ sau (budget số ít)."},
        {"q": "Half of the workers ------- part-time.", "choices": ["are", "is", "was", "has been"], "correct": 0, "explain": "Dịch: Một nửa công nhân làm bán thời gian. — \"workers\" số nhiều."},
        {"q": "None of the equipment ------- working.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Không thiết bị nào hoạt động. — \"equipment\" không đếm được → số ít."},
        {"q": "Most of the furniture ------- new.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Hầu hết đồ nội thất đều mới. — \"furniture\" không đếm được → số ít."},
        {"q": "The number of visitors ------- risen sharply.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Số khách tăng mạnh. — \"The number of\" → số ít."},
        {"q": "A number of problems ------- been reported.", "choices": ["have", "has", "is", "was"], "correct": 0, "explain": "Dịch: Một số vấn đề đã được báo cáo. — \"A number of\" → số nhiều."}
      ]
    },
    {
      id: 'hh-4', title: "4. Luyện thêm: hoà hợp chủ ngữ – động từ",
      items: [
        {"q": "The list of approved vendors ------- updated every quarter.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Danh sách nhà cung cấp được duyệt cập nhật mỗi quý. — Chủ ngữ chính là \"The list\" (số ít), \"of approved vendors\" chỉ bổ nghĩa → \"is\"."},
        {"q": "Each of the new employees ------- a laptop on the first day.", "choices": ["receives", "receive", "are receiving", "have received"], "correct": 0, "explain": "Dịch: Mỗi nhân viên mới nhận một máy tính xách tay vào ngày đầu. — \"Each of + N số nhiều\" + động từ số ít."},
        {"q": "Neither the manager nor the assistants ------- available on Friday.", "choices": ["are", "is", "was", "has been"], "correct": 0, "explain": "Dịch: Cả quản lý lẫn các trợ lý đều không rảnh thứ Sáu. — \"Neither A nor B\": động từ chia theo B (the assistants, số nhiều) → \"are\"."},
        {"q": "The number of applicants ------- increased this year.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Số lượng ứng viên năm nay đã tăng. — \"The number of + N\" + động từ số ít. (Khác: \"A number of + N\" + số nhiều.)"},
        {"q": "A number of staff members ------- requested flexible hours.", "choices": ["have", "has", "is", "was"], "correct": 0, "explain": "Dịch: Một số nhân viên đã đề nghị giờ làm linh hoạt. — \"A number of + N số nhiều\" + động từ số nhiều."},
        {"q": "The equipment in the laboratories ------- inspected twice a year.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Thiết bị trong các phòng thí nghiệm được kiểm tra hai lần/năm. — \"equipment\" không đếm được → động từ số ít."},
        {"q": "Mr. Diaz, along with his two assistants, ------- the trade fair next week.", "choices": ["is attending", "are attending", "attend", "have attended"], "correct": 0, "explain": "Dịch: Ông Diaz cùng hai trợ lý sẽ dự hội chợ tuần tới. — \"along with/as well as\" không làm chủ ngữ số nhiều; động từ theo \"Mr. Diaz\" (số ít)."},
        {"q": "Twenty dollars ------- the fee for late registration.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Hai mươi đô là phí đăng ký muộn. — Số tiền/khoảng thời gian/khoảng cách xem như một khối → số ít."},
        {"q": "Both the director and the producer ------- to attend the premiere.", "choices": ["plan", "plans", "is planning", "has planned"], "correct": 0, "explain": "Dịch: Cả đạo diễn lẫn nhà sản xuất đều dự định dự buổi công chiếu. — \"Both A and B\" + động từ số nhiều."},
        {"q": "Everyone in the sales department ------- invited to the celebration.", "choices": ["was", "were", "are", "have been"], "correct": 0, "explain": "Dịch: Mọi người trong phòng kinh doanh đều được mời dự tiệc. — Đại từ bất định \"Everyone\" + động từ số ít."},
        {"q": "The results of the customer survey ------- surprising.", "choices": ["were", "was", "is", "has been"], "correct": 0, "explain": "Dịch: Kết quả khảo sát khách hàng thật bất ngờ. — Chủ ngữ chính \"The results\" (số nhiều) → \"were\"."},
        {"q": "Either the invoice or the receipts ------- to be attached to the claim.", "choices": ["need", "needs", "is needing", "has needed"], "correct": 0, "explain": "Dịch: Hoặc hoá đơn hoặc các biên lai cần được đính kèm hồ sơ. — \"Either A or B\": động từ chia theo B (the receipts, số nhiều) → \"need\"."},
        {"q": "The price of these shoes ------- too high.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Giá đôi giày này quá cao. — Chủ ngữ chính \"The price\" số ít."},
        {"q": "The books on the shelf ------- to the library.", "choices": ["belong", "belongs", "is belonging", "has belonged"], "correct": 0, "explain": "Dịch: Sách trên kệ thuộc về thư viện. — \"The books\" số nhiều."},
        {"q": "Either the manager or the staff ------- responsible.", "choices": ["are", "is", "was", "has been"], "correct": 0, "explain": "Dịch: Hoặc quản lý hoặc nhân viên chịu trách nhiệm. — \"Either A or B\" → theo B (the staff, số nhiều)."},
        {"q": "Neither the staff nor the manager ------- aware of the change.", "choices": ["was", "were", "are", "have been"], "correct": 0, "explain": "Dịch: Cả nhân viên lẫn quản lý đều không biết thay đổi. — Theo chủ ngữ gần (the manager, số ít)."},
        {"q": "Both Ms. Lee and Mr. Kim ------- in sales.", "choices": ["work", "works", "is working", "has worked"], "correct": 0, "explain": "Dịch: Cả bà Lee và ông Kim đều làm bán hàng. — \"Both A and B\" → số nhiều."},
        {"q": "The quality of the products ------- improved.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Chất lượng sản phẩm đã cải thiện. — Chủ ngữ chính \"The quality\" số ít."},
        {"q": "The members of the board ------- tomorrow.", "choices": ["meet", "meets", "is meeting", "has met"], "correct": 0, "explain": "Dịch: Các thành viên HĐQT họp ngày mai. — \"The members\" số nhiều."},
        {"q": "Two hours ------- enough time to finish the task.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Hai tiếng là đủ để làm xong. — Khoảng thời gian như một khối → số ít."},
        {"q": "The goods ------- delivered yesterday.", "choices": ["were", "was", "is", "has been"], "correct": 0, "explain": "Dịch: Hàng hoá đã được giao hôm qua. — \"goods\" luôn số nhiều."},
        {"q": "The list of names ------- on the wall.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Danh sách tên được dán trên tường. — Chủ ngữ chính \"The list\"."},
        {"q": "Everybody in the offices ------- a new computer.", "choices": ["has", "have", "are", "were"], "correct": 0, "explain": "Dịch: Mọi người trong các văn phòng đều có máy tính mới. — \"Everybody\" → số ít."},
        {"q": "The results of the test ------- posted online.", "choices": ["were", "was", "is", "has been"], "correct": 0, "explain": "Dịch: Kết quả bài kiểm tra đã được đăng online. — \"The results\" số nhiều."},
        {"q": "What the customers want ------- better service.", "choices": ["is", "are", "were", "have been"], "correct": 0, "explain": "Dịch: Điều khách hàng muốn là dịch vụ tốt hơn. — Mệnh đề danh từ làm chủ ngữ → số ít."}
      ]
    }
  ],

  vocab: [
    {word:'allocate', ipa:'/ˈæləkeɪt/', meaning:'phân bổ (ngân sách, nguồn lực)', example:'Almost 60 percent of the budget has been allocated to marketing.', note:'danh từ: allocation'},
    {word:'shareholder', ipa:'/ˈʃerhoʊldər/', meaning:'cổ đông', example:'The majority of shareholders are in favor of the new policy.', note:'liên quan: stakeholder (bên liên quan)'},
    {word:'turnover', ipa:'/ˈtɜːrnoʊvər/', meaning:'tỷ lệ nghỉ việc / doanh thu (tuỳ ngữ cảnh)', example:'Employee turnover this year is much lower than before.', note:'"staff turnover" = tỷ lệ nhân viên nghỉ việc'},
    {word:'outdated', ipa:'/ˌaʊtˈdeɪtɪd/', meaning:'lỗi thời, cũ kỹ', example:'Most of the equipment in the warehouse is outdated.', note:'đồng nghĩa: obsolete'},
    {word:'in favor of', ipa:'/ɪn ˈfeɪvər əv/', meaning:'ủng hộ (điều gì)', example:'Shareholders are in favor of the new policy.', note:'trái nghĩa: opposed to'},
    {word:'merger', ipa:'/ˈmɜːrdʒər/', meaning:'sự sáp nhập (công ty)', example:'The news about the merger surprised many employees.', note:'động từ: merge (sáp nhập)'},
    {word:'certificate of completion', ipa:'/sərˈtɪfɪkət əv kəmˈpliːʃn/', meaning:'chứng chỉ hoàn thành (khoá học)', example:'Everyone who attended the workshop was given a certificate of completion.', note:'thường viết tắt: certificate'},
    {word:'negotiation', ipa:'/nɪˌɡoʊʃiˈeɪʃn/', meaning:'cuộc đàm phán', example:'Both the manager and the assistant were present at the negotiation.', note:'động từ: negotiate'}
  ]
};
