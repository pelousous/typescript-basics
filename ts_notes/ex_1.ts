export function commands(number: number) {
    const secretHandshake = number.toString(2).split("").reverse().reduce((acc: string[], el: string, index: number) => {
      if(index === 0 && el === '1') {acc.push('wink')};
      return acc;
    },[]);

    return secretHandshake;
}

console.log(commands(1));
//commands(2);
//commands(3);
