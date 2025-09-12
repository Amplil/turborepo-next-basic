import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { ComponentA } from "@repo/ui/component-a";
import { ComponentAChild } from "./components/component-a-child";
import { ComponentBChild } from "./components/component-b-child";
import { ComponentCChild } from "./components/component-c-child";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl">工場B</div>
        <div className="max-w-2xl">
          <ComponentA
            lineName="製造ラインLB"
            children1={<ComponentAChild />}
            children2={<ComponentBChild />}
            children3={<ComponentCChild />}
          />
        </div>
      </main>
    </div>
  );
}
