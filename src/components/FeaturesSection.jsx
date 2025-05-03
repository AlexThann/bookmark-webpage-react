import FeaturesCards from "./FeaturesCards";

export default function FeaturesSection() {
  return (
    <section>
      <div className="text-center px-[5%] mb-12">
        <h1 className="text-neutral-blue font-bold text-4xl pb-7">Features</h1>
        <p className="text-gray-500 leading-7">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <FeaturesCards />
    </section>
  );
}
