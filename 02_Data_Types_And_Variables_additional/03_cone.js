function calculateCone(radius, height){

    let volume = (Math.PI * (radius * radius) * height) / 3
    let slantHeight = Math.sqrt((radius * radius) + (height * height))
    let area = (Math.PI * radius * slantHeight) + Math.PI * (radius * radius)

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
    
}

calculateCone(3, 5)