import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method

  //importer useGap et gsap !!!
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250, //bouge horizontalement
      repeat: -1, //pour répéter l'animation
      yoyo: true, //pour que l'élement revient en arrière à la fin de l'animation
      rotation: 360, //pour que l'element fasse un tour de 360 degrès
      duration: 2, //pour que l'element bouge plus doucement lors de l'animation
      ease: "power1.inOut", //créer une animation différente: faire '' et les différentes animations vont apparaitre
    }); //1er paramètre= id de l'objet qu'on veut animer + 2eme paramètre = properties pour l'animer
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      {/* Ici on a le carré bleu que l'on veut animer */}
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
