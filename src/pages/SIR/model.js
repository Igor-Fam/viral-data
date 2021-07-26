
export default function sir(alpha, gamma, infectious, population, recovered, time){
    var dt = 1;

    const x = [0], S = [], I = [], R = [];

    S[0] = population - infectious;
    I[0] = infectious;
    R[0] = recovered;

    for(let i=1; i<time; i+=1){
        S.push((S[i - 1] - alpha * S[i - 1] * I[i - 1])*dt )  ;
        I.push((I[i - 1] + (alpha * S[i - 1] * I[i - 1] - gamma * I[i - 1]))*dt);
        R.push((R[i - 1] + gamma * I[i - 1])*dt);
        if(i%(time/10)==0)
            x.push(i);
    }
    const data = {
        labels: x,
        datasets: [{data: S, color: () => '#0f69fa'}, {data: I, color: () => '#f54242'}, {data: R, color: () => '#44f281'}]
      }

    return data;
}
