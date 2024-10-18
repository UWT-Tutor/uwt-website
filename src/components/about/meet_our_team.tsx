import { MemberIntro } from "./member_intro";

export function MeetOurTeam() {
  return (
    <div>
      <div className="h-4" />
      <h1 className="text-foreground text-center text-5xl font-semibold">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-12"> {/* 使用 grid 和 gap 來控制間距 */}
        <div className="p-4 bg-gray-200">
          {/* <h2 className="text-4xl text-foreground font-semibold mt-12">Meet Our Team</h2> */}
          <h2 className="text-4xl text-foreground font-semibold mb-8">The Essayists</h2>
          <div className="mb-8">
            <MemberIntro
              name='Elisa Sotgiu'
              imageSrc='/images/elisa.jpg'
              description='Elisa Sotgiu is a writer and a scholar of contemporary global fiction. An award-winning teacher, she has taught seminars on the masterpieces of world literature and conducted critical writing laboratories at Harvard College, and also served as a writing tutor at the Harvard Extension School.'
              credentials={[
                'Harvard University - PhD, MA Comparative Literature',
                'University of Pisa and Scuola Normale Superiore - MA, BA, Italian Literature'
              ]}
            />
          </div>
          <div className="mb-8">
            <MemberIntro
              name="Thomas Leonard-Roy"
              imageSrc="/images/thomas.png"
              description="Thomas Leonard-Roy is a writer, editor, and teacher of English literature and language. He has taught literature and writing at Harvard College and Harvard Extension School and remains dedicated to helping all students improve their English expression."
              credentials={[
                "Harvard University - PhD, English",
                "University of Toronto - MA, BA, English",
              ]}
            />
          </div>
        </div>

        {/* 第二象限 */}
        <div className="p-4 bg-gray-200">
          <h2 className="text-4xl text-foreground font-semibold mb-8">GCSE & IB</h2>
          {/*<div className="mb-8">
            <MemberIntro
                name="Alex Baggott-Rowe"
                imageSrc="/images/AlexBaggott-Rowe.jpg"
                description="Alex Baggott-Rowe is a 7th-9th grade Language Arts and Latin teacher from Cincinnati, Ohio, with five years of experience in the classroom. Alex is passionate about offering personalized feedback and fostering strong relationships with his students. Outside of teaching, he enjoys cooking, reading, solving crossword puzzles, and watching sports, particularly soccer and NFL football."
                credentials={[
                  "Davidson College, Bachelor of English and Classic",
                  "Xavier University, Master's in Secondary Education",
                ]}
              />
          </div>*/}
          <div className="mb-8">
            <MemberIntro
              name="Kiera O'Connell"
              imageSrc="/images/kiera.jpg"
              description="Kiera O'Connell has seven years of experience teaching English Literature to students in the UK. Her professional background includes serving as a Key Stage 3 Coordinator, Literacy Coordinator, and Head of an incredibly successful English Department. Kiera is also a qualified GCSE examiner for Pearson and Edexcel, and holds an NPQLL certificate."
              credentials={[
                "University of Leicester, Bachelor of Arts in Contemporary History",
                "NPQLL (National Project Qualification in Leading Literacy)",
              ]}
            />
          </div>
          <div className="mb-8">
            <MemberIntro
              name="Stephanie Smithson-Ingrey"
              imageSrc="/images/Stephanie.png"
              description="Stephanie Smithson-Ingrey has eight years of experience teaching English Literature to KS3, KS4, and KS5 students in the UK. Her professional background includes serving as a Key Stage 3 Coordinator, Literacy Coordinator, Head of Pastoral, and as a personal tutor. Stephanie was also instrumental in coordinating and opening a library at her current school and leading inspiring literary trips for KS5 students."
              credentials={[
                "Kings College London, Bachelor of Arts",
                "Bishop Grosseteste, PGCE",
              ]}
            />
          </div>
        </div>

       {/* 第三象限 */}
        <div className="p-4 bg-gray-200">
          <h2 className="text-4xl text-foreground font-semibold mb-8">The Saunterers</h2>
          {/*<div className="mb-8">
            <MemberIntro
                name="Allison Baggott-Rowe"
                imageSrc="/images/AllisonBaggott-Rowe.jpeg"
                description="Allison Baggott-Rowe is an international award-winning author, teacher, and disability advocate whose work explores liminal spaces and our place on the planet. With over fifteen years of mindful teaching experience, her specialties as an educator range from middle-grade and high school education to serving as a TA and faculty aide at Harvard University. Allison enjoys engaging with students in myriad subjects, including English/ESL, Creative Writing, Latin, Irish/Irish Music, Public Speaking, and chess."
                credentials={[
                  "TEDx Speaker: “A Fall Does Not Define You, How You Rise Will Redefine You”",
                  "Harvard University, Master of Liberal Arts (ALM), Creative Writing and Literature",
                  "Xavier University, Master of Arts (M.A.), Psychology",
                ]}
              />
          </div>*/}
          <div className="mb-8">
            <MemberIntro
                name="Alexandria Waldron"
                imageSrc="/images/alexandria.png"
                description="Alexandria Waldron has over 18 years of experience teaching English Literature to students in the UK and USA. Her extensive professional background includes serving as a senior school leader and a senior academic manager at The Open University, the third largest higher education institution in Europe. Alexandria is also a qualified GCSE examiner for Pearson and Edexcel, a certified Cambridge Examinations moderator, and holds SEI (Sheltered English Immersion) certification in the USA."
                credentials={[
                  "Harvard University, Master of Liberal Arts (ALM), English",
                  "University of London, PGCE English",
                  "Bristol University, Classical Studies, BA (honours)"
                ]}
              />
          </div>
          <div className="mb-8">
            <MemberIntro
                name="C.L. Alexander Lee"
                imageSrc="/images/alex.png"
                description="With over 13 years of experience in EFL education, Alex has helped numerous students achieve stellar scores on TOEFL and IELTS exams and gain admission to competitive universities. He is also dedicated to teaching creative writing and poetry, guiding students in developing their skills in these areas."
                credentials={[
                  "Harvard University - Master of Liberal Arts (ALM), English",
                  "Concordia University - BA, Political Science, Minor in History",
                ]}
              />
          </div>
        </div>

       {/* 第四象限 */}
        <div className="p-4 bg-gray-200">
          <h2 className="text-4xl text-foreground font-semibold mb-8">Academic Advising</h2>
          <div className="mb-8">
            <MemberIntro
                name="C.L. Alexander Lee"
                imageSrc="/images/alex.png"
                description="With over 13 years of experience in EFL education, Alex has helped numerous students achieve stellar scores on TOEFL and IELTS exams and gain admission to competitive universities. He is also dedicated to teaching creative writing and poetry, guiding students in developing their skills in these areas."
                credentials={[
                  "Harvard University - Master of Liberal Arts (ALM), English",
                  "Concordia University - BA, Political Science, Minor in History",
                ]}
              />
          </div>
        </div>

      </div>
    </div>



  
  );
}
