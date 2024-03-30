import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

//Gsap scrollTrigger is a plugin: so we need to add this code to make it work
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  //We need to define a reference
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children); //permet de cibler chacune des box rose et orange

    boxes.forEach((e) => {
      //e=element=les 2 div avec boxx roses et oranges
      gsap.to(e, {
        //au lieu d'utiliser une class ou id pour cibler, on cible avec e=element grace à forEach
        x: 350,
        rotation: 360,
        borderRadius: "100%",
        duration: 2,
        scale: 1.5,
        //Ici on va utiliser le scrollTrigger pour que l'animation ne s'active que quand on arrive à son niveau après avoir scroll
        scrollTrigger: {
          trigger: e,
          toggleActions: "restart pause reverse pause", //possible d'écrire: play/pause/resume/restart/reset/complete/none
          //1er:Ce qu'il se passe quand l'élement entre dans le viewport / 2eme: Quand on dépasse le viewport et qu'on ne voit plus l'élement /3ème: Quand on revient à l'élement après l'avoir dépassé/4ème: quand on revient en haut de la page et qu'on dépasse l'élement (pause ou restart est bien ici)
        },
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>
      {/* Avec useRef on va cibler le div qui rassemble les 2 box rose et orange */}
      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
      <div className="mt-96"></div>
    </main>
  );
};

export default GsapScrollTrigger;
