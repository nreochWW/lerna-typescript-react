/// <reference types="react" />
export interface WorldProps {
    compiler: string;
    framework: string;
}
declare const World: (props: WorldProps) => JSX.Element;
export default World;
