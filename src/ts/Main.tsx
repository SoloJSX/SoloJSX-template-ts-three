import solojsx from 'solojsx';
export default class Main {
    static init() {
        const e = (
            <div>
                <h1>Vite + TypeScript + SoloJSX</h1>
                <p>Minimal example</p>
                <br />
                <div style="cursor: pointer" onclick={() => alert("Hello")}>Click me</div>
                <br />
                <img src="/vite.svg" alt="" />
            </div>);
        document.body.append(e);
    }
}