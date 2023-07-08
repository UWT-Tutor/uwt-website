export default function Pricing() {
  return (
    <div className="container py-12">
      <h1 className="mt-4 mb-16 text-center text-5xl leading-normal font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-700 via-30% to-sky-400">
        Pick the plan thats right for you
      </h1>

      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4 p-6 bg-white rounded-xl drop-shadow-sm">
          <h3 className="text-3xl font-semibold">Essay editing</h3>
          <p className="text-muted-foreground">
            Assist you in crafting a compelling essay.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-semibold">Format:</strong>{" "}
            Email correspondence
          </p>
          <div>
            <h4 className="font-semibold">Pricing</h4>
            <ul className="text-muted-foreground list-inside list-disc">
              <li>
                College: <strong className="text-xl">NT$9,000</strong> / essay
              </li>
              <li>
                Graduate School: <strong className="text-xl">NT$14,000</strong>{" "}
                / essay
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4 items-start p-6 bg-white rounded-xl drop-shadow-sm">
          <h3 className="text-3xl font-semibold">
            Brainstorming & Editing your Drafts
          </h3>
          <p className="text-muted-foreground">
            Assist you in generating ideas and refining your writing draft.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground font-semibold">Format:</strong>{" "}
            Online in-person conference
          </p>
          <p>
            <strong className="font-semibold text-xl">NT$4,000</strong> / hr
          </p>
        </section>

        <section className="flex flex-col gap-6 items-start p-6 bg-white rounded-xl leading-loose drop-shadow-sm">
          <h3 className="text-3xl font-semibold">Package work</h3>
          <h4 className="font-semibold">
            Basic package: <span className="text-xl">NT$85,000</span>
          </h4>
          <div className="text-muted-foreground">
            <h4 className="font-semibold">Description</h4>
            <p className="mt-1">
              Assist you in generating ideas and refining your writing draft.
              <br />
            </p>
            <ul className="list-inside list-disc">
              <li>
                4 essays: one essay for either the Common Application or
                Coalition for College Application, and three additional essays
                tailored specifically for your preferred universities.
              </li>
              <li>
                 We offer 10 hours of in-person tutorial sessions.
                Typically, each session lasts for one hour. However, in cases
                where the student requires additional time for extensive Q&A, we
                are flexible to extend the duration of a regular session.
              </li>
              <p className="mt-1">The definition of an essay: 500-1,000 words (Both Common and Coalition Apps advise an applicant to submit an essay of between 550-650 words).</p>
              
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">
              For more information about package work, please contact us.
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
}
