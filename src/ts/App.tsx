import * as THREE from 'three';

export function App() {
    const [w, h] = [600, 400];
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;

    const scene = new THREE.Scene();
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial());
    scene.add(cube);

    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
    return <div> Vite + TypeScript + SoloJSX + Three {renderer.domElement}</div>
}
document.body.append(App())