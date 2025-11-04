import AnimatedText from "./animated-text";


export default function Text() {
  return (
    <AnimatedText
      text="The Hub for Every Dev"
      className="text-gradient text-6xl font-semibold max-sm:text-4xl text-center"
      animationType="letters"
      staggerDelay={0.08}
      duration={0.6}
    />
  );
}
