window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['lien-tu-part6'] = {
  id: 'lien-tu-part6',
  order: 13,
  title: 'Từ Nối Câu & Part 6',
  subtitle: 'Transitions & Text Completion',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 6',
  sourceTheory: 'AZ Grammar 2nd edition — Conjunctions (Liên từ) + kinh nghiệm luyện Part 6',
  note: 'Bài tập do AZEnglish soạn thêm theo dạng Part 6 (điền từ nối, chọn câu chèn vào đoạn văn). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Từ nối câu (Transitions) theo chức năng',
      tenses: [
        {
          name: 'Bổ sung thông tin',
          form: 'moreover · furthermore · in addition · besides · also',
          usage: ['The new policy reduces costs. Furthermore, it improves customer satisfaction.', 'The hotel offers free breakfast. In addition, guests can use the fitness center at no charge.'],
          signals: 'Hai ý CÙNG HƯỚNG (đều tích cực hoặc đều tiêu cực) → dùng từ bổ sung.'
        },
        {
          name: 'Tương phản, nhượng bộ',
          form: 'however · nevertheless · nonetheless · on the other hand · in contrast · instead',
          usage: ['The company had planned to open in May. However, construction delays pushed the opening to July.', 'The budget was cut by half. Nevertheless, sales rose by 15%.', 'Ms. Lee did not attend; instead, she sent her assistant.'],
          signals: 'Hai ý ĐỐI LẬP hoặc kết quả trái với dự đoán → however/nevertheless; thay thế một hành động bằng hành động khác → instead.'
        },
        {
          name: 'Kết quả, hệ quả',
          form: 'therefore · consequently · as a result · thus · accordingly',
          usage: ['The printer has been repaired twice this month. Consequently, we have decided to replace it.'],
          signals: 'Câu sau là HỆ QUẢ/quyết định rút ra từ câu trước.'
        },
        {
          name: 'Ví dụ, trình tự, điều kiện',
          form: 'for example / for instance · meanwhile · then · afterward · finally · otherwise',
          usage: ['Several factors affect morale. For example, a flexible schedule improves job satisfaction.', 'One team tests the software. Meanwhile, the other team writes the manual.', 'Submit the form by Friday. Otherwise, your application will not be processed.'],
          signals: 'otherwise = nếu không thì (hậu quả xấu nếu không làm điều trước đó).'
        }
      ]
    },
    {
      group: 'Phân biệt từ nối câu, liên từ và giới từ',
      tip: [
        'Từ nối câu (however, therefore, moreover…) đứng đầu câu/sau dấu chấm phẩy và có DẤU PHẨY theo sau: "…; however, sales rose."',
        'Liên từ (although, because, while, since) nối hai mệnh đề đầy đủ (S + V): Although the train was delayed, all passengers arrived on time.',
        'Giới từ (despite, because of, due to) theo sau là DANH TỪ/V-ing: Despite the heavy rain, the event went ahead. · The store closed early because of a power outage.',
        'Cặp dễ nhầm: although (+ mệnh đề) ↔ despite (+ danh từ) · because (+ mệnh đề) ↔ because of (+ danh từ).'
      ]
    },
    {
      group: 'Chiến lược Part 6: câu chèn vào đoạn văn',
      tip: [
        'Bước 1: đọc câu TRƯỚC và SAU chỗ trống để hiểu mạch ý.',
        'Bước 2: tìm "manh mối liên kết": đại từ (it, they, this), từ nối (however, in addition), từ lặp lại danh từ ở câu trước/sau.',
        'Bước 3: loại các câu lạc đề (nói chuyện khác chủ đề đoạn văn), câu sai thì, hoặc câu lặp lại nguyên ý đã có.',
        'Bước 4: đọc lại cả đoạn với câu vừa chọn xem có mạch lạc không.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'p6-1', title: '1. Điền từ nối câu, liên từ & giới từ',
      items: [
        {q:'The marketing budget was cut by half. ------, sales rose by 15% last quarter.', choices:['Nevertheless','Likewise','For example','Therefore'], correct:0, explain:'Dịch: Ngân sách marketing bị cắt một nửa. Tuy vậy, doanh số quý trước vẫn tăng 15%. — Giải thích: kết quả trái với dự đoán (ngân sách giảm nhưng doanh số tăng) → "Nevertheless". Mẹo thêm: "Therefore" chỉ hệ quả hợp lý, không hợp ở đây.'},
        {q:'The printer has been repaired twice this month. ------, we have decided to replace it.', choices:['Instead of','Although','However','Consequently'], correct:3, explain:'Dịch: Máy in đã được sửa hai lần trong tháng này. Do đó, chúng tôi quyết định thay nó. — Giải thích: quyết định là hệ quả của việc hỏng nhiều lần → "Consequently". Mẹo thêm: "Instead of" và "Although" không đứng đầu câu với dấu phẩy như từ nối.'},
        {q:'The hotel offers free breakfast. ------, guests can use the fitness center at no charge.', choices:['Nevertheless','In addition','Otherwise','In contrast'], correct:1, explain:'Dịch: Khách sạn phục vụ bữa sáng miễn phí. Ngoài ra, khách có thể dùng phòng gym không mất phí. — Giải thích: hai ưu đãi cùng hướng → từ bổ sung "In addition". Mẹo thêm: "In contrast" dùng khi hai ý đối lập.'},
        {q:'Please submit the form by Friday. ------, your application will not be processed.', choices:['Therefore','Moreover','Otherwise','Meanwhile'], correct:2, explain:'Dịch: Vui lòng nộp mẫu đơn trước thứ Sáu. Nếu không, hồ sơ của bạn sẽ không được xử lý. — Giải thích: "Otherwise" = nếu không thì (hậu quả xấu). Mẹo thêm: rất hay gặp trong thông báo và thư trang trọng.'},
        {q:'Several factors affect employee morale. ------, a flexible schedule can greatly improve job satisfaction.', choices:['However','For example','As a result','Otherwise'], correct:1, explain:'Dịch: Có nhiều yếu tố ảnh hưởng đến tinh thần nhân viên. Ví dụ, lịch làm việc linh hoạt có thể cải thiện đáng kể sự hài lòng. — Giải thích: câu sau nêu ví dụ cho câu trước → "For example". Mẹo thêm: đồng nghĩa "For instance".'},
        {q:'The first team is testing the software. ------, the second team is preparing the user manual.', choices:['Meanwhile','Otherwise','Therefore','Instead'], correct:0, explain:'Dịch: Nhóm thứ nhất đang kiểm thử phần mềm. Trong khi đó, nhóm thứ hai đang soạn hướng dẫn sử dụng. — Giải thích: hai việc diễn ra cùng lúc → "Meanwhile". Mẹo thêm: "Meanwhile" cũng có thể mở đầu câu và theo sau bởi dấu phẩy.'},
        {q:'The company had planned to open in May. ------, construction delays pushed the opening to July.', choices:['Moreover','For example','However','Similarly'], correct:2, explain:'Dịch: Công ty đã dự định khai trương vào tháng 5. Tuy nhiên, việc xây dựng bị chậm nên lùi sang tháng 7. — Giải thích: kế hoạch bị đảo ngược → "However". Mẹo thêm: "Moreover" chỉ thêm ý cùng hướng.'},
        {q:'Ms. Lee did not attend the meeting; ------, she sent her assistant to take notes.', choices:['therefore','moreover','otherwise','instead'], correct:3, explain:'Dịch: Bà Lee không dự họp; thay vào đó, bà cử trợ lý đến ghi chép. — Giải thích: thay thế một hành động bằng hành động khác → "instead". Mẹo thêm: trước "instead" dùng dấu chấm phẩy hoặc dấu chấm.'},
        {q:'The new policy reduces costs. ------, it improves customer satisfaction.', choices:['Nonetheless','Otherwise','Furthermore','Instead'], correct:2, explain:'Dịch: Chính sách mới giúp giảm chi phí. Hơn nữa, nó còn nâng cao sự hài lòng của khách hàng. — Giải thích: hai lợi ích cùng hướng → "Furthermore". Mẹo thêm: Furthermore = Moreover = In addition.'},
        {q:'------ the train was delayed, all passengers arrived on time.', choices:['Therefore','However','Despite','Although'], correct:3, explain:'Dịch: Mặc dù tàu bị trễ, tất cả hành khách vẫn đến đúng giờ. — Giải thích: chỗ trống theo sau là mệnh đề đầy đủ (the train was delayed) → cần liên từ "Although". Mẹo thêm: "Despite" phải theo sau là danh từ/V-ing.'},
        {"q": "The hotel is close to the airport. ------- , it offers free parking.", "choices": ["In addition", "However", "Instead", "Otherwise"], "correct": 0, "explain": "Dịch: Khách sạn gần sân bay. Ngoài ra còn miễn phí đỗ xe. — Bổ sung thêm ưu điểm → \"In addition\"."},
        {"q": "The product sold well. ------- , we plan to make more.", "choices": ["Therefore", "However", "Otherwise", "Instead"], "correct": 0, "explain": "Dịch: Sản phẩm bán chạy. Vì vậy chúng tôi định sản xuất thêm. — Kết quả → \"Therefore\"."},
        {"q": "The store is usually busy. ------- , it was quiet today.", "choices": ["However", "Therefore", "Moreover", "For example"], "correct": 0, "explain": "Dịch: Cửa hàng thường đông. Tuy nhiên hôm nay vắng. — Đối lập → \"However\"."},
        {"q": "Please arrive early. ------- , you may not get a seat.", "choices": ["Otherwise", "Moreover", "Therefore", "Similarly"], "correct": 0, "explain": "Dịch: Vui lòng đến sớm. Nếu không có thể không có chỗ ngồi. — \"Otherwise\" = nếu không."},
        {"q": "We offer many services. ------- , we can design your website.", "choices": ["For example", "However", "Instead", "Nevertheless"], "correct": 0, "explain": "Dịch: Chúng tôi có nhiều dịch vụ. Ví dụ, thiết kế website. — Nêu ví dụ → \"For example\"."},
        {"q": "The train was canceled. ------- , we took a bus.", "choices": ["Instead", "Moreover", "Similarly", "In addition"], "correct": 0, "explain": "Dịch: Tàu bị huỷ. Thay vào đó chúng tôi đi xe buýt. — Phương án thay thế → \"Instead\"."},
        {"q": "Our old office was small. ------- , the new one is spacious.", "choices": ["In contrast", "Similarly", "Therefore", "Moreover"], "correct": 0, "explain": "Dịch: Văn phòng cũ chật. Ngược lại văn phòng mới rộng rãi. — Đối chiếu → \"In contrast\"."},
        {"q": "The company had a good year. ------- , profits rose by 20 percent.", "choices": ["In fact", "Instead", "Otherwise", "However"], "correct": 0, "explain": "Dịch: Công ty có một năm tốt. Thực tế lợi nhuận tăng 20%. — Nhấn mạnh/cụ thể hoá → \"In fact\"."},
        {"q": "Prices went up. ------- , sales remained strong.", "choices": ["Nevertheless", "Therefore", "Similarly", "Consequently"], "correct": 0, "explain": "Dịch: Giá tăng. Dù vậy doanh số vẫn tốt. — Kết quả trái kỳ vọng → \"Nevertheless\"."},
        {"q": "The first step is to register online. ------- , you will receive a confirmation email.", "choices": ["Then", "Instead", "However", "Otherwise"], "correct": 0, "explain": "Dịch: Bước đầu là đăng ký online. Sau đó bạn sẽ nhận email xác nhận. — Trình tự → \"Then\"."},
        {"q": "The workshop was useful. ------- , it was free.", "choices": ["Moreover", "However", "Instead", "Otherwise"], "correct": 0, "explain": "Dịch: Hội thảo bổ ích. Hơn nữa còn miễn phí. — Bổ sung → \"Moreover\"."},
        {"q": "The roads were icy. ------- , many employees arrived late.", "choices": ["As a result", "In contrast", "For instance", "Instead"], "correct": 0, "explain": "Dịch: Đường đóng băng. Kết quả là nhiều nhân viên đến muộn. — Hệ quả → \"As a result\"."},
        {"q": "Ms. Kim is an excellent manager. ------- , her team trusts her completely.", "choices": ["Indeed", "Instead", "However", "Otherwise"], "correct": 0, "explain": "Dịch: Bà Kim là quản lý xuất sắc. Thật vậy, nhóm hoàn toàn tin tưởng bà. — Khẳng định thêm → \"Indeed\"."},
        {"q": "The first offer was too low. ------- , the second offer was accepted.", "choices": ["However", "Similarly", "Therefore", "In addition"], "correct": 0, "explain": "Dịch: Lời đề nghị đầu quá thấp. Tuy nhiên lời thứ hai được chấp nhận. — Đối lập → \"However\"."},
        {"q": "Our sales team met its target. ------- , the marketing team exceeded its goals.", "choices": ["Likewise", "Instead", "Otherwise", "However"], "correct": 0, "explain": "Dịch: Nhóm bán hàng đạt mục tiêu. Tương tự nhóm marketing vượt chỉ tiêu. — Cùng chiều → \"Likewise\"."}
      ]
    },
    {
      id: 'p6-2', title: '2. Chọn câu chèn vào đoạn văn & giới từ',
      items: [
        {q:'------ the heavy rain, the outdoor event went ahead as planned.', choices:['Because','Despite','Although','However'], correct:1, explain:'Dịch: Bất chấp cơn mưa lớn, sự kiện ngoài trời vẫn diễn ra như kế hoạch. — Giải thích: theo sau là cụm danh từ "the heavy rain" → giới từ "Despite". Mẹo thêm: "Although" cần một mệnh đề đầy đủ.'},
        {q:'The store closed early ------ a power outage.', choices:['because of','because','although','however'], correct:0, explain:'Dịch: Cửa hàng đóng cửa sớm do mất điện. — Giải thích: theo sau là danh từ "a power outage" → "because of". Mẹo thêm: "because" phải đi kèm mệnh đề (because there was a power outage).'},
        {q:'Thank you for booking with Sunrise Travel. Your tour begins on June 3 at 8 a.m. ------ Please arrive at the meeting point 15 minutes early.', choices:['The meeting point is in front of the main station.','The tour was cancelled last year.','Our office is closed on Sundays.','We sell many types of souvenirs.'], correct:0, explain:'Dịch: Câu cần chọn phải giải thích thêm về "meeting point" được nhắc ở câu sau. — Giải thích: câu sau nói về "the meeting point" → câu chèn phải giới thiệu nó trước. Mẹo thêm: từ khóa lặp lại giữa hai câu là manh mối tốt nhất.'},
        {q:'Memo: Effective Monday, all staff must use the new time-tracking system. ------ Training sessions will be held on Friday.', choices:['The cafeteria has a new menu.','This change is intended to simplify payroll processing.','Many employees enjoy hiking.','Last year’s profits were lower.'], correct:1, explain:'Dịch: Câu chèn giải thích mục đích của việc đổi hệ thống chấm công. — Giải thích: "This change" quay lại chủ đề hệ thống mới, và nối tiếp tự nhiên sang lịch đào tạo. Mẹo thêm: đại từ chỉ định "This + N" là dấu hiệu liên kết với câu trước.'},
        {q:'We are pleased to announce that Ms. Kim will join our team as sales director. ------ She brings more than ten years of experience in retail.', choices:['Please turn off your phones.','Retail sales are seasonal.','The office will be repainted soon.','Her appointment takes effect on March 1.'], correct:3, explain:'Dịch: Câu chèn nói về hiệu lực của việc bổ nhiệm bà Kim. — Giải thích: "Her" quay lại Ms. Kim, cùng chủ đề bổ nhiệm; các câu còn lại lạc đề. Mẹo thêm: loại ngay câu không liên quan chủ đề đoạn văn.'},
        {q:'The library will close for renovation next month. ------ Books can be returned at the drop box outside the building.', choices:['Most students prefer online books.','The library was built in 1950.','During this time, borrowers may still return items.','Fiction is the most popular genre.'], correct:2, explain:'Dịch: Câu chèn nối thời gian đóng cửa với việc vẫn trả sách được. — Giải thích: "During this time" gắn với "close for renovation", và câu sau nói cách trả sách. Mẹo thêm: hãy đọc câu sau để xem câu chèn phải dẫn dắt điều gì.'},
        {q:'Mr. Park submitted his resignation on Friday. ------ He plans to start his own consulting firm.', choices:['Please call back later.','The weather was warm.','Parking is limited.','His last day will be April 30.'], correct:3, explain:'Dịch: Câu chèn cung cấp thêm chi tiết về việc từ chức của ông Park. — Giải thích: cùng chủ đề "resignation" và nối mạch sang kế hoạch sau khi nghỉ. Mẹo thêm: tránh chọn câu chỉ chứa từ quen thuộc mà không liên quan chủ đề.'},
        {q:'Thank you for contacting customer support. ------ We will reply to your inquiry within two business days.', choices:['We have received your message.','Your flight is delayed.','The sale ends tomorrow.','Our stock price has risen.'], correct:0, explain:'Dịch: Câu chèn xác nhận đã nhận tin nhắn của khách. — Giải thích: mở đầu thư hỗ trợ khách hàng: cảm ơn → xác nhận đã nhận → hứa phản hồi. Mẹo thêm: hãy chú ý trình tự logic điển hình của email dịch vụ.'},
        {q:'To reset your password, click the link below. ------ If you did not request a reset, please ignore this e-mail.', choices:['Passwords are hard to remember.','The company was founded in 1998.','The link will expire in 24 hours.','Tickets are non-refundable.'], correct:2, explain:'Dịch: Câu chèn bổ sung thông tin về đường link vừa nhắc. — Giải thích: "The link" lặp lại danh từ ở câu trước, cùng chủ đề đặt lại mật khẩu. Mẹo thêm: danh từ lặp lại giữa các câu = dấu hiệu liên kết mạnh.'},
        {q:'Dear Mr. Lopez, We are writing to inform you that your order ------ shipped yesterday.', choices:['has','was','is being','were'], correct:1, explain:'Dịch: Kính gửi ông Lopez, chúng tôi xin thông báo đơn hàng của ông đã được gửi đi hôm qua. — Giải thích: "yesterday" → quá khứ đơn bị động, chủ ngữ số ít "your order" → "was shipped". Mẹo thêm: trong Part 6 vẫn thường xen câu hỏi ngữ pháp giống Part 5.'},
        {"q": "Thank you for your order. [-------] It will be shipped tomorrow.", "choices": ["Your payment has been received.", "We have closed the store.", "The weather is nice today.", "Please call our competitors."], "correct": 0, "explain": "Dịch: Cảm ơn đã đặt hàng. [Chúng tôi đã nhận thanh toán.] Hàng sẽ giao ngày mai. — Câu chèn phải nối logic giữa \"đặt hàng\" và \"giao hàng\": xác nhận đã thanh toán."},
        {"q": "The office will be closed on Monday. [-------] We will reopen on Tuesday.", "choices": ["This is due to the national holiday.", "Our prices are the lowest.", "Please order online now.", "The CEO enjoys golf."], "correct": 0, "explain": "Dịch: Văn phòng đóng cửa thứ Hai. [Lý do là ngày lễ quốc gia.] Thứ Ba mở lại. — Câu giải thích lý do đóng cửa."},
        {"q": "We are hiring sales staff. [-------] Please send your résumé by May 1.", "choices": ["Applicants should have two years of experience.", "Our office has a cafeteria.", "Sales were low last year.", "The building is very old."], "correct": 0, "explain": "Dịch: Chúng tôi tuyển nhân viên bán hàng. [Ứng viên cần hai năm kinh nghiệm.] Gửi CV trước 1/5. — Nêu yêu cầu tuyển dụng."},
        {"q": "The seminar starts at 9 A.M. [-------] Lunch will be provided.", "choices": ["Please arrive 15 minutes early to register.", "The room has no windows.", "Our CEO was born in 1970.", "Tickets are sold out."], "correct": 0, "explain": "Dịch: Hội thảo bắt đầu 9 giờ. [Vui lòng đến sớm 15 phút để đăng ký.] Có phục vụ bữa trưa. — Hướng dẫn cho người tham dự."},
        {"q": "The software will be updated tonight. [-------] We apologize for any inconvenience.", "choices": ["The system will be unavailable for two hours.", "The update is free forever.", "Our staff love the new design.", "Please buy a new computer."], "correct": 0, "explain": "Dịch: Phần mềm cập nhật tối nay. [Hệ thống sẽ ngưng hai giờ.] Xin lỗi vì bất tiện. — Câu chèn tạo ra \"bất tiện\" được xin lỗi."},
        {"q": "The package arrived ------- , so we requested a replacement.", "choices": ["damaged", "damage", "damaging", "damages"], "correct": 0, "explain": "Dịch: Kiện hàng đến trong tình trạng hư hỏng nên chúng tôi yêu cầu đổi. — \"arrive + tính từ/V3\" mô tả trạng thái."},
        {"q": "Please submit your form ------- the end of the week.", "choices": ["by", "until", "since", "during"], "correct": 0, "explain": "Dịch: Vui lòng nộp mẫu trước cuối tuần. — \"by\" = hạn chót."},
        {"q": "Our new store opens on June 1. [-------] Customers will receive 20 percent off.", "choices": ["To celebrate, we are offering a special discount.", "The store is closed on Sundays.", "We moved here in 2010.", "Our manager is on vacation."], "correct": 0, "explain": "Dịch: Cửa hàng mới mở 1/6. [Để mừng, chúng tôi có ưu đãi đặc biệt.] Khách được giảm 20%. — Câu nối giới thiệu ưu đãi."},
        {"q": "The meeting has been moved ------- Room 5.", "choices": ["to", "at", "on", "by"], "correct": 0, "explain": "Dịch: Cuộc họp chuyển sang phòng 5. — \"move to + nơi\"."},
        {"q": "Thank you for attending our workshop. [-------] Please complete the attached survey.", "choices": ["We would like to hear your feedback.", "The workshop was canceled.", "Our office is on the third floor.", "Lunch costs $10."], "correct": 0, "explain": "Dịch: Cảm ơn bạn đã dự hội thảo. [Chúng tôi muốn nghe góp ý.] Hãy làm khảo sát đính kèm. — Dẫn vào khảo sát."},
        {"q": "The parking lot will be repaved next week. [-------] Please use the lot on Elm Street.", "choices": ["During this time, it will be closed.", "It is the largest lot in town.", "Parking is free on weekends.", "We sell cars too."], "correct": 0, "explain": "Dịch: Bãi xe sẽ trải nhựa lại tuần sau. [Trong thời gian này bãi đóng cửa.] Hãy dùng bãi trên phố Elm. — Lý do phải dùng bãi khác."},
        {"q": "The contract must be signed ------- both parties.", "choices": ["by", "from", "with", "of"], "correct": 0, "explain": "Dịch: Hợp đồng phải được hai bên ký. — Bị động + \"by\"."},
        {"q": "We received your complaint. [-------] A refund will be sent within five days.", "choices": ["We are sorry for the problem.", "Our products are popular.", "Please visit our website.", "We are hiring new staff."], "correct": 0, "explain": "Dịch: Chúng tôi đã nhận phàn nàn. [Rất xin lỗi về sự cố.] Tiền hoàn sẽ gửi trong 5 ngày. — Lời xin lỗi hợp ngữ cảnh."},
        {"q": "Employees can work from home ------- Fridays.", "choices": ["on", "in", "at", "by"], "correct": 0, "explain": "Dịch: Nhân viên được làm ở nhà vào thứ Sáu. — \"on + thứ\"."},
        {"q": "The library has extended its hours. [-------] This change begins next Monday.", "choices": ["It will now stay open until 9 P.M.", "It has many old books.", "Members pay no fees.", "The library was built in 1900."], "correct": 0, "explain": "Dịch: Thư viện kéo dài giờ mở cửa. [Giờ sẽ mở đến 9 giờ tối.] Thay đổi bắt đầu thứ Hai tới. — Cụ thể hoá thay đổi."}
      ]
    },
    {
      id: 'p6-3', title: "3. Luyện thêm: từ nối giữa hai câu (Part 6)",
      items: [
        {"q": "The store will close early on Friday. ------- , it will reopen at the usual time on Saturday.", "choices": ["However", "Therefore", "For example", "Similarly"], "correct": 0, "explain": "Dịch: Cửa hàng sẽ đóng sớm thứ Sáu. Tuy nhiên, thứ Bảy vẫn mở giờ thường lệ. — Hai câu đối lập nhẹ → \"However\"."},
        {"q": "Our new app is easy to use. ------- , it is available free of charge.", "choices": ["In addition", "Instead", "Otherwise", "Nevertheless"], "correct": 0, "explain": "Dịch: Ứng dụng mới dễ dùng. Ngoài ra, nó còn miễn phí. — Bổ sung thêm ưu điểm cùng chiều → \"In addition\"."},
        {"q": "The road to the factory is under repair. ------- , drivers should use the north gate.", "choices": ["Therefore", "However", "Likewise", "In contrast"], "correct": 0, "explain": "Dịch: Đường vào nhà máy đang sửa. Vì vậy, tài xế nên đi cổng bắc. — Câu sau là hệ quả → \"Therefore\"."},
        {"q": "Please submit your timesheet by Thursday. ------- , your payment may be delayed.", "choices": ["Otherwise", "Moreover", "Accordingly", "Similarly"], "correct": 0, "explain": "Dịch: Vui lòng nộp bảng chấm công trước thứ Năm. Nếu không, lương của bạn có thể bị chậm. — \"Otherwise\" = nếu không thì (hậu quả khi không làm)."},
        {"q": "Many guests requested vegetarian dishes. ------- , the chef added three new items to the menu.", "choices": ["Accordingly", "Nonetheless", "Meanwhile", "On the other hand"], "correct": 0, "explain": "Dịch: Nhiều khách yêu cầu món chay. Do đó, bếp trưởng thêm ba món mới. — Hành động đáp ứng yêu cầu ở câu trước → \"Accordingly\" (theo đó)."},
        {"q": "The renovation will take three weeks. ------- , meetings will be held in Conference Room B.", "choices": ["In the meantime", "As a result", "In other words", "For instance"], "correct": 0, "explain": "Dịch: Việc cải tạo kéo dài ba tuần. Trong thời gian đó, các cuộc họp sẽ tổ chức ở phòng B. — Việc xảy ra song song trong lúc chờ → \"In the meantime\"."},
        {"q": "Sales rose sharply in the spring. ------- , profits fell because of higher shipping costs.", "choices": ["Nevertheless", "Furthermore", "Consequently", "Likewise"], "correct": 0, "explain": "Dịch: Doanh số tăng mạnh vào mùa xuân. Dù vậy, lợi nhuận giảm do phí vận chuyển tăng. — Kết quả trái với kỳ vọng → \"Nevertheless\"."},
        {"q": "We offer several payment options. ------- , you can pay by credit card, bank transfer, or mobile wallet.", "choices": ["For instance", "Instead", "However", "Even so"], "correct": 0, "explain": "Dịch: Chúng tôi có nhiều cách thanh toán. Ví dụ, bạn có thể trả bằng thẻ, chuyển khoản hoặc ví điện tử. — Câu sau liệt kê ví dụ → \"For instance\"."},
        {"q": "The original speaker is unable to attend. ------- , Dr. Moss will give the opening address.", "choices": ["Instead", "Besides", "Similarly", "In fact"], "correct": 0, "explain": "Dịch: Diễn giả ban đầu không thể đến. Thay vào đó, Tiến sĩ Moss sẽ phát biểu khai mạc. — Người thay thế → \"Instead\"."},
        {"q": "The workshop was very popular last year. ------- , we have scheduled two sessions this year.", "choices": ["For this reason", "In contrast", "Nonetheless", "Even so"], "correct": 0, "explain": "Dịch: Hội thảo năm ngoái rất đông. Vì lý do đó, năm nay chúng tôi mở hai buổi. — Câu sau là kết quả → \"For this reason\"."},
        {"q": "Our old system required manual entry. ------- , the new system updates records automatically.", "choices": ["By contrast", "Similarly", "Therefore", "For example"], "correct": 0, "explain": "Dịch: Hệ thống cũ phải nhập tay. Ngược lại, hệ thống mới tự cập nhật. — So sánh hai thứ trái ngược → \"By contrast\"."},
        {"q": "Interns will spend their first week in training. ------- , they will be assigned to individual departments.", "choices": ["Afterward", "Previously", "Instead", "Otherwise"], "correct": 0, "explain": "Dịch: Thực tập sinh dành tuần đầu để đào tạo. Sau đó, họ được phân về từng phòng. — Trình tự thời gian tiếp theo → \"Afterward\"."},
        {"q": "Our café uses local ingredients. ------- , all our bread is baked fresh daily.", "choices": ["Furthermore", "Instead", "However", "Otherwise"], "correct": 0, "explain": "Dịch: Quán dùng nguyên liệu địa phương. Hơn nữa bánh mì nướng mới mỗi ngày. — Bổ sung → \"Furthermore\"."},
        {"q": "The CEO is traveling this week. ------- , Ms. Grant will lead the meeting.", "choices": ["Therefore", "Similarly", "Moreover", "For instance"], "correct": 0, "explain": "Dịch: Tuần này CEO đi công tác. Vì vậy bà Grant sẽ chủ trì họp. — Hệ quả → \"Therefore\"."},
        {"q": "The first version had many bugs. ------- , the new version works perfectly.", "choices": ["By contrast", "Similarly", "In addition", "As a result"], "correct": 0, "explain": "Dịch: Bản đầu nhiều lỗi. Ngược lại bản mới chạy hoàn hảo. — Đối chiếu → \"By contrast\"."},
        {"q": "Sign up for our newsletter. ------- , you will receive special offers.", "choices": ["That way", "Instead", "Nevertheless", "On the contrary"], "correct": 0, "explain": "Dịch: Đăng ký bản tin. Như vậy bạn sẽ nhận ưu đãi đặc biệt. — \"That way\" = bằng cách đó."},
        {"q": "The road is closed. ------- , drivers must take a detour.", "choices": ["Consequently", "Similarly", "Nonetheless", "For example"], "correct": 0, "explain": "Dịch: Đường bị đóng. Do đó tài xế phải đi đường vòng. — Hệ quả → \"Consequently\"."},
        {"q": "We tested the product for months. ------- , we are confident in its quality.", "choices": ["As a result", "However", "Instead", "Otherwise"], "correct": 0, "explain": "Dịch: Chúng tôi thử sản phẩm nhiều tháng. Nhờ vậy tự tin về chất lượng. — Kết quả → \"As a result\"."},
        {"q": "Many customers prefer online shopping. ------- , some still enjoy visiting stores.", "choices": ["Even so", "Therefore", "Likewise", "As a result"], "correct": 0, "explain": "Dịch: Nhiều khách thích mua online. Dù vậy vẫn có người thích đến cửa hàng. — Nhượng bộ → \"Even so\"."},
        {"q": "Please read the manual first. ------- , contact our support team.", "choices": ["If problems continue", "Instead of", "Even though", "In spite of"], "correct": 0, "explain": "Dịch: Hãy đọc hướng dẫn trước. Nếu vẫn gặp sự cố, liên hệ hỗ trợ. — Cụm điều kiện chuyển ý hợp lý."},
        {"q": "The museum is closed on Mondays. ------- , it is open late on Fridays.", "choices": ["On the other hand", "Therefore", "For example", "As a result"], "correct": 0, "explain": "Dịch: Bảo tàng đóng cửa thứ Hai. Mặt khác mở muộn vào thứ Sáu. — Đối chiếu → \"On the other hand\"."},
        {"q": "We have reviewed your application. ------- , we are unable to offer you the position.", "choices": ["Unfortunately", "Fortunately", "Similarly", "Furthermore"], "correct": 0, "explain": "Dịch: Chúng tôi đã xem hồ sơ. Rất tiếc không thể nhận bạn. — Tin xấu → \"Unfortunately\"."},
        {"q": "The training will cover safety rules. ------- , it will include a practical test.", "choices": ["In addition", "Instead", "However", "Otherwise"], "correct": 0, "explain": "Dịch: Khoá đào tạo gồm quy định an toàn. Ngoài ra có bài kiểm tra thực hành. — Bổ sung."},
        {"q": "The shipment was delayed. ------- , we will give you a 10 percent discount.", "choices": ["To make up for this", "Despite this", "In other words", "For example"], "correct": 0, "explain": "Dịch: Lô hàng bị trễ. Để bù lại, chúng tôi giảm 10%. — Hành động bù đắp."},
        {"q": "Our team has grown quickly. ------- , we now have 50 employees.", "choices": ["In fact", "Instead", "Otherwise", "However"], "correct": 0, "explain": "Dịch: Nhóm phát triển nhanh. Thực tế giờ có 50 nhân viên. — Cụ thể hoá → \"In fact\"."}
      ]
    }
  ],

  vocab: [
    {word:'consequently', ipa:'/ˈkɑːnsɪkwentli/', meaning:'do đó, vì vậy', example:'Consequently, we have decided to replace it.', note:'đồng nghĩa: therefore, as a result'},
    {word:'nevertheless', ipa:'/ˌnevərðəˈles/', meaning:'tuy nhiên, dù vậy', example:'Nevertheless, sales rose by 15%.', note:'đồng nghĩa: nonetheless'},
    {word:'otherwise', ipa:'/ˈʌðərwaɪz/', meaning:'nếu không thì', example:'Otherwise, your application will not be processed.', note:'cũng nghĩa "theo cách khác"'},
    {word:'meanwhile', ipa:'/ˈmiːnwaɪl/', meaning:'trong khi đó', example:'Meanwhile, the second team is preparing the manual.', note:'chỉ hai việc cùng lúc'},
    {word:'inquiry', ipa:'/ɪnˈkwaɪəri/', meaning:'yêu cầu hỏi thông tin', example:'We will reply to your inquiry within two days.', note:'cũng viết enquiry'},
    {word:'resignation', ipa:'/ˌrezɪɡˈneɪʃn/', meaning:'đơn từ chức', example:'Mr. Park submitted his resignation.', note:'động từ: resign'}
  ]
};
