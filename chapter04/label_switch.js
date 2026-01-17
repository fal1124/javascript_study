for (let i = 1; i < 7; i++) {
    let result = i % 3;
    switch (result) {
        case 0:
            break;
        case 1:
        case 2:
            console.log(`${i}は3でわりきれません`)
    }
}

loop:
for (let i = 0; i < 7; i++) {
    result = i % 3;
    switch(result){
    case 0:
        break loop;
    case 1:
    case 2:
        console.log(`${i}は3でわりきれません`)
    }
}