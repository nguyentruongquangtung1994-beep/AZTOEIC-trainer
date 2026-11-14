window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['khiem-khuyet'] = {
  id: 'khiem-khuyet',
  order: 11,
  title: 'Động Từ Khiếm Khuyết',
  subtitle: 'Modal Verbs',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2nd edition — Auxiliary Verbs (Trợ động từ)',
  note: 'Bài tập do AZEnglish soạn thêm theo lý thuyết trong sách AZ Grammar (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Quy tắc chung của Modal Verbs',
      tip: [
        'Cấu trúc: S + modal + V0. Modal KHÔNG chia theo ngôi (không thêm -s/-es), KHÔNG có "to" phía sau (trừ ought to, have to).',
        'Phủ định thêm "not" ngay sau modal (cannot/can’t, should not/shouldn’t, must not/mustn’t); câu hỏi đảo modal lên trước chủ ngữ (Can you…? Should we…?).',
        'Bị động: modal + be + V-pp (The report should be submitted by 5 p.m.).',
        'Modal hoàn thành: modal + have + V-pp — nói về QUÁ KHỨ: should have + V-pp (đáng lẽ nên làm, mà không làm), must have + V-pp (chắc hẳn đã), could/may/might have + V-pp (có thể đã), can’t have + V-pp (chắc chắn không thể đã).',
        'Bổ sung: had better + V0 = tốt hơn là nên (mang sắc thái cảnh báo): You had better back up your files.'
      ]
    },
    {
      group: 'Ý nghĩa của 9 modal verbs thường gặp',
      tenses: [
        {
          name: 'CAN / COULD',
          form: 'can (hiện tại) · could (quá khứ / lịch sự)',
          usage: ['can: khả năng, cho phép, đề nghị — The manager can speak both English and Japanese fluently. · Can you open the window?', 'could: khả năng trong quá khứ, cho phép/đề nghị lịch sự — Could you please fill out the form?'],
          signals: 'Yêu cầu lịch sự trong email/điện thoại thường dùng "Could you please…?"'
        },
        {
          name: 'MAY / MIGHT',
          form: 'may (khả năng vừa phải, cho phép) · might (khả năng thấp)',
          usage: ['may: The project may take longer than expected. · May I help you, sir?', 'might: The shipment might be delayed due to the storm. · Might I offer some advice?'],
          signals: 'Cho phép trang trọng → "may"; khả năng không chắc chắn → may/might.'
        },
        {
          name: 'SHALL / SHOULD',
          form: 'shall (đề xuất, văn bản pháp lý) · should (lời khuyên, kỳ vọng)',
          usage: ['shall: Shall I arrange a meeting with the client for you?', 'should: You should submit the report before 5 p.m. · The shipment should arrive by next Monday. (kỳ vọng)'],
          signals: '"Should" vừa là lời khuyên vừa là điều được kỳ vọng sẽ xảy ra.'
        },
        {
          name: 'WILL / WOULD',
          form: 'will (chắc chắn, hứa hẹn) · would (điều kiện, yêu cầu lịch sự)',
          usage: ['will: We will complete the project ahead of the deadline.', 'would: If we had more time, we would conduct a more thorough analysis. · Would you like me to schedule the meeting?'],
          signals: 'Câu điều kiện loại 1 → will; loại 2 → would (xem chủ điểm Câu Điều Kiện).'
        },
        {
          name: 'MUST',
          form: 'must (bắt buộc / suy đoán chắc chắn)',
          usage: ['Bắt buộc: You must submit the report by the end of today.', 'Suy đoán chắc chắn: She must be very busy with the new project.'],
          signals: 'must not = cấm; don’t have to = không cần thiết (đừng nhầm hai nghĩa).'
        }
      ]
    }
  ],

  quizzes: [
    {
      id: 'kk-1', title: '1. Ý nghĩa & cách dùng modal verbs',
      items: [
        {q:'The manager can ------ both English and Japanese fluently.', choices:['speak','to speak','speaking','speaks'], correct:0, explain:'Dịch: Vị giám đốc có thể nói lưu loát cả tiếng Anh và tiếng Nhật. — Giải thích: sau modal "can" luôn là V0, không thêm -s, -ing hay "to". Mẹo thêm: "fluently" (lưu loát) là trạng từ bổ nghĩa cho "speak".'},
        {q:'You ------ submit the report by the end of today; the deadline cannot be extended.', choices:['may','must','might','could'], correct:1, explain:'Dịch: Bạn phải nộp báo cáo trước cuối hôm nay; hạn chót không thể gia hạn. — Giải thích: nghĩa vụ bắt buộc, không thể thương lượng → "must". Mẹo thêm: may/might chỉ khả năng hoặc cho phép, không diễn đạt sự bắt buộc.'},
        {q:'The shipment ------ arrive by next Monday, according to the carrier.', choices:['should have','must have','might have','should'], correct:3, explain:'Dịch: Theo hãng vận chuyển, lô hàng dự kiến sẽ đến trước thứ Hai tuần sau. — Giải thích: "should + V0" diễn tả điều được kỳ vọng sẽ xảy ra ở tương lai. Mẹo thêm: các dạng "have + V-pp" chỉ nói về quá khứ nên không hợp với "next Monday".'},
        {q:'------ you please fill out the form before you leave?', choices:['Did','Are','Could','Have'], correct:2, explain:'Dịch: Bạn vui lòng điền vào mẫu đơn trước khi rời đi được không? — Giải thích: yêu cầu lịch sự đi với "Could you please + V0…?". Mẹo thêm: đây là cấu trúc nhờ vả phổ biến nhất trong email và hội thoại TOEIC.'},
        {q:'All employees ------ wear their ID badges while inside the building.', choices:['must','are must','must to','musts'], correct:0, explain:'Dịch: Mọi nhân viên phải đeo thẻ nhân viên khi ở trong tòa nhà. — Giải thích: quy định bắt buộc → "must + V0"; modal không thêm -s và không có "to". Mẹo thêm: "have to" cũng có nghĩa bắt buộc nhưng là cụm động từ thường, chia theo ngôi.'},
        {q:'The report should ------ submitted before 5 p.m. to avoid delays.', choices:['is','being','been','be'], correct:3, explain:'Dịch: Báo cáo nên được nộp trước 5 giờ chiều để tránh chậm trễ. — Giải thích: bị động sau modal: modal + be + V-pp → "should be submitted". Mẹo thêm: "report" không tự nộp nên phải dùng bị động.'},
        {q:'If we had more time, we ------ conduct a more thorough analysis.', choices:['will','would','can','shall'], correct:1, explain:'Dịch: Nếu có thêm thời gian, chúng tôi sẽ tiến hành phân tích kỹ hơn. — Giải thích: câu điều kiện loại 2 (mệnh đề if dùng quá khứ "had") → mệnh đề chính dùng "would + V0". Mẹo thêm: "will" chỉ dùng cho điều kiện loại 1.'},
        {q:'The shipment ------ be delayed by the storm; we are not certain yet.', choices:['has to','will definitely','might','must'], correct:2, explain:'Dịch: Lô hàng có thể bị chậm vì bão; chúng tôi chưa chắc chắn. — Giải thích: "chưa chắc chắn" → khả năng thấp → "might". Mẹo thêm: "must be" và "will definitely" đều thể hiện sự chắc chắn nên mâu thuẫn với "not certain".'},
        {q:'She ------ be very busy with the new project; she has not replied to any e-mail all week.', choices:['would','can','must','should'], correct:2, explain:'Dịch: Chắc hẳn cô ấy rất bận với dự án mới; cả tuần nay cô ấy chưa trả lời email nào. — Giải thích: suy đoán chắc chắn dựa trên bằng chứng → "must be". Mẹo thêm: "can be" không dùng để suy đoán ở câu khẳng định.'},
        {q:'You ------ leave the office early today if you have finished all your tasks.', choices:['must','may','would','shall'], correct:1, explain:'Dịch: Hôm nay bạn có thể về sớm nếu đã hoàn thành hết công việc. — Giải thích: xin/cho phép → "may". Mẹo thêm: "must leave" mang nghĩa bắt buộc phải về, không hợp ngữ cảnh.'},
        {"q": "Employees ------- wear safety glasses in the lab.", "choices": ["must", "can't", "might not", "needn't"], "correct": 0, "explain": "Dịch: Nhân viên phải đeo kính bảo hộ trong phòng thí nghiệm. — Bắt buộc → must."},
        {"q": "You ------- park here; it's reserved for visitors.", "choices": ["can't", "must", "should", "will"], "correct": 0, "explain": "Dịch: Bạn không được đỗ ở đây; chỗ này dành cho khách. — Không được phép → can't."},
        {"q": "------- you help me move these boxes?", "choices": ["Could", "Must", "Should", "Need"], "correct": 0, "explain": "Dịch: Bạn giúp tôi chuyển mấy thùng này được không? — Nhờ vả lịch sự → Could."},
        {"q": "It ------- rain later, so take an umbrella.", "choices": ["might", "must", "should not", "needn't"], "correct": 0, "explain": "Dịch: Lát nữa có thể mưa, nhớ mang ô. — Khả năng không chắc → might."},
        {"q": "You ------- try the new restaurant; it's excellent.", "choices": ["should", "must not", "can't", "mustn't"], "correct": 0, "explain": "Dịch: Bạn nên thử nhà hàng mới; rất tuyệt. — Lời khuyên → should."},
        {"q": "Ms. Lee ------- speak three languages fluently.", "choices": ["can", "must", "should", "might not"], "correct": 0, "explain": "Dịch: Bà Lee nói lưu loát ba thứ tiếng. — Khả năng → can."},
        {"q": "Visitors ------- not smoke inside the building.", "choices": ["must", "need", "ought", "can be"], "correct": 0, "explain": "Dịch: Khách không được hút thuốc trong toà nhà. — Cấm → must not."},
        {"q": "We ------- finish the report today; tomorrow is fine.", "choices": ["don't have to", "mustn't", "can't", "shouldn't to"], "correct": 0, "explain": "Dịch: Hôm nay chưa cần xong báo cáo; mai cũng được. — Không bắt buộc → don't have to (khác mustn't = cấm)."},
        {"q": "------- I use your computer for a moment?", "choices": ["May", "Must", "Should", "Need"], "correct": 0, "explain": "Dịch: Tôi dùng máy tính bạn một lát được không? — Xin phép → May."},
        {"q": "The package ------- arrive by Friday, according to the tracking site.", "choices": ["should", "must have", "could have", "needn't"], "correct": 0, "explain": "Dịch: Theo trang theo dõi, kiện hàng dự kiến đến trước thứ Sáu. — Dự đoán có cơ sở → should."},
        {"q": "You ------- see a doctor if the pain continues.", "choices": ["ought to", "ought", "must to", "should to"], "correct": 0, "explain": "Dịch: Bạn nên đi khám nếu còn đau. — \"ought to + V0\"."},
        {"q": "Children under 12 ------- enter without an adult.", "choices": ["may not", "must to", "needn't to", "ought not"], "correct": 0, "explain": "Dịch: Trẻ dưới 12 tuổi không được vào nếu không có người lớn. — Không được phép → may not."},
        {"q": "We ------- to submit the form by Monday.", "choices": ["have", "must", "should", "can"], "correct": 0, "explain": "Dịch: Chúng tôi phải nộp mẫu trước thứ Hai. — Sau chỗ trống có \"to\" → have to."},
        {"q": "That ------- be Mr. Kim; he is in Tokyo this week.", "choices": ["can't", "mustn't", "shouldn't", "needn't"], "correct": 0, "explain": "Dịch: Đó không thể là ông Kim; tuần này ông ở Tokyo. — Suy luận chắc chắn phủ định → can't."},
        {"q": "You ------- bring your own laptop; we will provide one.", "choices": ["needn't", "mustn't", "can't", "shouldn't to"], "correct": 0, "explain": "Dịch: Bạn không cần mang laptop; chúng tôi sẽ cung cấp. — Không cần → needn't."}
      ]
    },
    {
      id: 'kk-2', title: '2. Modal hoàn thành, had better & các bẫy hay gặp',
      items: [
        {q:'Our technicians ------ help you if you delete something important by mistake.', choices:['could to','can to','cans','can'], correct:3, explain:'Dịch: Các kỹ thuật viên của chúng tôi có thể giúp bạn nếu bạn lỡ xóa nhầm thứ quan trọng. — Giải thích: chủ ngữ số nhiều + "can + V0"; modal không có dạng "cans" hay "can to". Mẹo thêm: "by mistake" (do nhầm lẫn) đồng nghĩa "accidentally".'},
        {q:'The system crashed last night, so someone ------ have changed the settings.', choices:['must','should','shall','ought'], correct:0, explain:'Dịch: Hệ thống bị sập tối qua nên chắc hẳn ai đó đã thay đổi cài đặt. — Giải thích: "must have + V-pp" = suy đoán chắc chắn về quá khứ. Mẹo thêm: "ought" chỉ đi được khi có "to" (ought to have + V-pp).'},
        {q:'You ------ have called us earlier; we could have fixed the problem before the shipment left.', choices:['will','should','can','must'], correct:1, explain:'Dịch: Đáng lẽ bạn nên gọi cho chúng tôi sớm hơn; khi đó chúng tôi đã có thể sửa lỗi trước khi lô hàng rời kho. — Giải thích: "should have + V-pp" diễn tả việc đáng lẽ nên làm nhưng đã không làm. Mẹo thêm: vế sau "could have fixed" là modal hoàn thành cùng loại.'},
        {q:'I ------ have known about the change; nobody told me.', choices:['shouldn’t','mustn’t','couldn’t','wouldn’t'], correct:2, explain:'Dịch: Tôi không thể nào biết về thay đổi đó; chẳng ai nói với tôi cả. — Giải thích: "couldn’t have + V-pp" = chắc chắn không thể đã xảy ra, hợp với lý do "nobody told me". Mẹo thêm: "mustn’t have" hầu như không dùng trong tiếng Anh hiện đại.'},
        {q:'The department ------ hire two more analysts if the budget is approved.', choices:['might have','would','shall','will'], correct:3, explain:'Dịch: Phòng sẽ tuyển thêm hai chuyên viên phân tích nếu ngân sách được duyệt. — Giải thích: câu điều kiện loại 1 (if + hiện tại đơn) → "will + V0". Mẹo thêm: "would hire" chỉ đúng với điều kiện loại 2 (if + quá khứ).'},
        {q:'You ------ back up your files before the update begins.', choices:['had better','have better','would better','had better to'], correct:0, explain:'Dịch: Tốt hơn hết là bạn nên sao lưu tệp trước khi bản cập nhật bắt đầu. — Giải thích: cấu trúc cố định "had better + V0" (không có "to"). Mẹo thêm: "had better" mang sắc thái cảnh báo mạnh hơn "should" — nếu không làm sẽ có hậu quả.'},
        {q:'------ I offer you some advice on how to improve the proposal?', choices:['May','Must','Are','Has'], correct:0, explain:'Dịch: Tôi xin phép đưa ra vài lời khuyên để cải thiện đề xuất được không? — Giải thích: xin phép lịch sự → "May I + V0…?". Mẹo thêm: "Might I…?" còn trang trọng hơn nữa nhưng ít dùng.'},
        {q:'The new policy ------ be announced next week, according to the CEO.', choices:['would have','will','should have','must have'], correct:1, explain:'Dịch: Theo CEO, chính sách mới sẽ được công bố vào tuần sau. — Giải thích: sự việc ở tương lai (next week) → "will + be + V-pp". Mẹo thêm: các dạng "have + V-pp" chỉ quá khứ nên loại ngay.'},
        {q:'The printer is broken, so we ------ print the invoices today.', choices:['could have','can','can’t','must'], correct:2, explain:'Dịch: Máy in bị hỏng nên hôm nay chúng tôi không thể in hóa đơn. — Giải thích: kết quả phủ định của việc máy hỏng → "can’t + V0". Mẹo thêm: "must print" nghĩa là bắt buộc in, mâu thuẫn với "broken".'},
        {q:'We regret that we ------ accept returns after 30 days.', choices:['must','can','might','cannot'], correct:3, explain:'Dịch: Chúng tôi rất tiếc không thể nhận đổi trả sau 30 ngày. — Giải thích: "regret that" (rất tiếc rằng) đi với nội dung phủ định → "cannot". Mẹo thêm: "cannot" viết liền một từ (không viết "can not").'},
        {"q": "He ------- have left already; his coat is gone.", "choices": ["must", "can't", "should", "needn't"], "correct": 0, "explain": "Dịch: Hẳn ông đã đi rồi; áo khoác không còn. — Suy luận chắc chắn về quá khứ → must have V3."},
        {"q": "You ------- have told me earlier; now it's too late.", "choices": ["should", "must", "can", "will"], "correct": 0, "explain": "Dịch: Lẽ ra bạn nên nói với tôi sớm hơn. — Trách việc đã không làm → should have V3."},
        {"q": "She ------- have received the email; she replied this morning.", "choices": ["must", "can't", "shouldn't", "needn't"], "correct": 0, "explain": "Dịch: Hẳn bà đã nhận email; sáng nay bà trả lời rồi. — Suy luận chắc chắn → must have."},
        {"q": "They ------- have finished the project; it's too big.", "choices": ["can't", "must", "should", "will"], "correct": 0, "explain": "Dịch: Họ không thể đã xong dự án; nó quá lớn. — Phủ định chắc chắn về quá khứ → can't have."},
        {"q": "We ------- better leave now to avoid traffic.", "choices": ["had", "would", "should", "could"], "correct": 0, "explain": "Dịch: Chúng ta nên đi ngay để tránh kẹt xe. — \"had better + V0\"."},
        {"q": "You had better not ------- late again.", "choices": ["be", "to be", "being", "been"], "correct": 0, "explain": "Dịch: Bạn đừng đến muộn nữa thì hơn. — \"had better not + V0\"."},
        {"q": "Mr. Ray ------- have taken the wrong train; he isn't here yet.", "choices": ["might", "must not", "should", "needn't"], "correct": 0, "explain": "Dịch: Có lẽ ông Ray đã đi nhầm tàu; ông vẫn chưa tới. — Phỏng đoán không chắc về quá khứ → might have."},
        {"q": "I ------- have bought so much food; nobody came.", "choices": ["needn't", "mustn't", "couldn't", "shouldn't be"], "correct": 0, "explain": "Dịch: Lẽ ra tôi không cần mua nhiều đồ ăn; không ai đến. — Đã làm việc không cần → needn't have."},
        {"q": "The meeting ------- have started; I can hear voices.", "choices": ["must", "can't", "shouldn't", "won't"], "correct": 0, "explain": "Dịch: Hẳn cuộc họp đã bắt đầu; tôi nghe thấy tiếng nói. — Suy luận chắc chắn → must have."},
        {"q": "You ------- have called; I was worried.", "choices": ["could", "must", "will", "shall"], "correct": 0, "explain": "Dịch: Lẽ ra bạn có thể gọi; tôi đã lo lắm. — Trách nhẹ: could have V3 (đã có thể làm nhưng không làm)."},
        {"q": "He ------- not have seen the sign; it was very small.", "choices": ["may", "must to", "ought", "need to"], "correct": 0, "explain": "Dịch: Có thể ông đã không thấy biển báo; nó rất nhỏ. — Phỏng đoán → may not have V3."},
        {"q": "Staff ------- to wear uniforms on Fridays.", "choices": ["don't need", "needn't", "mustn't", "can't"], "correct": 0, "explain": "Dịch: Nhân viên không cần mặc đồng phục vào thứ Sáu. — Có \"to\" phía sau → don't need to."},
        {"q": "You ------- better check the figures again.", "choices": ["had", "have", "would", "should"], "correct": 0, "explain": "Dịch: Bạn nên kiểm lại số liệu. — \"had better\"."},
        {"q": "They ------- have been delayed by the storm.", "choices": ["may", "must to", "ought", "should to"], "correct": 0, "explain": "Dịch: Có thể họ bị bão làm chậm. — Phỏng đoán → may have been V3."},
        {"q": "She ------- to work late yesterday.", "choices": ["had", "must", "should", "could"], "correct": 0, "explain": "Dịch: Hôm qua bà phải làm muộn. — Quá khứ của \"must\" (bắt buộc) → had to."}
      ]
    },
    {
      id: 'kk-3', title: "3. Luyện thêm: động từ khiếm khuyết trong ngữ cảnh công việc",
      items: [
        {"q": "All visitors ------- wear a badge at all times while inside the laboratory.", "choices": ["must", "may not", "need", "would have"], "correct": 0, "explain": "Dịch: Mọi khách tham quan phải đeo thẻ suốt thời gian ở trong phòng thí nghiệm. — Quy định bắt buộc → \"must + V0\"."},
        {"q": "Employees ------- not submit receipts for purchases under $10.", "choices": ["need", "must", "ought", "have"], "correct": 0, "explain": "Dịch: Nhân viên không cần nộp hoá đơn cho khoản mua dưới 10 đô. — \"need not + V0\" = không cần. \"must not\" là cấm, sai nghĩa; \"ought\" phải là \"ought not to\"."},
        {"q": "The shipment ------- have arrived already, since the tracking page shows it was delivered at noon.", "choices": ["must", "can't", "should not", "need not"], "correct": 0, "explain": "Dịch: Lô hàng hẳn đã đến rồi vì trang theo dõi báo đã giao lúc trưa. — Suy đoán chắc chắn về quá khứ → \"must have + V3\"."},
        {"q": "You ------- have called the help desk; the password reset link was in your inbox.", "choices": ["needn't", "mustn't", "couldn't", "shouldn't be"], "correct": 0, "explain": "Dịch: Bạn lẽ ra không cần gọi bộ phận hỗ trợ; đường dẫn đặt lại mật khẩu có trong hộp thư rồi. — \"needn't have + V3\" = đã làm một việc không cần thiết."},
        {"q": "Applicants ------- to submit two letters of reference with their forms.", "choices": ["are required", "must", "should be", "can"], "correct": 0, "explain": "Dịch: Ứng viên được yêu cầu nộp hai thư giới thiệu kèm đơn. — Sau chỗ trống là \"to + V\" → \"are required to V\". \"must/can\" đi với V0, không có \"to\"."},
        {"q": "The marketing team ------- finish the report yesterday because the data arrived late.", "choices": ["couldn't", "mustn't", "needn't", "shouldn't"], "correct": 0, "explain": "Dịch: Hôm qua nhóm marketing không thể hoàn thành báo cáo vì dữ liệu đến muộn. — Không có khả năng làm trong quá khứ → \"couldn't + V0\"."},
        {"q": "------- I speak with the manager about my account, please?", "choices": ["May", "Must", "Should", "Need"], "correct": 0, "explain": "Dịch: Tôi có thể nói chuyện với quản lý về tài khoản của mình không? — Xin phép lịch sự → \"May I …?\"."},
        {"q": "Mr. Cole ------- be in the office today; his car isn't in the parking lot.", "choices": ["might not", "must", "has to", "ought to"], "correct": 0, "explain": "Dịch: Có lẽ ông Cole hôm nay không ở văn phòng; xe ông không có ở bãi. — Phỏng đoán không chắc chắn, phủ định → \"might not\"."},
        {"q": "We ------- better confirm the reservation before the end of the day.", "choices": ["had", "would", "should", "could"], "correct": 0, "explain": "Dịch: Chúng ta nên xác nhận đặt chỗ trước cuối ngày. — Cấu trúc cố định \"had better + V0\" (nên làm gì)."},
        {"q": "The finance team ------- to approve every purchase over $500.", "choices": ["has", "must", "should", "can"], "correct": 0, "explain": "Dịch: Nhóm tài chính phải duyệt mọi khoản mua trên 500 đô. — Sau chỗ trống là \"to approve\" → \"has to + V0\" (chủ ngữ \"team\" số ít)."},
        {"q": "If the order is placed today, it ------- arrive by Friday.", "choices": ["should", "must have", "could have", "ought"], "correct": 0, "explain": "Dịch: Nếu đặt hôm nay, hàng sẽ (dự kiến) đến trước thứ Sáu. — \"should + V0\" diễn tả dự đoán hợp lý. \"ought\" thiếu \"to\"."},
        {"q": "Customers ------- return unused items within 30 days for a full refund.", "choices": ["may", "must have", "would have", "need to have"], "correct": 0, "explain": "Dịch: Khách hàng có thể trả lại hàng chưa dùng trong 30 ngày để được hoàn tiền đầy đủ. — Quyền được phép → \"may + V0\"."},
        {"q": "The report ------- be ready by tomorrow morning.", "choices": ["will", "is", "has", "does"], "correct": 0, "explain": "Dịch: Báo cáo sẽ sẵn sàng trước sáng mai. — Tương lai → will be."},
        {"q": "Guests ------- check out by 11 A.M.", "choices": ["must", "can be", "might be", "need be"], "correct": 0, "explain": "Dịch: Khách phải trả phòng trước 11 giờ. — Quy định → must."},
        {"q": "You ------- not leave your bags unattended.", "choices": ["should", "ought", "need to", "have"], "correct": 0, "explain": "Dịch: Bạn không nên để túi không người trông. — Lời khuyên phủ định → should not."},
        {"q": "Our staff ------- assist you with any questions.", "choices": ["can", "must to", "should to", "ought"], "correct": 0, "explain": "Dịch: Nhân viên có thể hỗ trợ bạn mọi câu hỏi. — Khả năng → can."},
        {"q": "The machine ------- be turned off before cleaning.", "choices": ["must", "can't", "needn't", "won't to"], "correct": 0, "explain": "Dịch: Máy phải được tắt trước khi vệ sinh. — Bắt buộc + bị động → must be V3."},
        {"q": "Customers ------- request a refund within 14 days.", "choices": ["may", "must have", "need have", "should have"], "correct": 0, "explain": "Dịch: Khách có thể yêu cầu hoàn tiền trong 14 ngày. — Được phép → may."},
        {"q": "We ------- hire more staff if sales keep growing.", "choices": ["will need to", "need", "must to", "should to"], "correct": 0, "explain": "Dịch: Nếu doanh số tiếp tục tăng, chúng tôi sẽ cần tuyển thêm. — \"will need to + V0\"."},
        {"q": "You ------- show your ID at the entrance.", "choices": ["will have to", "will must", "must to", "have got"], "correct": 0, "explain": "Dịch: Bạn sẽ phải xuất trình giấy tờ ở cổng. — Tương lai của \"must\" → will have to."},
        {"q": "The flight ------- be delayed due to fog.", "choices": ["may", "must have", "ought", "need"], "correct": 0, "explain": "Dịch: Chuyến bay có thể bị trễ do sương mù. — Khả năng → may."},
        {"q": "Applicants ------- have at least two years of experience.", "choices": ["should", "ought", "had", "need to be"], "correct": 0, "explain": "Dịch: Ứng viên nên có ít nhất hai năm kinh nghiệm. — Yêu cầu/khuyến nghị → should."},
        {"q": "------- you like some coffee?", "choices": ["Would", "Should", "Must", "Could you"], "correct": 0, "explain": "Dịch: Bạn có muốn dùng cà phê không? — Mời lịch sự → Would you like."},
        {"q": "I ------- not attend the meeting tomorrow because of a doctor's appointment.", "choices": ["will be able to", "can to", "must to", "may be"], "correct": 0, "explain": "Dịch: Mai tôi không thể dự họp vì có lịch khám. — Tương lai của \"can\" → will (not) be able to."},
        {"q": "Employees ------- use the gym free of charge.", "choices": ["are allowed to", "allow to", "are allowing", "allowed"], "correct": 0, "explain": "Dịch: Nhân viên được dùng phòng gym miễn phí. — \"be allowed to + V0\"."}
      ]
    }
  ],

  vocab: [
    {word:'deadline', ipa:'/ˈdedlaɪn/', meaning:'hạn chót', example:'The deadline cannot be extended.', note:'meet a deadline = kịp hạn'},
    {word:'carrier', ipa:'/ˈkæriər/', meaning:'hãng vận chuyển', example:'According to the carrier, the shipment should arrive on Monday.', note:'shipping company'},
    {word:'thorough', ipa:'/ˈθʌrə/', meaning:'kỹ lưỡng, toàn diện', example:'We would conduct a more thorough analysis.', note:'trạng từ: thoroughly'},
    {word:'back up', ipa:'/bæk ʌp/', meaning:'sao lưu (dữ liệu)', example:'You had better back up your files.', note:'danh từ: backup'},
    {word:'regret', ipa:'/rɪˈɡret/', meaning:'rất tiếc', example:'We regret that we cannot accept returns.', note:'trang trọng, hay dùng trong thông báo'},
    {word:'crash', ipa:'/kræʃ/', meaning:'sập, treo (hệ thống)', example:'The system crashed last night.', note:'cũng là "va chạm"'}
  ]
};
