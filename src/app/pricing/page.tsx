export default function Pricing() {
  return (
    <div className='container py-12'>
      <h1 className="mt-4 mb-16 text-center text-5xl leading-normal font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-sky-700 via-30% to-sky-400">
        Pick the plan thats right for you
      </h1>

      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4 p-6 bg-white rounded-xl drop-shadow-sm">
          <h3 className="text-3xl font-semibold">Essay editing</h3>
          <p className="text-muted-foreground">Assist you in crafting a compelling essay.</p>
          <p className="text-muted-foreground"><strong className="text-foreground font-semibold">Format:</strong> Email correspondence</p>
          <div>
            <h4 className="font-semibold">Pricing</h4>
            <ul className='text-muted-foreground list-inside list-disc'>
              <li>College: <strong className="text-xl">NT$12,000</strong> / essay</li>
              <li>Graduate School: <strong className="text-xl">NT$14,000</strong> / essay</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4 items-start p-6 bg-white rounded-xl drop-shadow-sm">
          <h3 className="text-3xl font-semibold">Brainstorming & Editing your Drafts</h3>
          <p className="text-muted-foreground">Assist you in generating ideas and refining your writing draft.</p>
          <p className="text-muted-foreground"><strong className="text-foreground font-semibold">Format:</strong> Online in-person conference</p>
          <p>
            <strong className="font-semibold text-xl">NT$4,000</strong> / hr
          </p>
        </section>

        <section className="flex flex-col gap-6 items-start p-6 bg-white rounded-xl leading-loose drop-shadow-sm">
          <h3 className="text-3xl font-semibold">Package work</h3>
          <h4 className="font-semibold">Basic package: <span className="text-xl">NT$85,000</span></h4>
          <div className="text-muted-foreground">
            <h4 className="font-semibold">Description</h4>
            <p className="mt-1">
              Assist you in generating ideas and refining your writing draft.<br />
            </p>
            <ul className="list-inside list-disc">
              <li>3 essays: Common App/Coalition For College App + 2 essays for either one or two universities of the student’s choice; it all depends on the number of essays that the university to which a student wishes to apply requires.</li>
              <li>10 hours of face-to-face tutorial sessions. Normally, each session is 1 hour long. In situations where the student has extended Q&A needs, we can extend the duration of a regular session.</li>
            </ul>
            <p className="mt-4">The definition of an essay: 500-1,000 words (Both Common and Coalition Apps advise an applicant to submit an essay of between 550-650 words).</p>
            <p className="mt-4">Many colleges and universities that accept the Common and or Coalition application require you to submit at least one essay as part of your application. In cases like Stanford, Yale, and MIT where short response essays are preferred, i.e. 250 words maximum per essay, we will consider three separate essays as ONE.</p>
            <p className="mt-4">When applying to universities like the University of Chicago or Yale where each university requires two essays–both require about 500 words or more–you will use up the 2 essays quota in this basic package.</p>
            <p className="mt-4">When exceeding the limit of 10 hours, each additional hour of conferencing will entail $4,000NTD.</p>
          </div>
          <div>
            <h4 className="font-semibold">Additional essays</h4>
            <p className="text-muted-foreground mt-1">
              The charge for any additional essay is set at a flat rate of $25,000 NTD as long as the word count falls within the 1,000 words limit. This fee covers additional THREE hours of online tutorials.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Duration of the Tutorial</h4>
            <p className="text-muted-foreground mt-1">The student must complete all three essays included in this basic package within 10 weeks, commencing from the date of the first conference.</p>
          </div>
          <div>
            <h4 className="font-semibold">Reworking on an existing essay for applying for a different university that requires similar essay prompts:</h4>
            <p className="text-muted-foreground mt-1">
              There are situations where different universities might ask similar essay questions. The student is more than welcome to either submit an existing one that has received our editorial assistance. If the student wishes to make changes to an existing essay, a standard editing fees of $4,000NTD / hr will be applied.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}