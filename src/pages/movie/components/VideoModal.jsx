import { useCallback, useContext, useEffect, useRef } from "react";
import { TrailerContext } from "../Movie";

// eslint-disable-next-line react/prop-types
export default function VideoModal({ setOpenModal }) {
  const divElement = useRef(null);
  const trailer = useContext(TrailerContext);

  const handleCloseModal = useCallback(
    (event) => {
      if (event.target === divElement.current) {
        setOpenModal?.(false);
      }
    },
    [setOpenModal]
  );
  useEffect(() => {
    console.log("modal");
    window.addEventListener("click", handleCloseModal);

    return () => {
      window.addEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <div className="absolute w-full h-full top-0 bg-[rgba(0,0,0,0.7)] px-[50px] z-10">
      <div
        className="h-[100vh] flex justify-center items-center"
        ref={divElement}
      >
        <iframe
          width={560}
          height={315}
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="md:w-[660px] md:h-[367px]"
        />
      </div>
    </div>
  );
}
