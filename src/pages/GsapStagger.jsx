import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%", //to turn it into a circle
      repeat: -1,
      yoyo: true,
      stagger: 0.5, //Les élements avec className="stagger-box", vont s'animer 1 après l'autre, avec un délai de 0.5s
      //ou on peut ajouter un objet stagger avec des propeiétés + précises
      stagger: {
        amount: 1.5, //c'est le délais d'animation entre chaque élements mais ce n'est pas des secondes comme avant
        grid: [2, 1],
        axis:'y',
        ease: "power1.inOut",
        from:'center'//animation commence du centre puis s'étend équitablement à gauche et à droite
      },
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          {/* On donne 1 className stagger-box à tous les éléments, pour pouvoir tous les cibler en 1 fois */}
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
