import { MemberIntro } from "./member_intro";

export function MeetOurTeam() {
  return (
    <div>
      <h2 className="text-4xl text-foreground font-semibold mt-12">
        Meet Our Team
      </h2>

      <div className="flex flex-col w-full gap-8 items-center mt-8">
        {/* Alex */}
        <MemberIntro
          name="C.L. Alexander Lee"
          imageSrc="/images/alex.png"
          description="With over 13 years of experience in EFL education, Alex has helped numerous students achieve stellar scores on TOEFL and IELTS exams and gain admission to competitive universities. He is also dedicated to teaching creative writing and poetry, guiding students in developing their skills in these areas."
          credentials={[
            "Harvard University - Master of Liberal Arts (ALM), English",
            "Concordia University - BA, Political Science, Minor in History",
          ]}
        />

        {/* Elisa */}
        <MemberIntro
          name='Elisa Sotgiu'
          imageSrc='/images/elisa.jpg'
          description='Elisa Sotgiu is a writer and a scholar of contemporary global fiction. An award-winning teacher, she has taught seminars on the masterpieces of world literature and conducted critical writing laboratories at Harvard College, and also served as a writing tutor at the Harvard Extension School.'
          credentials={[
            'Harvard University - PhD, MA Comparative Literature',
            'University of Pisa and Scuola Normale Superiore - MA, BA, Italian Literature'
          ]}
         />

        {/* Thomas */}
        <MemberIntro
          name="Thomas Leonard-Roy"
          imageSrc="/images/thomas.png"
          description="Thomas Leonard-Roy is a writer, editor, and teacher of English literature and language. He has taught literature and writing at Harvard College and Harvard Extension School and remains dedicated to helping all students improve their English expression."
          credentials={[
            "Harvard University - PhD, English",
            "University of Toronto - MA, BA, English",
          ]}
        />
        {/* Alexandria */}
        <MemberIntro
          name="Alexandria Waldron"
          imageSrc="/images/alexandria2.png"
          description="Alexandria Waldron has over 18 years of experience teaching English Literature to students in the UK and USA. Her extensive professional background includes serving as a senior school leader and a senior academic manager at The Open University, the third largest higher education institution in Europe. Alexandria is also a qualified GCSE examiner for Pearson and Edexcel, a certified Cambridge Examinations moderator, and holds SEI (Sheltered English Immersion) certification in the USA."
          credentials={[
            "Harvard University, Master of Liberal Arts (ALM), English",
            "University of London, PGCE English",
            "Bristol University, Classical Studies, BA (honours)"
          ]}
        />
      </div>
    </div>
  );
}
