import { ScrollContext } from "@/utils/scroll-osberver";
import React, { useRef, useContext } from "react";

export const TileContext = React.createContext({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper = ({ children, numOfPages }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef();
  const { current: elContainer } = refContainer;

  let currentPage = 0;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{ height: numOfPages * 100 + "vh" }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground = ({ children }) => (
  <div className="absolute h-full w-full bg-white">{children}</div>
);

export const TileContent = ({ children }) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

export const Tile = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const refContainer = useRef();
  const progress = Math.max(0, currentPage - page);

  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
