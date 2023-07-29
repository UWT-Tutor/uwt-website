interface AboutUsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AboutUs({
  className,
  ...props
}: AboutUsProps) {
  return (
    <div>
      <h1 className="text-foreground text-center text-5xl font-semibold">About us</h1>
      <p className="mt-8 leading-relaxed text-muted-foreground">
        &emsp;Welcome to UWT, where we are passionate about teaching the art of writing and
        building a community of writers. Our team consists of professional writers and
        tutors who have years of experience in crafting high-quality essays and in teaching others the skills to do the same.
        <br />
        <br />
        &emsp;We offer brainstorming and writing tutorial classes for various levels of
        education, including high school course essays, IB extended essays, college
        and graduate school essays, and creative writing. Our goal is to provide
        students with the necessary skills to succeed in their academic writing while
        also fostering a love for creativity and the writing process.
        <br />
        <br />
        &emsp;Our approach is centered on personalized instruction since we believe that every
        student is unique and deserves a tailored approach. We work closely with our students
        to understand their goals, strengths, and weaknesses, and provide them with feedback
        and guidance to help them improve their writing skills.
        <br />
        <br />
        &emsp;What sets us apart from other writing tutors is our commitment to building a
        vibrant community of young writers. We believe that writing is a collaborative
        process and that sharing ideas with others can lead to greater creativity and
        innovation. Our platform provides a space for students to connect with one
        another and share their writing, providing a supportive environment where they
        can learn from one another.
        <br />
        <br />
        &emsp;At UWT, we strive to offer the highest quality of instruction and resources to
        our students. Our team is dedicated to helping students achieve their academic
        and professional goals while also nurturing their creativity and passion for writing. Join us
        today and become a part of our community of young writers!
      </p>
    </div>
  )
}