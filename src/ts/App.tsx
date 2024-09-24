export function App() {
    const onClick = (text: string) => alert(text)
    return <div>
        <h1>Vite + TypeScript + SoloJSX</h1>
        <br />
        <div style="cursor: pointer" onclick={() => onClick("Hello")}>Click me</div>
        <br />
        <img src="/vite.svg" alt="" />
    </div>
}
document.body.append(App())