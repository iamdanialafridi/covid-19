export let  LoadApi = async(endpoint)=>{
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '43e3664505msh87bc7e989d69da2p17c882jsnf415222e493a',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    let getReq =await fetch('https://covid-193.p.rapidapi.com/'+endpoint, options)
       let response = await getReq.json();
       


   
    return response;
}