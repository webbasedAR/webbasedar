let scene, camera, renderer, gltfmodel;
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  camera = new THREE.PerspectiveCamera(40,1,10,1000);
  // camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 0;
  camera.position.y = 120;
  camera.position.z = 80;

  var container = document.getElementById("canvas");
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(300, 300);

  container.appendChild(renderer.domElement);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  var light = new THREE.HemisphereLight( 0xffffff, 0x080820, 3);
  scene.add( light );
  
  let loader = new THREE.GLTFLoader();
  loader.load('chair_yellow/scene.gltf', function(gltf){
    var model = gltf.scene.children[0];
    model.scale.set(1.5, 1.5,1.5);
    model.rotation.set(3.85, 0 , 0.5);
    model.position.set(0, -76, 0);
    scene.add(gltf.scene);
    animate();
  });
}
function animate() {
    
//Tool to setup model
// console.log(model.rotation.x);
// model.rotation.x += 0.001;
renderer.render(scene,camera);
requestAnimationFrame(animate);
}
init();
