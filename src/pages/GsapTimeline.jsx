import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  // TODO: Implement the gsap timeline pour pouvoir donner à un ordre chronologique aux animations que l'on veut intégrer à un élement
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true, //makes the animation
  });

  useGSAP(() => {
    //on va mnt utiliser timeline.to() au lieu de gsap.to pour définir un ordre d'animation qui va être intégrer à l'élement avec id=yellow-box
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      ease: "power1.inOut",
    });

    //2ème animation pour l'element avec id="yellow-box"
    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      ease: "power1.inOut",
    });

    //3eme animation pour l'element avec id="yellow-box"
    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        {/*When i click => If timeline.paused==false, it means the timeline is currently playing, so timeline.pause() is called to pause the timeline / if timeline.paused()==true, it means the timeline is currently paused, so timeline.play() is called to resume the timeline */}
        <button
          onClick={() => {
            if (timeline.paused() == false) {
              timeline.pause();
            } else {
              timeline.play();
            }
          }}
        >
          Play/Pause
        </button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
