const dataSrc = "data:image/png;base64,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";
import * as THREE from 'three';

export default () => {
    "use strict";
    const CallMainStage = () => {
        const MainStage = () => {
            const Window = window,
                windowWidth = Window.innerWidth,
                windowHeight = Window.innerHeight,
                rendererCanvasID = "3D-particle-effect-canvas";

            let renderer,
                texture,
                scene,
                camera,
                particles,
                imagedata,
                clock = new THREE.Clock(),
                mouseX = 0,
                mouseY = 0,
                isMouseDown = true,
                lastMousePos = {x: 0, y: 0},
                windowHalfX = windowWidth / 2,
                windowHalfY = windowHeight / 2;

            //particle rotation
            let particleRotation;
            let centerVector = new THREE.Vector3(0, 0, 0);
            let previousTime = 0;

            const init = () => {
                THREE.ImageUtils.crossOrigin = "";
                renderer = new THREE.WebGLRenderer({
                    canvas: document.getElementById(rendererCanvasID), //canvas
                    alpha: true,
                    antialias: true
                });
                renderer.setSize(windowWidth, windowHeight);
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(50, windowWidth / windowHeight, 0.1, 10000);
                camera.position.set(-100, 0, 600);
                camera.lookAt(centerVector);
                scene.add(camera);
                let loader = new THREE.TextureLoader();
                loader.load(dataSrc, (texture) => {
                        imagedata = getImageData(texture.image);
                        let geometry = new THREE.Geometry();
                        let material = new THREE.PointsMaterial({
                            size: 2,
                            color: 0xffffff,
                            sizeAttenuation: false
                        });
                        for (let y = 0, y2 = imagedata.height; y < y2; y += 2) {
                            for (let x = 0, x2 = imagedata.width; x < x2; x += 2) {
                                if (imagedata.data[x * 4 + y * 4 * imagedata.width + 3] > 128) {
                                    let vertex = new THREE.Vector3();
                                    vertex.x = Math.random() * 1000 - 500;
                                    vertex.y = Math.random() * 1000 - 500;
                                    vertex.z = -Math.random() * 500;
                                    vertex.destination = {
                                        x: x - imagedata.width / 2,
                                        y: -y + imagedata.height / 2,
                                        z: 0
                                    };
                                    vertex.speed = Math.random() / 200 + 0.015;
                                    geometry.vertices.push(vertex);
                                }
                            }
                        }
                        particles = new THREE.Points(geometry, material);
                        scene.add(particles);
                    },
                    undefined,
                    (err) => {
                        console.error(`An error happened: ${err}`);
                    }
                );
                particleRotation = new THREE.Object3D();
                scene.add(particleRotation);
                let geometryPR = new THREE.TetrahedronGeometry(2, 0),
                    materialPR = new THREE.MeshPhongMaterial({
                        color: 0xffffff,
                        flatShading: THREE.FlatShading
                    });

                for (let i = 0; i < 1000; i++) {
                    let mesh = new THREE.Mesh(geometryPR, materialPR);
                    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
                    mesh.position.multiplyScalar(90 + Math.random() * 700);
                    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                    particleRotation.add(mesh);
                }
                let ambientLight = new THREE.AmbientLight(0x999999);
                scene.add(ambientLight);
                let lights = [];
                lights[0] = new THREE.DirectionalLight(0xffffff, 1);
                lights[0].position.set(1, 0, 0);
                lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
                lights[1].position.set(0.75, 1, 0.5);
                lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
                lights[2].position.set(-0.75, -1, 0.5);
                scene.add(lights[0]);
                scene.add(lights[1]);
                scene.add(lights[2]);
                document.addEventListener("mousemove", onDocumentMouseMove, false);
                document.addEventListener("touchstart", onDocumentTouchStart, false);
                document.addEventListener("touchmove", onDocumentTouchMove, false);
                document.addEventListener("mousedown", onDocumentMouseDown, false);
                document.addEventListener("mouseup", onDocumentMouseUp, false);
                Window.addEventListener("resize", onWindowResize, false);
            };

            const render = () => {
                requestAnimationFrame(render);
                let delta = clock.getDelta(),
                    thickness = 40;
                if (typeof particles !== typeof undefined) {
                    for (let i = 0, j = particles.geometry.vertices.length; i < j; i++) {
                        let particle = particles.geometry.vertices[i];
                        particle.x += (particle.destination.x - particle.x) * particle.speed;
                        particle.y += (particle.destination.y - particle.y) * particle.speed;
                        particle.z += (particle.destination.z - particle.z) * particle.speed;
                    }
                    if (delta - previousTime > thickness) {
                        let index = Math.floor(Math.random() * particles.geometry.vertices.length);
                        let particle1 = particles.geometry.vertices[index];
                        let particle2 = particles.geometry.vertices[particles.geometry.vertices.length - index];
                        TweenMax.to(particle, Math.random() * 2 + 1, {
                            x: particle2.x,
                            y: particle2.y,
                            ease: Power2.easeInOut
                        });
                        TweenMax.to(particle2, Math.random() * 2 + 1, {
                            x: particle1.x,
                            y: particle1.y,
                            ease: Power2.easeInOut
                        });
                        previousTime = delta;
                    }
                    particles.geometry.verticesNeedUpdate = true;
                }
                if (!isMouseDown) {
                    camera.position.x += (0 - camera.position.x) * 0.06;
                    camera.position.y += (0 - camera.position.y) * 0.06;
                }
                camera.position.x += (mouseX - camera.position.x) * 0.09;
                camera.position.y += (-mouseY - camera.position.y) * 0.09;
                camera.lookAt(centerVector);
                particleRotation.rotation.x += 0.0;
                particleRotation.rotation.y -= 0.004;
                renderer.render(scene, camera);
            };

            const onWindowResize = () => {
                camera.aspect = Window.innerWidth / Window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(Window.innerWidth, Window.innerHeight);
            };

            const onDocumentMouseMove = (event) => {
                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;
                if (isMouseDown) {
                    camera.position.x += (event.clientX - lastMousePos.x) / 100;
                    camera.position.y -= (event.clientY - lastMousePos.y) / 100;
                    camera.lookAt(centerVector);
                    lastMousePos = {x: event.clientX, y: event.clientY};
                }
            };

            const onDocumentTouchStart = (event) => {
                if (event.touches.length === 1) {
                    event.preventDefault();
                    mouseX = event.touches[0].pageX - windowHalfX;
                    mouseY = event.touches[0].pageY - windowHalfY;
                }
            };

            const onDocumentTouchMove = (event) => {
                if (event.touches.length === 1) {
                    event.preventDefault();
                    mouseX = event.touches[0].pageX - windowHalfX;
                    mouseY = event.touches[0].pageY - windowHalfY;
                }
            };

            const onDocumentMouseUp = () => {
                isMouseDown = false;
            };

            const onDocumentMouseDown = (event) => {
                isMouseDown = true;
                lastMousePos = {x: event.clientX, y: event.clientY};
            };

            const getImageData = (image) => {
                let canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                let ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0);
                return ctx.getImageData(0, 0, image.width, image.height);
            };
            return {
                init: () => {init()},
                render: () => {render()},
                getScene: () => {
                    return scene;
                },
                getCamera: () => {
                    return camera;
                }
            };
        };
        const Main = MainStage();
        Main.init();
        Main.render();
    };
    CallMainStage();
};
