import React, {useState} from 'react';

export default function siro(alpha, gamma, beta){
    var population = 1000, susceptible = 1000, infectious = 1, recovered = 0, dead = 0, dt = 1;

    const x = [], S = [], I = [], R = [], D= [];

    S[0] = susceptible - infectious - dead;
    I[0] = infectious;
    R[0] = recovered;
    D[0] = dead;

    for(let i=1; i<500; i+=1){
        S.push(S[i - 1] - (alpha / population) * S[i - 1] * I[i - 1] *dt );
        I.push(I[i - 1] + ((alpha / population) * S[i - 1] * I[i - 1] - (gamma + beta) * I[i - 1]) *dt);
        R.push(R[i - 1] + gamma * I[i - 1] *dt);
        D.push(D[i - 1] + beta * I[i - 1] * dt);
    }
    const data = {
        labels: x,
        datasets: [{data: S, color: () => '#0f69fa'}, {data: I, color: () => '#f54242'}, {data: R, color: () => '#44f281'}, {data: D, color: () => '#ffa836'}]
      }

    return data;
}
