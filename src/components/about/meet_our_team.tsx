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
          description="Mr. Lee has over 13 years of teaching experience in the EFL context. He has helped numerous students to matriculate at highly competitive universities over the years, including Cornell University, MIT, Stanford, the University of Michigan, and many other distinguished."
          credentials={[
            "Harvard University - Master of Liberal Arts (ALM), English",
            "Concordia University - BA, Political Science, Minor in History",
          ]}
        />

        {/* Elisa */}
        <MemberIntro
          name='Elisa Sotgiu'
          imageSrc='/images/elisa.jpg'
          description='Elisa Sotgiu is a scholar of contemporary global fiction and is currently a Ph.D. candidate in Comparative Literature at Harvard. An award-winning teacher, she has taught seminars on the masterpieces of world literature and conducted critical writing laboratories at Harvard College, and also served as a writing tutor at the Harvard Extension School.'
          credentials={[
            'Harvard University - A.M. in Comparative Literature',
            'University of Pisa and Scuola Normale Superiore - M.A. in Italian Literature'
          ]} />

        {/* Thomas */}
        <MemberIntro
          name="Dr. Thomas Leonard-Roy"
          imageSrc="/images/thomas.png"
          description="Dr. Leonard-Roy is a writer, editor, scholar, and award-winning teacher. He has taught literature and writing at Harvard College and Harvard Extension School. He is committed to helping students improve their English expression."
          credentials={[
            "Harvard University - PhD, English",
            "University of Toronto - MA, BA, English",
          ]}
        />
      </div>
    </div>
  );
}
