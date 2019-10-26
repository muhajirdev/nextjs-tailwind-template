import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <div className="bg-background h-screen flex flex-col justify-center items-center">
      <h1>Next Tailwind Theme Typescript</h1>
      <h2>The Perfect Stack</h2>

      <div className="flex mt-8">
        <a href="https://github.com/muhajirdev/next-tailwind-theme" className="mx-4">
          <button type="button" className="btn btn-primary">
            Read More
          </button>
        </a>
        <a href="https://github.com/muhajirdev/next-tailwind-theme" className="mx-4">
          <button type="button" className="btn btn-secondary">
            Github
          </button>
        </a>
      </div>
    </div>
  </Layout>
);

export default Home;
