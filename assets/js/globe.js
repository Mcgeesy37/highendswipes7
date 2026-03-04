const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

document.getElementById("globe")
.appendChild(renderer.domElement)

camera.position.z = 14


const geometry = new THREE.SphereGeometry(4,64,64)

const material = new THREE.MeshBasicMaterial({

color:0xc6a76a,
wireframe:true

})

const globe = new THREE.Mesh(geometry,material)

scene.add(globe)


function animate(){

requestAnimationFrame(animate)

globe.rotation.y += 0.002

renderer.render(scene,camera)

}

animate()
