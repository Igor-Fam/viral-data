
export default function siro(alpha, gamma, beta, infectious, population, recovered, dead, time){
    var dt = 1;

    const x = [0], S = [], I = [], R = [], D= [];

    S[0] = population - infectious - dead;
    I[0] = infectious;
    R[0] = recovered;
    D[0] = dead;

    for(let i=1; i<time; i+=1){
        S.push(S[i - 1] - (alpha / population) * S[i - 1] * I[i - 1] *dt );
        I.push(I[i - 1] + ((alpha / population) * S[i - 1] * I[i - 1] - (gamma + beta) * I[i - 1]) *dt);
        R.push(R[i - 1] + gamma * I[i - 1] *dt);
        D.push(D[i - 1] + beta * I[i - 1] * dt);
        if(i%(time/10)==0)
            x.push(i);
    }
    const data = {
        labels: x,
        datasets: [{data: S, color: () => '#0f69fa'}, {data: I, color: () => '#f54242'}, {data: R, color: () => '#44f281'}, {data: D, color: () => '#ffa836'}]
      }

    return data;
}
