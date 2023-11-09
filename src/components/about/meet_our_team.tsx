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
          description="Alex has over 13 years of teaching experience in the EFL context. He has helped numerous students to matriculate at highly competitive universities over the years, including Cornell University, MIT, Stanford, the University of Michigan, and many other distinguished institutions."
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
          ]} />

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
      </div>
    </div>
  );
}
