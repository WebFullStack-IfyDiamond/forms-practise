let Alien = {
    name: 'Navin',
    tech: 'JS'
    }
    
    // Fetching the property of an object has 2 methods
    // 1. using the dot(.) operator
    // console.log(Alien.name);

    // 2.using the square bracket
    // console.log(Alien['tech']);

    // Complex objects 
    let SoftEng ={
        fname: 'Emmy',
        stack: 'Web development',
        laptop: {
            Ram: '16GB',
            SSD: '500GB',
            Brand: 'M1 MAC',
            OS: 'Monterey'
        } 
    }

    // console.log(SoftEng);
    // console.log(SoftEng.laptop.Brand);
    // console.log(SoftEng.laptop.Brand.length);

    // Deleting a property
    // delete SoftEng.laptop.OS
    // console.log(SoftEng);

    // for in loop
    // for(let key in SoftEng){
    //     console.log(key, SoftEng[laptop.key])
    // }

    for(let key in SoftEng.laptop){
        console.log(key, SoftEng.laptop[key])
    }

