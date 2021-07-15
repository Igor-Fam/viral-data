import React, {useState} from 'react';

export default function sir(alpha, gamma){
    var susceptible = 1000, infectious = 1, recovered = 0, dt = 1;

    const x = [], S = [], I = [], R = [];

    S[0] = susceptible - infectious;
    I[0] = infectious;
    R[0] = recovered;

    for(let i=1; i<500; i+=1){
        S.push((S[i - 1] - alpha * S[i - 1] * I[i - 1])*dt )  ;
        I.push((I[i - 1] + (alpha * S[i - 1] * I[i - 1] - gamma * I[i - 1]))*dt);
        R.push((R[i - 1] + gamma * I[i - 1])*dt);
    }
    const data = {
        labels: x,
        datasets: [{data: S, color: () => '#0f69fa'}, {data: I, color: () => '#f54242'}, {data: R, color: () => '#44f281'}]
      }

    return data;
}
