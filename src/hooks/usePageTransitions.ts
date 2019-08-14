import { useTransition, SpringConfig } from "react-spring";

interface usePageTransitionProps {
  translateX?: number;
  config?: SpringConfig;
}

const usePageTransition = (props: usePageTransitionProps = {}) => {
  const { translateX = "100", config } = props;

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0.5,
      transform: `translate3d(${translateX}vw, 0, 0)`,
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: config || { tension: 280, friction: 40 },
  });

  return transitions;
};

export default usePageTransition;
