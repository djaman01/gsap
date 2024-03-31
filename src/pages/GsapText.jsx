import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation
  useGSAP(() => {
    gsap.to("#text", {
      y: 0, //car on avait mis translate-y-10, donc le text était en bas et on veut le remonter pour l'animer
      opacity: 1,
      ease: "power1.inOut",
    });

    gsap.fromTo(".para",
      {
        opacity: 0, //on rend le text invisible en 1 pour ensuite le rendre visible en 2
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.6, //Délai entre les animations de useGSAP (gsap.to) et celle-ci(gsap.fromTo)
        stagger:0.2 //Délai d'animatrion entre les paragraphes ciblés dans CE gsap.fromTo et c'est tout
      }
    );
  }, []);

  return (
    <main>
      {/* parcequ'il y a opacity-0, on ne voit pas le texte "Gsap Text" / Le but est de le rendre visible avec une animation gsap*/}
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;
